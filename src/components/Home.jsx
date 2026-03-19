import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const homeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

  .home-page {
    font-family: 'DM Sans', sans-serif;
    background-color: #f4f6fb;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .hero-section {
    background: linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%);
    color: white;
    padding: 80px 0 60px;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 320px; height: 320px;
    background: rgba(201, 168, 76, 0.08);
    border-radius: 50%;
  }

  .hero-section::after {
    content: '';
    position: absolute;
    bottom: -80px; left: -40px;
    width: 250px; height: 250px;
    background: rgba(201, 168, 76, 0.06);
    border-radius: 50%;
  }

  .hero-badge {
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

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #f5e6c0;
    line-height: 1.2;
    margin: 1rem 0;
  }

  .hero-title span {
    color: #c9a84c;
  }

  .hero-subtitle {
    color: rgba(220, 230, 255, 0.8);
    font-size: 1rem;
    max-width: 500px;
    line-height: 1.7;
  }

  .hero-btn-primary {
    background: #c9a84c !important;
    border: none !important;
    color: #0f2044 !important;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 0.6rem 1.5rem;
    border-radius: 6px;
    transition: opacity 0.2s;
  }

  .hero-btn-primary:hover { opacity: 0.85; }

  .hero-btn-outline {
    background: transparent !important;
    border: 1.5px solid rgba(201, 168, 76, 0.6) !important;
    color: #c9a84c !important;
    font-weight: 500;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 0.6rem 1.5rem;
    border-radius: 6px;
    transition: background 0.2s, color 0.2s;
  }

  .hero-btn-outline:hover {
    background: rgba(201, 168, 76, 0.1) !important;
  }

  /* ── Stats ── */
  .stats-section {
    background: white;
    padding: 40px 0;
    border-bottom: 1px solid #e8eaf0;
  }

  .stat-item {
    text-align: center;
    padding: 1rem;
    border-right: 1px solid #e8eaf0;
  }

  .stat-item:last-child { border-right: none; }

  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0f2044;
  }

  .stat-number span { color: #c9a84c; }

  .stat-label {
    font-size: 0.8rem;
    color: #7a869a;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }

  /* ── Features ── */
  .features-section {
    padding: 70px 0;
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
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    color: #0f2044;
    font-weight: 700;
  }

  .feature-card {
    border: 1px solid #e8eaf0 !important;
    border-radius: 12px !important;
    padding: 1.5rem;
    background: white !important;
    transition: box-shadow 0.25s, transform 0.25s;
    height: 100%;
  }

  .feature-card:hover {
    box-shadow: 0 8px 32px rgba(15, 32, 68, 0.1) !important;
    transform: translateY(-4px);
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    background: rgba(201, 168, 76, 0.12);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .feature-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: #0f2044;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .feature-desc {
    font-size: 0.88rem;
    color: #7a869a;
    line-height: 1.6;
    margin: 0;
  }

  /* ── Announcements ── */
  .announcements-section {
    background: white;
    padding: 70px 0;
  }

  .announcement-item {
    border-left: 3px solid #c9a84c;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    background: #f9f9fb;
    border-radius: 0 8px 8px 0;
  }

  .announcement-date {
    font-size: 0.75rem;
    color: #c9a84c;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .announcement-text {
    font-size: 0.9rem;
    color: #2d3a52;
    margin: 2px 0 0;
    font-weight: 500;
  }

  /* ── CTA ── */
  .cta-section {
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
    margin-bottom: 1.5rem;
  }

  @media (max-width: 767px) {
    .stat-item { border-right: none; border-bottom: 1px solid #e8eaf0; }
    .stat-item:last-child { border-bottom: none; }
    .hero-section { padding: 60px 0 40px; text-align: center; }
    .hero-subtitle { margin: 0 auto; }
  }
`;

const features = [
  {
    icon: "🎓",
    title: "Student Management",
    desc: "Track admissions, attendance, grades, and student profiles all in one place.",
  },
  {
    icon: "👨‍🏫",
    title: "Faculty Portal",
    desc: "Manage teacher assignments, schedules, and performance evaluations easily.",
  },
  {
    icon: "📅",
    title: "Timetable Scheduler",
    desc: "Auto-generate conflict-free timetables for classes and examinations.",
  },
  {
    icon: "💰",
    title: "Fee Management",
    desc: "Collect, track, and report on student fees with automated reminders.",
  },
  {
    icon: "📊",
    title: "Reports & Analytics",
    desc: "Get real-time insights into school performance with detailed dashboards.",
  },
  {
    icon: "📢",
    title: "Notice Board",
    desc: "Broadcast announcements to students, parents, and staff instantly.",
  },
];

const announcements = [
  {
    date: "Mar 14, 2026",
    text: "Annual Sports Day scheduled for March 28th — all students must register.",
  },
  {
    date: "Mar 10, 2026",
    text: "Mid-term examination timetable has been published. Check the portal.",
  },
  {
    date: "Mar 05, 2026",
    text: "Parent-Teacher Meeting on March 20th from 10:00 AM to 2:00 PM.",
  },
  {
    date: "Feb 28, 2026",
    text: "New library books added — visit the library catalog for the updated list.",
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <style>{homeStyles}</style>

      {/* Hero */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <Badge className="hero-badge mb-2">
                School Management System
              </Badge>
              <h1 className="hero-title">
                Manage Your School <span>Smarter & Faster</span>
              </h1>
              <p className="hero-subtitle">
                A complete platform for administrators, teachers, students, and
                parents — built to simplify every aspect of school operations.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button className="hero-btn-primary">Get Started</Button>
                <Button className="hero-btn-outline">Learn More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <Container>
          <Row>
            {[
              { number: "1,200+", label: "Students Enrolled" },
              { number: "80+", label: "Faculty Members" },
              { number: "40+", label: "Active Classes" },
              { number: "98%", label: "Attendance Rate" },
            ].map((s, i) => (
              <Col xs={6} md={3} key={i}>
                <div className="stat-item">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section className="features-section">
        <Container>
          <div className="text-center mb-5">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Everything Your School Needs</h2>
          </div>
          <Row className="g-4">
            {features.map((f, i) => (
              <Col xs={12} sm={6} lg={4} key={i}>
                <Card className="feature-card border-0">
                  <div className="feature-icon">{f.icon}</div>
                  <p className="feature-title">{f.title}</p>
                  <p className="feature-desc">{f.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Announcements */}
      <section className="announcements-section">
        <Container>
          <Row className="align-items-start">
            <Col lg={5} className="mb-4 mb-lg-0">
              <p className="section-label">Latest Updates</p>
              <h2 className="section-title">School Announcements</h2>
              <p
                className="mt-3"
                style={{
                  color: "#7a869a",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                Stay up to date with the latest news, events, and important
                notices from the school administration.
              </p>
            </Col>
            <Col lg={7}>
              {announcements.map((a, i) => (
                <div className="announcement-item" key={i}>
                  <p className="announcement-date">{a.date}</p>
                  <p className="announcement-text">{a.text}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <Container>
          <h2 className="cta-title">Ready to Transform Your School?</h2>
          <p className="cta-subtitle">
            Join hundreds of schools already using our platform.
          </p>
          <Button className="hero-btn-primary">Get Started Today</Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
