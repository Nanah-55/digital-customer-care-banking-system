const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const pool = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Test database connection
pool
  .connect()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
  });

// Register a new user
app.post("/api/register", async (req, res) => {
  try {
    const { full_name, email, password, phone } = req.body;

    // Check required fields
    if (!full_name || !email || !password) {
      return res.status(400).json({
        message: "Full name, email, and password are required",
      });
    }

    // Check whether email already exists
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = await pool.query(
      `INSERT INTO users (full_name, email, password, phone)
       VALUES ($1, $2, $3, $4)
       RETURNING id, full_name, email, phone, role, created_at`,
      [full_name, email, hashedPassword, phone || null]
    );

    res.status(201).json({
      message: "User registered successfully",
      user: newUser.rows[0],
    });
  } catch (error) {
    console.error("Registration error:", error.message);

    res.status(500).json({
      message: "Server error during registration",
    });
  }
});

// LOGIN API
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Find user by email
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    // If user does not exist
    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = result.rows[0];

    // Compare entered password with hashed password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    // If password is incorrect
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Login successful
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        created_at: user.created_at,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);

    res.status(500).json({
      message: "Server error during login",
    });
  }
});

// SUBMIT A COMPLAINT
app.post("/api/complaints", async (req, res) => {
  try {
    const {
      user_id,
      subject,
      description,
      category,
      priority,
    } = req.body;

    // Check required fields
    if (!user_id || !subject || !description) {
      return res.status(400).json({
        message: "User ID, subject, and description are required",
      });
    }

    // Save complaint to database
    const newComplaint = await pool.query(
      `INSERT INTO complaints
       (user_id, subject, description, category, priority)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        user_id,
        subject,
        description,
        category || null,
        priority || "Medium",
      ]
    );

    res.status(201).json({
      message: "Complaint submitted successfully",
      complaint: newComplaint.rows[0],
    });
  } catch (error) {
    console.error("Complaint submission error:", error.message);

    res.status(500).json({
      message: "Server error while submitting complaint",
    });
  }
});

// GET COMPLAINTS FOR ONE CUSTOMER
app.get("/api/complaints/user/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    if (!Number.isInteger(userId) || userId < 1) {
      return res.status(400).json({
        message: "A valid user ID is required",
      });
    }

    const result = await pool.query(
      `SELECT id, user_id, subject, description, category, priority, status, created_at
       FROM complaints
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [userId]
    );

    res.status(200).json({
      complaints: result.rows,
    });
  } catch (error) {
    console.error("Complaint retrieval error:", error.message);
    res.status(500).json({
      message: "Unable to retrieve complaints",
    });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
