import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      title: "Complaint Submission",
      description:
        "Customers can submit their banking complaints and enquiries through the platform.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a4f9c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="18" x2="12" y2="12"></line>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Complaint Tracking",
      description:
        "Customers can monitor the status of their submitted complaints.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a4f9c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Customer Enquiries",
      description:
        "Customers can submit questions and requests for customer support.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a4f9c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Customer Care Response",
      description:
        "Customer care officers can review complaints and provide responses to customers.",
      icon: (
        <svg
          width="24"
          height="24"
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
      ),
    },
    {
      id: 5,
      title: "Complaint Status Management",
      description:
        "Officers can update the status of complaints as they are being handled.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a4f9c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "User Management",
      description:
        "Administrators can manage users and monitor system activities.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a4f9c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="app">
      {/* Services Header Section */}
      <section className="services-hero">
        <div className="section-container">
          <span className="section-tagline">SwiftCare Platform</span>
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            "SwiftCare provides a simple digital platform for customers to submit, track, and manage their banking complaints and enquiries."
          </p>
        </div>
      </section>

      {/* Services Cards Section */}
      <main className="services-content-section">
        <div className="section-container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Clean Call To Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h3 className="cta-title">Need Help With a Banking Complaint?</h3>
          <p className="cta-subtitle">
            "SwiftCare makes it easier to submit and track your customer care requests."
          </p>
          <Link to="/complaint" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </section>

      {/* Project Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} SwiftCare — Digital Customer Care Banking System</p>
      </footer>
    </div>
  );
}

export default Services;
