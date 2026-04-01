import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

const navStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@400;500&display=swap');

    .school-navbar {
      background: linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%) !important;
      border-bottom: 3px solid #c9a84c;
      padding: 0.75rem 0;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
      font-family: 'DM Sans', sans-serif;
    }

    .school-navbar .navbar-brand {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      color: #f5e6c0 !important;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: opacity 0.2s;
    }

    .school-navbar .navbar-brand:hover { opacity: 0.85; }

    .school-navbar .navbar-brand::before {
      content: '';
      display: inline-block;
      width: 32px;
      height: 32px;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23c9a84c'%3E%3Cpath d='M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z'/%3E%3C/svg%3E") center/contain no-repeat;
    }

    .school-navbar .navbar-toggler {
      border: 1.5px solid #c9a84c !important;
      border-radius: 6px;
    }

    .school-navbar .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%23c9a84c' stroke-width='2.5' stroke-linecap='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important;
    }

    .school-navbar .nav-link {
      color: rgba(220, 230, 255, 0.85) !important;
      font-weight: 500;
      letter-spacing: 0.4px;
      padding: 0.5rem 1.1rem !important;
      border-radius: 6px;
      position: relative;
      transition: color 0.2s, background 0.2s;
      text-transform: uppercase;
      font-size: 0.82rem;
    }

    .school-navbar .nav-link::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 1.1rem;
      right: 1.1rem;
      height: 2px;
      background: #c9a84c;
      transform: scaleX(0);
      transition: transform 0.25s ease;
      border-radius: 2px;
    }

    .school-navbar .nav-link:hover {
      color: #f5e6c0 !important;
      background: rgba(201, 168, 76, 0.1);
    }

    .school-navbar .nav-link:hover::after { transform: scaleX(1); }

    .btn-portal {
      background: transparent !important;
      border: 1.5px solid #c9a84c !important;
      color: #c9a84c !important;
      font-family: 'DM Sans', sans-serif;
      font-weight: 500;
      font-size: 0.82rem;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      padding: 0.42rem 1.2rem !important;
      border-radius: 6px;
      transition: background 0.2s, color 0.2s;
      margin-right: 1rem;
    }

    .btn-portal:hover {
      background: #c9a84c !important;
      color: #0f2044 !important;
    }

    .divider-dot {
      color: rgba(201, 168, 76, 0.4);
      margin: 0 2px;
      font-size: 0.7rem;
      align-self: center;
    }

    @media (max-width: 991px) {
      .divider-dot { display: none; }
      .btn-portal { margin: 0.75rem 1rem 0.25rem; width: calc(100% - 2rem); }
    }
  `;

const Navbaar = () => {
  const navigate = useNavigate();
  useLocation(); // triggers rerender on route changes
  const isLogin = localStorage.getItem("isLogin") === "true";
  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    navigate("/");
  };
  return (
    <div>
      <style>{navStyles}</style>
      <Navbar className="school-navbar" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Scholar Admin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="school-nav" />
          <Navbar.Collapse id="school-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <span className="divider-dot">•</span>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <span className="divider-dot">•</span>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>

              {isLogin ? (
                <>
                  <span className="divider-dot">•</span>
                  <Nav.Link as={Link} to="/addstudent">
                    Student Add
                  </Nav.Link>{" "}
                  <span className="divider-dot">•</span>
                  <Nav.Link as={Link} to="/studentlist">
                    Student List
                  </Nav.Link>
                </>
              ) : (
                ""
              )}
            </Nav>
            {!isLogin ? (
              <>
                <Button onClick={handleLogin} className="btn-portal">
                  Portal Login
                </Button>
                ""
              </>
            ) : (
              <Button onClick={handleLogout} className="btn-portal">
                Logout
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbaar;
