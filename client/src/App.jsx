import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Complaint from "./pages/Complaint";
import Services from "./pages/Services";
import About from "./pages/About";
import "./App.css";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem("user")));

  useEffect(() => {
    const syncLoginState = () => setIsLoggedIn(Boolean(localStorage.getItem("user")));
    window.addEventListener("storage", syncLoginState);
    window.addEventListener("swiftcare-auth-change", syncLoginState);

    return () => {
      window.removeEventListener("storage", syncLoginState);
      window.removeEventListener("swiftcare-auth-change", syncLoginState);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">SwiftCare</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/complaint">Complaints</Link>
            <button type="button" className="navbar-logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/complaint">Complaints</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="app">

      {/* ── NAVBAR ── */}

      {/* ── 1. HERO ── */}
      <section className="hero-section" id="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-label">SwiftCare Banking Platform</span>
            <h1 className="hero-heading">Digital Customer Care Banking System</h1>
            <p className="hero-desc">
              SwiftCare provides a simple and convenient way for customers to submit
              complaints, make enquiries, receive responses, and track their support
              requests online.
            </p>
            <div className="hero-actions">
              <Link to="/complaint" className="btn-primary">Submit a Complaint</Link>
              <Link to="/login" className="btn-outline">Login</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY SWIFTCARE ── */}
      <section className="home-section bg-white" id="why">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tagline">Why Choose SwiftCare?</span>
            <h2 className="section-title">Reliable Support at Your Fingertips</h2>
            <p className="section-desc">
              Designed to make banking customer support faster, more transparent, and
              completely hassle-free.
            </p>
          </div>

          <div className="cards-grid-4">
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
              </div>
              <h3>Easy Complaint Submission</h3>
              <p>Submit banking complaints and enquiries online without visiting a branch.</p>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3>Fast Customer Support</h3>
              <p>Customer care officers review and respond to complaints in a structured and timely manner.</p>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Complaint Tracking</h3>
              <p>Monitor the real-time status of every complaint you have submitted through your dashboard.</p>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>24/7 Accessibility</h3>
              <p>Access SwiftCare at any time and from any device — no appointments needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section className="home-section bg-light" id="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tagline">Simple Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-desc">
              Get your banking complaint addressed in four clear steps.
            </p>
          </div>

          <div className="steps-row">
            <div className="step-item">
              <div className="step-num">01</div>
              <div className="step-connector"></div>
              <div className="step-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
              </div>
              <h4>Submit Complaint</h4>
              <p>Log in and submit your banking complaint or enquiry through the platform.</p>
            </div>

            <div className="step-item">
              <div className="step-num">02</div>
              <div className="step-connector"></div>
              <div className="step-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h4>Complaint Reviewed</h4>
              <p>A customer care officer reviews your complaint and takes the necessary action.</p>
            </div>

            <div className="step-item">
              <div className="step-num">03</div>
              <div className="step-connector"></div>
              <div className="step-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h4>Receive Response</h4>
              <p>Receive a written response from customer care directly through the platform.</p>
            </div>

            <div className="step-item">
              <div className="step-num">04</div>
              <div className="step-connector hide-connector"></div>
              <div className="step-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h4>Track Status</h4>
              <p>Monitor your complaint status at any time from your personal dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section className="home-section bg-white" id="services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tagline">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">
              SwiftCare covers all the key customer care needs you may have with your bank.
            </p>
          </div>

          <div className="services-list-grid">
            <div className="service-list-item">
              <div className="sli-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
              </div>
              <div>
                <h4>Complaint Submission</h4>
                <p>Submit your banking complaints and enquiries online with ease.</p>
              </div>
            </div>

            <div className="service-list-item">
              <div className="sli-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div>
                <h4>Customer Enquiries</h4>
                <p>Submit enquiries and questions to the bank's customer care team.</p>
              </div>
            </div>

            <div className="service-list-item">
              <div className="sli-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4>Complaint Status Tracking</h4>
                <p>Track and monitor the progress of your submitted complaints.</p>
              </div>
            </div>

            <div className="service-list-item">
              <div className="sli-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4f9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <div>
                <h4>Customer Support Responses</h4>
                <p>Receive timely, written responses directly from customer care officers.</p>
              </div>
            </div>
          </div>

          <div className="section-action">
            <Link to="/services" className="btn-outline-blue">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── 5. CALL TO ACTION ── */}
      <section className="home-cta-section">
        <div className="home-cta-inner">
          <h2 className="home-cta-title">Need Help? We're Here for You.</h2>
          <p className="home-cta-desc">
            Submit your banking complaint or enquiry online — no branch visit required.
            Our customer care team will review and respond to you promptly.
          </p>
          <Link to="/complaint" className="btn-primary">Get Started</Link>
        </div>
      </section>

      {/* ── 6. FOOTER ── */}
      <footer className="home-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">SwiftCare</span>
            <p>A digital customer care banking system that makes it simple to submit, track, and manage your banking complaints online.</p>
          </div>

          <div className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/complaint">Complaints</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SwiftCare — Digital Customer Care Banking System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
