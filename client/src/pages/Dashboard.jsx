import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function formatComplaintDate(date) {
  if (!date) return "Not available";

  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function Dashboard() {
  const savedUser = localStorage.getItem("user");
  let user;

  try {
    user = savedUser ? JSON.parse(savedUser) : null;
  } catch {
    user = null;
  }

  const navigate = useNavigate();
  const customerName = user?.full_name || "Customer";
  const [complaints, setComplaints] = useState([]);
  const [isLoadingComplaints, setIsLoadingComplaints] = useState(Boolean(user?.id));
  const [complaintsError, setComplaintsError] = useState(false);

  useEffect(() => {
    if (!user?.id) return undefined;

    let isActive = true;

    const loadComplaints = async () => {
      setIsLoadingComplaints(true);
      setComplaintsError(false);

      try {
        const response = await fetch(
          `http://localhost:5000/api/complaints/user/${user.id}`
        );

        if (!response.ok) throw new Error("Unable to load complaints");

        const data = await response.json();

        if (isActive) setComplaints(data.complaints || []);
      } catch {
        if (isActive) setComplaintsError(true);
      } finally {
        if (isActive) setIsLoadingComplaints(false);
      }
    };

    loadComplaints();

    return () => {
      isActive = false;
    };
  }, [user?.id]);

  return (
    <div className="app dashboard-page">
      <main className="dashboard-main">
        <section className="dashboard-welcome" aria-labelledby="dashboard-title">
          <span className="section-tagline">SwiftCare customer support</span>
          <h1 id="dashboard-title">Welcome to Your Support Hub</h1>
          <h2>Welcome, {customerName}!</h2>
          <p>
            Submit your enquiries or complaints, track their progress, and receive
            support all in one convenient place.
          </p>
        </section>

        <section className="dashboard-services" aria-labelledby="services-title">
          <div className="dashboard-section-heading">
            <div>
              <span className="section-tagline">Customer services</span>
              <h2 id="services-title">How can we help today?</h2>
            </div>
            <button className="dashboard-primary-action" onClick={() => navigate("/complaint")}>
              Submit a Complaint
            </button>
          </div>

          <div className="dashboard-service-list">
            <button className="dashboard-service dashboard-service-action" onClick={() => navigate("/complaint")}>
              <span className="dashboard-service-icon" aria-hidden="true">+</span>
              <span className="dashboard-service-content">
                <strong>Submit a Complaint</strong>
                <span>Tell us about an issue or enquiry and our support team will assist you.</span>
              </span>
              <span className="dashboard-arrow" aria-hidden="true">-&gt;</span>
            </button>

            <div className="dashboard-service">
              <span className="dashboard-service-icon" aria-hidden="true">i</span>
              <span className="dashboard-service-content">
                <strong>Notifications</strong>
                <span>Updates from the SwiftCare support team will appear here.</span>
              </span>
              <span className="dashboard-status">Coming soon</span>
            </div>
          </div>
        </section>

        <section className="dashboard-complaints" aria-labelledby="my-complaints-title">
          <div className="dashboard-section-heading">
            <div>
              <span className="section-tagline">Your support requests</span>
              <h2 id="my-complaints-title">My Complaints</h2>
            </div>
            <button className="dashboard-primary-action" onClick={() => navigate("/complaint")}>
              Submit a New Complaint
            </button>
          </div>

          {isLoadingComplaints && (
            <p className="dashboard-feedback">Loading your complaints...</p>
          )}

          {complaintsError && (
            <p className="dashboard-feedback">Unable to load your complaints. Please try again.</p>
          )}

          {!isLoadingComplaints && !complaintsError && complaints.length === 0 && (
            <p className="dashboard-feedback">You have not submitted any complaints yet.</p>
          )}

          {!isLoadingComplaints && !complaintsError && complaints.length > 0 && (
            <div className="complaints-list">
              {complaints.map((complaint) => {
                const status = complaint.status || "Pending";
                const statusClass = status.toLowerCase().replace(/\s+/g, "-");

                return (
                  <article className="complaint-summary" key={complaint.id}>
                    <div className="complaint-summary-header">
                      <div>
                        <span className="complaint-summary-label">Complaint subject</span>
                        <h3>{complaint.subject}</h3>
                      </div>
                      <span className={`complaint-status complaint-status-${statusClass}`}>{status}</span>
                    </div>
                    <p className="complaint-description">{complaint.description}</p>
                    <dl className="complaint-details">
                      <div><dt>Category</dt><dd>{complaint.category}</dd></div>
                      <div><dt>Priority</dt><dd>{complaint.priority}</dd></div>
                      <div><dt>Date submitted</dt><dd>{formatComplaintDate(complaint.created_at)}</dd></div>
                    </dl>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="dashboard-profile" aria-labelledby="profile-title">
          <div>
            <span className="section-tagline">Your profile</span>
            <h2 id="profile-title">Account information</h2>
          </div>
          <dl>
            <div><dt>Name</dt><dd>{customerName}</dd></div>
            <div><dt>Email</dt><dd>{user?.email || "Not available"}</dd></div>
            {user?.phone && <div><dt>Phone</dt><dd>{user.phone}</dd></div>}
          </dl>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
