import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [field, setField] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setField((prev) => ({ ...prev, [name]: value }));
    setFormError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!field.email || !field.password) {
      setFormError({
        email: !field.email ? "Email is required" : "",
        password: !field.password ? "Password is required" : "",
      });
      return;
    }
    if (field.password.length < 5) {
      setFormError({ ...formError, password: "Minimum 5 characters required" });
      return;
    } else if (field.password.length > 8) {
      setFormError({ ...formError, password: "Maximum 8 characters allowed" });
      return;
    }

    localStorage.setItem("isLogin", "true");
    navigate("/");

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setField({ email: "", password: "" });
    }, 2500);
  };
  const navigate = useNavigate();
  const handleRegistration = () => {
    navigate("/registration");
  };
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sms-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f4f8;
          font-family: 'Source Sans 3', sans-serif;
          padding: 24px;
        }

        /* ── Outer layout ── */
        .sms-layout {
          display: flex;
          width: 900px;
          max-width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,51,102,0.18), 0 4px 16px rgba(0,0,0,0.08);
          animation: fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Left panel ── */
        .sms-left {
          flex: 1;
          background: linear-gradient(160deg, #003366 0%, #004080 45%, #005599 100%);
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        /* Subtle geometric overlay */
        .sms-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.015) 0px,
              rgba(255,255,255,0.015) 1px,
              transparent 1px,
              transparent 40px
            );
          pointer-events: none;
        }

        /* Large faint circle accent */
        .sms-left::after {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          border: 60px solid rgba(255,255,255,0.04);
          bottom: -140px; right: -140px;
          pointer-events: none;
        }

        .sms-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative; z-index: 1;
        }

        .sms-logo-icon {
          width: 48px; height: 48px;
          background: rgba(255,255,255,0.12);
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }

        .sms-logo-text {
          font-family: 'Merriweather', serif;
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
        }
        .sms-logo-text small {
          display: block;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 1px;
        }

        .sms-left-body { position: relative; z-index: 1; }

        .sms-left-tag {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.8);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 20px;
          margin-bottom: 20px;
        }

        .sms-left-headline {
          font-family: 'Merriweather', serif;
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin-bottom: 16px;
        }
        .sms-left-headline em {
          font-style: normal;
          color: #f0c040;
        }

        .sms-left-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          max-width: 260px;
        }

        /* Feature pills */
        .sms-features {
          position: relative; z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .sms-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }
        .sms-feature-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #f0c040;
          flex-shrink: 0;
        }

        /* ── Right panel ── */
        .sms-right {
          width: 400px;
          background: #ffffff;
          padding: 48px 40px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Header */
        .sms-form-title {
          font-family: 'Merriweather', serif;
          font-size: 22px;
          font-weight: 700;
          color: #0d1f3c;
          margin-bottom: 6px;
        }
        .sms-form-subtitle {
          font-size: 13.5px;
          color: #6b7a99;
          margin-bottom: 32px;
        }

        /* Divider accent */
        .sms-form-divider {
          width: 36px; height: 3px;
          background: linear-gradient(90deg, #003366, #0070cc);
          border-radius: 2px;
          margin-bottom: 32px;
          margin-top: -24px;
        }

        /* Field */
        .sms-field { margin-bottom: 20px; }

        .sms-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #3a4a6b;
          margin-bottom: 8px;
        }

        .sms-input-wrap { position: relative; }

        .sms-input-icon {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          color: #9aa5be;
          display: flex; align-items: center;
          pointer-events: none;
          transition: color 0.2s;
        }
        .sms-input-wrap:focus-within .sms-input-icon { color: #003f80; }

        .sms-input {
          width: 100%;
          height: 48px;
          border: 1.5px solid #d8dff0;
          border-radius: 8px;
          background: #f7f9fc;
          color: #0d1f3c;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 14px;
          padding: 0 42px 0 42px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .sms-input::placeholder { color: #b0bac9; }
        .sms-input:focus {
          border-color: #003f80;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(0,63,128,0.1);
        }
        .sms-input.error {
          border-color: #c0392b;
          background: #fff8f7;
        }
        .sms-input.error:focus {
          box-shadow: 0 0 0 3px rgba(192,57,43,0.12);
        }

        /* pw toggle */
        .sms-toggle-pw {
          position: absolute;
          right: 12px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer;
          color: #9aa5be;
          display: flex; align-items: center;
          padding: 4px;
          transition: color 0.2s;
        }
        .sms-toggle-pw:hover { color: #003f80; }

        /* error text */
        .sms-error {
          display: flex; align-items: center; gap: 5px;
          font-size: 12px;
          color: #c0392b;
          margin-top: 6px;
          font-weight: 500;
          animation: errIn 0.2s ease both;
        }
        @keyframes errIn {
          from { opacity: 0; transform: translateY(-3px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Password strength hint */
        .sms-pw-hint {
          font-size: 11.5px;
          color: #8a96aa;
          margin-top: 6px;
        }

        /* Submit */
        .sms-submit {
          width: 100%;
          height: 50px;
          margin-top: 8px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #fff;
          background: linear-gradient(135deg, #003366, #0055aa);
          box-shadow: 0 4px 16px rgba(0,51,102,0.3);
          transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
          position: relative;
          overflow: hidden;
        }
        .sms-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,51,102,0.38);
          background: linear-gradient(135deg, #002855, #004499);
        }
        .sms-submit:active { transform: translateY(0); }
        .sms-submit.success {
          background: linear-gradient(135deg, #1a6e3c, #27ae60);
          box-shadow: 0 4px 16px rgba(39,174,96,0.35);
        }

        /* Footer */
        .sms-footer {
          text-align: center;
          font-size: 13px;
          color: #7a8499;
          margin-top: 20px;
        }
        .sms-footer-link {
          color: #003f80;
          font-weight: 700;
          cursor: pointer;
          background: none; border: none;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 13px;
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color 0.18s;
        }
        .sms-footer-link:hover { color: #0055aa; }

        /* Policy note */
        .sms-policy {
          font-size: 11px;
          color: #aab2c0;
          text-align: center;
          margin-top: 16px;
          line-height: 1.6;
        }

        /* Responsive */
        @media (max-width: 700px) {
          .sms-left { display: none; }
          .sms-right { width: 100%; padding: 40px 28px; }
        }
      `}</style>

      <div className="sms-root">
        <div className="sms-layout">
          {/* ── Left Panel ── */}
          <div className="sms-left">
            <div className="sms-logo-row">
              <div className="sms-logo-icon">
                <svg
                  width="26"
                  height="26"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="1.8"
                >
                  <path d="M12 3L2 9l10 6 10-6-10-6z" />
                  <path d="M2 17l10 6 10-6" />
                  <path d="M2 13l10 6 10-6" />
                </svg>
              </div>
              <div className="sms-logo-text">
                EduTrack SMS
                <small>School Management System</small>
              </div>
            </div>

            <div className="sms-left-body">
              <span className="sms-left-tag">Academic Portal</span>
              <h2 className="sms-left-headline">
                Managing schools
                <br />
                made <em>simple</em> &amp;
                <br />
                efficient.
              </h2>
              <p className="sms-left-desc">
                One platform for students, teachers, and administrators. Track
                attendance, grades, and communications — all in one place.
              </p>
            </div>

            <div className="sms-features">
              {[
                "Student &amp; Staff Records",
                "Attendance Tracking",
                "Grade Management",
                "Parent Communication",
              ].map((f, i) => (
                <div className="sms-feature" key={i}>
                  <div className="sms-feature-dot" />
                  <span dangerouslySetInnerHTML={{ __html: f }} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Panel ── */}
          <div className="sms-right">
            <h1 className="sms-form-title">Create an Account</h1>
            <p className="sms-form-subtitle">
              Register to access the school portal
            </p>
            <div className="sms-form-divider" />

            {/* Email */}
            <div className="sms-field">
              <label className="sms-label" htmlFor="email">
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email Address
              </label>
              <div className="sms-input-wrap">
                <span className="sms-input-icon">
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <input
                  id="email"
                  className={`sms-input${formError.email ? " error" : ""}`}
                  type="email"
                  name="email"
                  value={field.email}
                  onChange={handleInput}
                  placeholder="yourname@school.edu"
                  autoComplete="email"
                />
              </div>
              {formError.email && (
                <p className="sms-error">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                  {formError.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="sms-field">
              <label className="sms-label" htmlFor="password">
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Password
              </label>
              <div className="sms-input-wrap">
                <span className="sms-input-icon">
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </span>
                <input
                  id="password"
                  className={`sms-input${formError.password ? " error" : ""}`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={field.password}
                  onChange={handleInput}
                  placeholder="Enter password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="sms-toggle-pw"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      width="15"
                      height="15"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.93 10.93 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" />
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {formError.password ? (
                <p className="sms-error">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                  {formError.password}
                </p>
              ) : (
                <p className="sms-pw-hint">Must be 5–8 characters</p>
              )}
            </div>

            <button
              className={`sms-submit${isSuccess ? " success" : ""}`}
              onClick={handleClick}
            >
              {isSuccess ? "✓ Account Created!" : "Create Account"}
            </button>

            <p className="sms-footer">
              Ifyou don't have account{" "}
              <button onClick={handleRegistration} className="sms-footer-link">
                Registration
              </button>
            </p>

            <p className="sms-policy">
              By registering, you agree to the school's
              <span style={{ color: "#003f80", cursor: "pointer" }}>
                Terms of Use
              </span>{" "}
              and{" "}
              <span style={{ color: "#003f80", cursor: "pointer" }}>
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
