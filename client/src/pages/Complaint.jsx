import { useState } from "react";
import { Link } from "react-router-dom";

function Complaint() {
    const [formData, setFormData] = useState({
        subject: "",
        description: "",
        category: "",
        priority: "Medium",
    });

    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        if (!formData.subject.trim()) {
            setMessage("Please enter a complaint subject.");
            return;
        }

        if (!formData.category) {
            setMessage("Please select a category.");
            return;
        }

        if (!formData.description.trim()) {
            setMessage("Please describe your complaint.");
            return;
        }

        // Get logged-in user
        const savedUser = localStorage.getItem("user");

        if (!savedUser) {
            setMessage("Please login before submitting a complaint.");
            return;
        }

        let user;

        try {
            user = JSON.parse(savedUser);
        } catch {
            setMessage("Please login before submitting a complaint.");
            return;
        }

        if (!user?.id) {
            setMessage("Please login before submitting a complaint.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/complaints",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_id: user.id,
                        subject: formData.subject,
                        description: formData.description,
                        category: formData.category,
                        priority: formData.priority,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setMessage("Complaint submitted successfully!");

                // Clear form
                setFormData({
                    subject: "",
                    description: "",
                    category: "",
                    priority: "Medium",
                });
            } else {
                setMessage(data.message);
            }
        } catch {
            setMessage("Unable to connect to the server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="auth-section">
            <h2 className="auth-title">Submit a Complaint</h2>
            <p className="auth-subtitle">
                Tell us about the issue you are experiencing, and we will assist you.
            </p>

            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Complaint Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a Category</option>
                        <option value="Account">Account Issue</option>
                        <option value="Transaction">Transaction Issue</option>
                        <option value="ATM">ATM/Card Issue</option>
                        <option value="Online Banking">Online Banking</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="priority">Priority</label>
                    <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low Priority</option>
                        <option value="Medium">Medium Priority</option>
                        <option value="High">High Priority</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Describe your complaint in detail..."
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                        required
                    />
                </div>

                <button type="submit" className="auth-button" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Complaint"}
                </button>
            </form>

            {message && <p className="auth-message">{message}</p>}

            <p className="auth-link">
                Need help? <Link to="/dashboard">Back to Dashboard</Link>
            </p>
        </div>
    );
}

export default Complaint;
