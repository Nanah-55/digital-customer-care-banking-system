import { Link } from "react-router-dom";

function About() {
  const customerFeatures = [
    "Register and create an account",
    "Submit complaints and enquiries",
    "Track complaint status",
    "Receive responses and updates",
  ];

  const officerFeatures = [
    "View customer complaints",
    "Review complaints",
    "Respond to customers",
    "Update complaint status",
  ];

  const adminFeatures = [
    "Manage users",
    "Monitor system activities",
    "Manage complaints",
    "Generate basic reports",
  ];

  return (
    <div className="app">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="section-container">
          <span className="section-tagline">Who We Are</span>
          <h2 className="about-title">About SwiftCare</h2>
          <p className="about-intro">
            SwiftCare is a digital customer care banking system designed to
            provide customers with a convenient platform for submitting and
            tracking banking complaints and enquiries.
          </p>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="about-purpose-section">
        <div className="section-container about-purpose-inner">
          <div className="about-purpose-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a4f9c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div className="about-purpose-text">
            <h3 className="about-section-title">Our Purpose</h3>
            <p className="about-section-desc">
              The system is designed to make customer support easier by providing
              a structured digital platform where customers can submit complaints,
              monitor their status, and receive responses from customer care
              officers.
            </p>
          </div>
        </div>
      </section>

      {/* What SwiftCare Provides */}
      <section className="about-provides-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tagline">Platform Capabilities</span>
            <h3 className="section-title">What SwiftCare Provides</h3>
            <p className="section-desc">
              SwiftCare supports three types of users — each with their own
              dedicated set of capabilities within the platform.
            </p>
          </div>

          <div className="about-roles-grid">
            {/* Customers */}
            <div className="about-role-card">
              <div className="about-role-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a4f9c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4 className="about-role-title">For Customers</h4>
              <ul className="about-role-list">
                {customerFeatures.map((item, i) => (
                  <li key={i}>
                    <span className="about-list-check">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a4f9c"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care Officers */}
            <div className="about-role-card">
              <div className="about-role-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a4f9c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h4 className="about-role-title">For Customer Care Officers</h4>
              <ul className="about-role-list">
                {officerFeatures.map((item, i) => (
                  <li key={i}>
                    <span className="about-list-check">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a4f9c"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Administrators */}
            <div className="about-role-card">
              <div className="about-role-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a4f9c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <h4 className="about-role-title">For Administrators</h4>
              <ul className="about-role-list">
                {adminFeatures.map((item, i) => (
                  <li key={i}>
                    <span className="about-list-check">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a4f9c"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <h3 className="cta-title">Need Help With a Banking Complaint?</h3>
          <p className="cta-subtitle">
            "SwiftCare makes it easier to submit and track your customer care requests."
          </p>
          <Link to="/register" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} SwiftCare — Digital Customer Care Banking System</p>
      </footer>
    </div>
  );
}

export default About;
