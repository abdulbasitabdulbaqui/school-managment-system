import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const contactStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

  .contact-page {
    font-family: 'DM Sans', sans-serif;
    background-color: #f4f6fb;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .contact-hero {
    background: linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%);
    padding: 80px 0 60px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .contact-hero::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 320px; height: 320px;
    background: rgba(201, 168, 76, 0.08);
    border-radius: 50%;
  }

  .contact-hero::after {
    content: '';
    position: absolute;
    bottom: -80px; left: -40px;
    width: 250px; height: 250px;
    background: rgba(201, 168, 76, 0.06);
    border-radius: 50%;
  }

  .contact-badge {
    background: rgba(201, 168, 76, 0.15) !important;
    color: #c9a84c !important;
    border: 1px solid rgba(201, 168, 76, 0.4);
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0.4rem 0.9rem;
    border-radius: 20px;
    font-family: 'DM Sans', sans-serif;
  }

  .contact-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #f5e6c0;
    line-height: 1.2;
    margin: 1rem auto;
  }

  .contact-hero-title span { color: #c9a84c; }

  .contact-hero-subtitle {
    color: rgba(220, 230, 255, 0.8);
    font-size: 1rem;
    max-width: 520px;
    line-height: 1.7;
    margin: 0 auto;
  }

  /* ── Info Cards ── */
  .info-section {
    padding: 60px 0 40px;
    background: #f4f6fb;
  }

  .info-card {
    border: 1px solid #e8eaf0 !important;
    border-radius: 12px !important;
    padding: 1.75rem;
    background: white !important;
    transition: box-shadow 0.25s, transform 0.25s;
    height: 100%;
    text-align: center;
  }

  .info-card:hover {
    box-shadow: 0 8px 32px rgba(15, 32, 68, 0.1) !important;
    transform: translateY(-4px);
  }

  .info-icon {
    width: 52px;
    height: 52px;
    background: rgba(201, 168, 76, 0.12);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin: 0 auto 1rem;
  }

  .info-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: #0f2044;
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  .info-text {
    font-size: 0.87rem;
    color: #7a869a;
    line-height: 1.6;
    margin: 0;
  }

  .info-link {
    font-size: 0.87rem;
    color: #c9a84c;
    text-decoration: none;
    font-weight: 500;
  }

  .info-link:hover { text-decoration: underline; color: #b8963e; }

  /* ── Hours + Map Section ── */
  .hours-section {
    padding: 20px 0 70px;
    background: #f4f6fb;
  }

  .form-card {
    border: 1px solid #e8eaf0 !important;
    border-radius: 14px !important;
    padding: 2rem;
    background: white !important;
    box-shadow: 0 4px 24px rgba(15, 32, 68, 0.06);
  }

  .section-label {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #c9a84c;
    font-weight: 600;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    color: #0f2044;
    font-weight: 700;
  }

  /* ── Office Hours ── */
  .hours-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.65rem 0;
    border-bottom: 1px solid #f0f2f7;
    font-size: 0.88rem;
  }

  .hours-item:last-child { border-bottom: none; }
  .hours-day { color: #2d3a52; font-weight: 500; }
  .hours-time { color: #c9a84c; font-weight: 600; font-size: 0.83rem; }
  .hours-closed { color: #e05c5c; font-weight: 600; font-size: 0.83rem; }

  /* ── Map ── */
  .map-placeholder {
    background: linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%);
    border-radius: 14px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    gap: 0.75rem;
    border: 3px solid rgba(201, 168, 76, 0.3);
  }

  .map-placeholder p {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    color: rgba(220, 230, 255, 0.7);
    margin: 0;
    letter-spacing: 0.5px;
  }

  /* ── CTA ── */
  .contact-cta {
    background: linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%);
    padding: 60px 0;
    text-align: center;
  }

  .cta-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: #f5e6c0;
    font-weight: 700;
  }

  .cta-subtitle {
    color: rgba(220, 230, 255, 0.75);
    font-size: 0.95rem;
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    .contact-hero { padding: 60px 0 40px; }
    .form-card { padding: 1.5rem; }
  }
`;

const infoCards = [
  {
    icon: "📍",
    title: "Our Address",
    content: (
      <p className="info-text">
        123 Knowledge Park, Sector 14
        <br />
        Mumbai, Maharashtra 400001
        <br />
        India
      </p>
    ),
  },
  {
    icon: "📞",
    title: "Phone Numbers",
    content: (
      <>
        <a href="tel:+912212345678" className="info-link d-block">
          +91 22 1234 5678
        </a>
        <a href="tel:+919876543210" className="info-link d-block mt-1">
          +91 98765 43210
        </a>
      </>
    ),
  },
  {
    icon: "✉️",
    title: "Email Us",
    content: (
      <>
        <a href="mailto:info@scholaradmin.edu" className="info-link d-block">
          info@scholaradmin.edu
        </a>
        <a
          href="mailto:admissions@scholaradmin.edu"
          className="info-link d-block mt-1"
        >
          admissions@scholaradmin.edu
        </a>
      </>
    ),
  },
  {
    icon: "🌐",
    title: "Follow Us",
    content: (
      <>
        <a href="#" className="info-link d-block">
          Facebook
        </a>
        <a href="#" className="info-link d-block mt-1">
          Instagram
        </a>
        <a href="#" className="info-link d-block mt-1">
          Twitter / X
        </a>
      </>
    ),
  },
];

const officeHours = [
  { day: "Monday – Friday", time: "8:00 AM – 5:00 PM", closed: false },
  { day: "Saturday", time: "9:00 AM – 1:00 PM", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
  { day: "Public Holidays", time: "Closed", closed: true },
];

const Contact = () => {
  return (
    <div className="contact-page">
      <style>{contactStyles}</style>

      {/* Hero */}
      <section className="contact-hero">
        <Container>
          <Badge className="contact-badge mb-2">Contact Us</Badge>
          <h1 className="contact-hero-title">
            We'd Love to <span>Hear From You</span>
          </h1>
          <p className="contact-hero-subtitle">
            Have a question, concern, or just want to learn more about our
            school? Reach out and our team will get back to you promptly.
          </p>
        </Container>
      </section>

      {/* Info Cards */}
      <section className="info-section">
        <Container>
          <Row className="g-4 justify-content-center">
            {infoCards.map((c, i) => (
              <Col xs={12} sm={6} lg={3} key={i}>
                <Card className="info-card border-0">
                  <div className="info-icon">{c.icon}</div>
                  <p className="info-title">{c.title}</p>
                  {c.content}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Office Hours + Map — centered */}
      <section className="hours-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={8}>
              <div className="text-center mb-4">
                <p className="section-label">Working Hours</p>
                <h2 className="section-title">Office Hours</h2>
              </div>
              <Card className="form-card border-0 mb-4">
                {officeHours.map((h, i) => (
                  <div className="hours-item" key={i}>
                    <span className="hours-day">{h.day}</span>
                    {h.closed ? (
                      <span className="hours-closed">{h.time}</span>
                    ) : (
                      <span className="hours-time">{h.time}</span>
                    )}
                  </div>
                ))}
              </Card>
              <div className="map-placeholder">
                <span>🗺️</span>
                <p>123 Knowledge Park, Mumbai</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <Container>
          <h2 className="cta-title">Looking to Enroll Your Child?</h2>
          <p className="cta-subtitle">
            Visit us in person or call us to schedule a school tour.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
