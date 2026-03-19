import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const aboutStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

  .about-page {
    font-family: 'DM Sans', sans-serif;
    background-color: #f4f6fb;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .about-hero {
    background: linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%);
    padding: 70px 0 50px;
    position: relative;
    overflow: hidden;
  }

  .about-hero::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 320px; height: 320px;
    background: rgba(201, 168, 76, 0.08);
    border-radius: 50%;
  }

  .about-hero::after {
    content: '';
    position: absolute;
    bottom: -80px; left: -40px;
    width: 250px; height: 250px;
    background: rgba(201, 168, 76, 0.06);
    border-radius: 50%;
  }

  .about-badge {
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

  .about-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.7rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #f5e6c0;
    line-height: 1.25;
    margin: 1rem 0;
  }

  .about-hero-title span { color: #c9a84c; }

  .about-hero-subtitle {
    color: rgba(220, 230, 255, 0.8);
    font-size: 1rem;
    max-width: 550px;
    line-height: 1.7;
  }

  /* ── Section Shared ── */
  .section-label {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #c9a84c;
    font-weight: 600;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    color: #0f2044;
    font-weight: 700;
  }

  /* ── Mission & Vision ── */
  .mission-section {
    padding: 60px 0;
    background: white;
  }

  .mission-card {
    border: 1px solid #e8eaf0 !important;
    border-radius: 12px !important;
    padding: 1.75rem;
    background: white !important;
    transition: box-shadow 0.25s, transform 0.25s;
    height: 100%;
  }

  .mission-card:hover {
    box-shadow: 0 8px 32px rgba(15, 32, 68, 0.1) !important;
    transform: translateY(-4px);
  }

  .mission-icon {
    width: 52px; height: 52px;
    background: rgba(201, 168, 76, 0.12);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

  .mission-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: #0f2044;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .mission-desc {
    font-size: 0.88rem;
    color: #7a869a;
    line-height: 1.7;
    margin: 0;
  }

  /* ── Story ── */
  .story-section {
    padding: 60px 0;
    background: #f4f6fb;
  }

  .story-text {
    font-size: 0.93rem;
    color: #4a5568;
    line-height: 1.8;
  }

  .story-highlight {
    border-left: 3px solid #c9a84c;
    padding: 1rem 1.25rem;
    background: rgba(201, 168, 76, 0.06);
    border-radius: 0 8px 8px 0;
    font-size: 0.93rem;
    color: #2d3a52;
    font-style: italic;
    margin: 1.5rem 0;
    line-height: 1.7;
  }

  .milestone-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
    align-items: flex-start;
  }

  .milestone-year {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: #c9a84c;
    min-width: 44px;
  }

  .milestone-text {
    font-size: 0.88rem;
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
    padding-top: 2px;
  }

  /* ── Team ── */
  .team-section {
    padding: 60px 0;
    background: white;
  }

  .team-card {
    border: 1px solid #e8eaf0 !important;
    border-radius: 12px !important;
    overflow: hidden;
    transition: box-shadow 0.25s, transform 0.25s;
    background: white !important;
    height: 100%;
  }

  .team-card:hover {
    box-shadow: 0 8px 32px rgba(15, 32, 68, 0.1) !important;
    transform: translateY(-4px);
  }

  .team-avatar {
    width: 68px; height: 68px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0f2044, #1a3a6e);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem;
    margin: 0 auto 1rem;
    border: 3px solid rgba(201, 168, 76, 0.3);
  }

  .team-name {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: #0f2044;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  .team-role {
    font-size: 0.75rem;
    color: #c9a84c;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 600;
  }

  .team-bio {
    font-size: 0.83rem;
    color: #7a869a;
    line-height: 1.6;
    margin-top: 0.6rem;
  }

  /* ── Values ── */
  .values-section {
    padding: 60px 0;
    background: #f4f6fb;
  }

  .value-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1.25rem;
    background: white;
    border-radius: 10px;
    border: 1px solid #e8eaf0;
    height: 100%;
    transition: box-shadow 0.2s;
  }

  .value-item:hover { box-shadow: 0 4px 16px rgba(15, 32, 68, 0.08); }

  .value-icon { font-size: 1.4rem; min-width: 36px; }

  .value-title {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    color: #0f2044;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .value-desc {
    font-size: 0.82rem;
    color: #7a869a;
    line-height: 1.6;
    margin: 0;
  }

  /* ── CTA ── */
  .about-cta {
    background: linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%);
    padding: 60px 0;
    text-align: center;
  }

  .cta-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.4rem, 3vw, 2rem);
    color: #f5e6c0;
    font-weight: 700;
  }

  .cta-subtitle {
    color: rgba(220, 230, 255, 0.75);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .btn-gold {
    background: #c9a84c !important;
    border: none !important;
    color: #0f2044 !important;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 0.6rem 1.8rem;
    border-radius: 6px;
    transition: opacity 0.2s;
  }

  .btn-gold:hover { opacity: 0.85; }

  /* ══════════════════════════
     RESPONSIVE FIXES
  ══════════════════════════ */

  /* Tablet */
  @media (max-width: 991px) {
    .about-hero { padding: 60px 0 40px; }
    .mission-section, .story-section,
    .team-section, .values-section { padding: 50px 0; }
  }

  /* Mobile */
  @media (max-width: 767px) {
    .about-hero {
      padding: 50px 0 36px;
      text-align: center;
    }
    .about-hero-subtitle {
      margin: 0 auto;
      font-size: 0.92rem;
    }
    .about-hero-title { font-size: clamp(1.5rem, 7vw, 2.2rem); }

    /* Story section — stack columns, milestones below */
    .story-section .g-5 { --bs-gutter-y: 2rem; }
    .story-highlight { font-size: 0.88rem; }

    /* Team: 2 columns on mobile */
    .team-card { padding: 1.25rem !important; }

    /* Values: 1 column on small mobile */
    .value-item { padding: 1rem; }

    .mission-section, .story-section,
    .team-section, .values-section { padding: 40px 0; }

    .about-cta { padding: 44px 0; }
  }

  /* Small mobile */
  @media (max-width: 480px) {
    .about-hero { padding: 40px 0 28px; }
    .about-hero-title { font-size: 1.55rem; }

    /* Team: 1 per row on very small screens */
    .team-card { margin-bottom: 0; }

    .milestone-item { gap: 0.75rem; }
    .milestone-year { font-size: 0.9rem; min-width: 38px; }
    .milestone-text { font-size: 0.85rem; }

    .story-text { font-size: 0.88rem; }
    .story-highlight { font-size: 0.85rem; padding: 0.8rem 1rem; }
  }
`;

const team = [
  {
    emoji: "👨‍💼",
    name: "Dr. Rajesh Sharma",
    role: "Principal",
    bio: "Over 25 years of experience in educational leadership. Passionate about student development and academic excellence.",
  },
  {
    emoji: "👩‍🏫",
    name: "Mrs. Priya Nair",
    role: "Vice Principal",
    bio: "Specializes in curriculum development and teacher training. Dedicated to modernizing school education.",
  },
  {
    emoji: "👨‍💻",
    name: "Mr. Arjun Mehta",
    role: "IT Administrator",
    bio: "Manages all digital infrastructure and the school management system. 10+ years in EdTech.",
  },
  {
    emoji: "👩‍⚕️",
    name: "Ms. Kavya Reddy",
    role: "Student Counselor",
    bio: "Supports student mental health and career guidance. Certified psychologist with a focus on youth wellbeing.",
  },
];

const values = [
  { icon: "🏆", title: "Excellence", desc: "We pursue the highest academic and personal standards in everything we do." },
  { icon: "🤝", title: "Integrity", desc: "Honesty and transparency guide every decision we make as an institution." },
  { icon: "🌱", title: "Growth", desc: "We nurture continuous learning for both students and educators alike." },
  { icon: "🌍", title: "Inclusivity", desc: "Every student deserves equal opportunity, respect, and support to thrive." },
  { icon: "💡", title: "Innovation", desc: "We embrace technology and new ideas to keep education future-ready." },
  { icon: "❤️", title: "Community", desc: "We build strong bonds between students, parents, staff, and society." },
];

const milestones = [
  { year: "1998", text: "School founded with 120 students and 12 faculty members." },
  { year: "2005", text: "Expanded to include senior secondary classes (XI & XII)." },
  { year: "2012", text: "Awarded Best School in the District by the State Education Board." },
  { year: "2018", text: "Launched digital classrooms and smart learning infrastructure." },
  { year: "2024", text: "Introduced this School Management System for seamless administration." },
];

const About = () => {
  return (
    <div className="about-page">
      <style>{aboutStyles}</style>

      {/* Hero */}
      <section className="about-hero">
        <Container>
          <Badge className="about-badge mb-2">About Us</Badge>
          <h1 className="about-hero-title">
            Shaping Futures with <span>Purpose & Pride</span>
          </h1>
          <p className="about-hero-subtitle">
            For over two decades, we have been committed to delivering quality
            education, building character, and empowering students to lead
            tomorrow's world.
          </p>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <Container>
          <div className="text-center mb-5">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Our Mission & Vision</h2>
          </div>
          <Row className="g-4">
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                desc: "To provide a safe, inclusive, and stimulating environment where every student can discover their potential and achieve academic and personal excellence.",
              },
              {
                icon: "🔭",
                title: "Our Vision",
                desc: "To be the leading institution that produces responsible, innovative, and compassionate citizens who make a positive impact on society.",
              },
              {
                icon: "📜",
                title: "Our Promise",
                desc: "We commit to transparent communication, continuous improvement, and maintaining the trust of every parent and student who walks through our doors.",
              },
            ].map((m, i) => (
              <Col xs={12} sm={6} md={4} key={i}>
                <Card className="mission-card border-0">
                  <div className="mission-icon">{m.icon}</div>
                  <p className="mission-title">{m.title}</p>
                  <p className="mission-desc">{m.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Story & Milestones */}
      <section className="story-section">
        <Container>
          <Row className="align-items-start g-4 g-lg-5">
            <Col xs={12} lg={6}>
              <p className="section-label">Our Journey</p>
              <h2 className="section-title mb-4">A Legacy Built on Learning</h2>
              <p className="story-text">
                Founded in 1998, our school began as a small institution with a
                big dream — to make quality education accessible and meaningful
                for every child in the community.
              </p>
              <div className="story-highlight">
                "Education is not the filling of a pail, but the lighting of a
                fire. We have spent 26 years lighting that fire in thousands of
                young minds."
              </div>
              <p className="story-text">
                Today, we are home to over 1,200 students, 80+ dedicated faculty
                members, and a proud alumni network spanning across the globe.
                Our school management system is the latest step in our
                commitment to modern, efficient, and transparent education.
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <p className="section-label mb-3">Key Milestones</p>
              {milestones.map((m, i) => (
                <div className="milestone-item" key={i}>
                  <span className="milestone-year">{m.year}</span>
                  <p className="milestone-text">{m.text}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team */}
      <section className="team-section">
        <Container>
          <div className="text-center mb-5">
            <p className="section-label">The People Behind It</p>
            <h2 className="section-title">Meet Our Leadership Team</h2>
          </div>
          <Row className="g-4">
            {team.map((t, i) => (
              <Col xs={12} sm={6} lg={3} key={i}>
                <Card className="team-card border-0 text-center p-3">
                  <div className="team-avatar">{t.emoji}</div>
                  <p className="team-name">{t.name}</p>
                  <p className="team-role">{t.role}</p>
                  <p className="team-bio">{t.bio}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="values-section">
        <Container>
          <div className="text-center mb-5">
            <p className="section-label">What Drives Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <Row className="g-3">
            {values.map((v, i) => (
              <Col xs={12} sm={6} lg={4} key={i}>
                <div className="value-item">
                  <span className="value-icon">{v.icon}</span>
                  <div>
                    <p className="value-title">{v.title}</p>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <Container>
          <h2 className="cta-title">Want to Know More?</h2>
          <p className="cta-subtitle">
            Reach out to us — we'd love to welcome you to our school family.
          </p>
          <button className="btn btn-gold">Contact Us</button>
        </Container>
      </section>
    </div>
  );
};

export default About;