import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Add = ({ setUpdatedData, updatedData, editStudent, setEditStudent }) => {
  const [studentDetail, setStudentDetail] = useState(() => ({
    studentname: editStudent?.studentname || "",
    dateofbirth: editStudent?.dateofbirth || "",
    fathername: editStudent?.fathername || "",
    mothername: editStudent?.mothername || "",
    mobilenumber: editStudent?.mobilenumber || "",
    aadharcard: editStudent?.aadharcard || "",
    email: editStudent?.email || "",
  }));

  const [error, setError] = useState({
    studentname: "",
    dateofbirth: "",
    fathername: "",
    mothername: "",
    mobilenumber: "",
    aadharcard: "",
    email: "",
  });

  const handleInputes = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudentDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((error) => ({
      ...error,
      [name]: "",
    }));
  };
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (
      !studentDetail.studentname ||
      !studentDetail.dateofbirth ||
      !studentDetail.fathername ||
      !studentDetail.mothername ||
      !studentDetail.mobilenumber ||
      !studentDetail.aadharcard ||
      !studentDetail.email
    ) {
      setError((prevError) => ({
        ...prevError,
        studentname: !studentDetail.studentname
          ? "Student Name is Required"
          : "",
        dateofbirth: !studentDetail.dateofbirth
          ? "Student DOB is Required"
          : "",
        fathername: !studentDetail.fathername
          ? "Students Father-Name is Required"
          : "",
        mothername: !studentDetail.mothername
          ? "Students Mother-Name is Required"
          : "",
        mobilenumber: !studentDetail.mobilenumber
          ? "Students Mobilenumber is Required"
          : "",
        aadharcard: !studentDetail.aadharcard
          ? "Students AadharCard is Required"
          : "",
        email: !studentDetail.email ? "Students email is Required" : "",
      }));
      toast.error("Please fill all required fields!");
      return;
    }

    if (studentDetail.studentname.length < 3) {
      setError((prevError) => ({
        ...prevError,
        studentname: "Min Characters of Name should be 3",
      }));
      toast.error("Min Characters of Name should be 3");
      return;
    }
    if (studentDetail.fathername.length < 3) {
      setError((prevError) => ({
        ...prevError,
        fathername: "Min Characters of Father Name should be 3",
      }));
      toast.error("Min Characters of Father Name should be 3");
      return;
    }
    if (studentDetail.mothername.length < 3) {
      setError((prevError) => ({
        ...prevError,
        mothername: "Min Characters of Mother Name should be 3",
      }));
      toast.error("Min Characters of Mother Name should be 3");
      return;
    }
    if (studentDetail.mobilenumber.length < 10) {
      setError((prevError) => ({
        ...prevError,
        mobilenumber: "Mobile Number should be 10 digits",
      }));
      toast.error("Mobile Number should be 10 digits");
      return;
    } else if (studentDetail.mobilenumber.length > 10) {
      setError((prevError) => ({
        ...prevError,
        mobilenumber: "Mobile Number should not exceed 10 digits",
      }));
      toast.error("Mobile Number should not exceed 10 digits");
      return;
    }
    if (studentDetail.aadharcard.length < 12) {
      setError((prevError) => ({
        ...prevError,
        aadharcard: "Aadhar Card should be 12 digits",
      }));
      toast.error("Aadhar Card should be 12 digits");
      return;
    } else if (studentDetail.aadharcard.length > 12) {
      setError((prevError) => ({
        ...prevError,
        aadharcard: "Aadhar Card should not exceed 12 digits",
      }));
      toast.error("Aadhar Card should not exceed 12 digits");
      return;
    }

    setError({
      studentname: "",
      dateofbirth: "",
      fathername: "",
      mothername: "",
      mobilenumber: "",
      aadharcard: "",
      email: "",
    });


    if (editStudent) {
      setUpdatedData((prev) =>
        prev.map((s) => s.id === editStudent.id ? { ...studentDetail, id: editStudent.id } : s)
      );
      toast.success("Student Updated  Successfully!");
      setEditStudent(null);
    } else {
      setUpdatedData((prev) => [...prev, { ...studentDetail, id: Date.now() }]);
      toast.success("Student Registered Successfully!");
    }

    setStudentDetail({
      studentname: "",
      dateofbirth: "",
      fathername: "",
      mothername: "",
      mobilenumber: "",
      aadharcard: "",
      email: "",
    });
    navigate("/studentlist")
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sms-page {
          min-height: 100vh;
          background: #f0f4f8;
          background-image:
            radial-gradient(ellipse at 20% 20%, rgba(30, 80, 160, 0.07) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 80%, rgba(14, 120, 90, 0.06) 0%, transparent 60%);
          font-family: 'DM Sans', sans-serif;
          padding: 40px 16px 60px;
        }

        .sms-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .sms-header .school-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1a3a6b;
          color: #fff;
          padding: 8px 20px;
          border-radius: 40px;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .sms-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 5vw, 38px);
          color: #0f2045;
          line-height: 1.2;
          font-weight: 700;
        }

        .sms-header p {
          margin-top: 8px;
          color: #6b7c9a;
          font-size: 14px;
          font-weight: 300;
        }

        .sms-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(15, 32, 69, 0.08), 0 1px 4px rgba(15,32,69,0.04);
          max-width: 820px;
          margin: 0 auto;
          overflow: hidden;
        }

        .sms-card-header {
          background: linear-gradient(135deg, #1a3a6b 0%, #0f2045 100%);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .sms-card-header .icon-box {
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.12);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .sms-card-header .icon-box svg {
          width: 22px; height: 22px; color: #fff;
        }

        .sms-card-header h2 {
          font-family: 'Playfair Display', serif;
          color: #fff;
          font-size: 20px;
          font-weight: 600;
        }

        .sms-card-header p {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          margin-top: 2px;
        }

        .sms-form {
          padding: 32px;
        }

        .form-section-label {
          font-size: 11px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #1a3a6b;
          font-weight: 500;
          margin-bottom: 16px;
          margin-top: 28px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e8edf5;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .form-section-label:first-child { margin-top: 0; }

        .form-section-label::before {
          content: '';
          width: 3px; height: 14px;
          background: #1a3a6b;
          border-radius: 2px;
          display: inline-block;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-grid.single { grid-template-columns: 1fr; }

        @media (max-width: 580px) {
          .form-grid { grid-template-columns: 1fr; }
          .sms-form { padding: 20px; }
          .sms-card-header { padding: 18px 20px; }
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field-group label {
          font-size: 12px;
          font-weight: 500;
          color: #4a5568;
          letter-spacing: 0.3px;
        }

        .field-group label span {
          color: #c0392b;
          margin-left: 2px;
        }

        .sms-input {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid #dde3ee;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1a2340;
          background: #f8fafd;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          outline: none;
        }

        .sms-input:focus {
          border-color: #1a3a6b;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(26, 58, 107, 0.08);
        }

        .sms-input.has-error {
          border-color: #e53e3e;
          background: #fff8f8;
        }

        .sms-input::placeholder { color: #aab4c8; font-size: 13px; }

        .error-msg {
          font-size: 11.5px;
          color: #e53e3e;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 400;
        }

        .error-msg::before {
          content: '⚠';
          font-size: 11px;
        }

        .sms-divider {
          height: 1px;
          background: #edf0f7;
          margin: 28px 0;
        }

        .sms-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          flex-wrap: wrap;
        }

        .sms-btn-submit {
          background: linear-gradient(135deg, #1a3a6b, #0f2045) !important;
          border: none !important;
          border-radius: 10px !important;
          padding: 11px 32px !important;
          font-family: 'DM Sans', sans-serif !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          letter-spacing: 0.3px !important;
          color: #fff !important;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s !important;
          box-shadow: 0 4px 14px rgba(26, 58, 107, 0.3) !important;
        }

        .sms-btn-submit:hover {
          opacity: 0.92 !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 20px rgba(26, 58, 107, 0.38) !important;
        }

        .sms-btn-submit:active { transform: translateY(0) !important; }

        .record-count {
          font-size: 13px;
          color: #6b7c9a;
        }

        .record-count strong { color: #1a3a6b; }
      `}</style>

      <div className="sms-page">
        <div className="sms-header">
          <div className="school-badge">School Management System</div>
          <h1>Student Enrollment</h1>
          <p>Fill in the details below to register a new student</p>
        </div>

        <div className="sms-card">
          <div className="sms-card-header">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <div>
              <h2>New Student Registration</h2>
              <p>Academic Year 2024–25</p>
            </div>
          </div>

          <div className="sms-form">
            <div className="form-section-label">Personal Information</div>
            <div className="form-grid">
              <div className="field-group">
                <label>
                  Student Name <span>*</span>
                </label>
                <input
                  className={`sms-input${error.studentname ? " has-error" : ""}`}
                  value={studentDetail.studentname}
                  name="studentname"
                  type="text"
                  placeholder="Enter full name"
                  onChange={handleInputes}
                />
                {error.studentname && (
                  <span className="error-msg">{error.studentname}</span>
                )}
              </div>

              <div className="field-group">
                <label>
                  Date of Birth <span>*</span>
                </label>
                <input
                  className={`sms-input${error.dateofbirth ? " has-error" : ""}`}
                  value={studentDetail.dateofbirth}
                  name="dateofbirth"
                  type="date"
                  onChange={handleInputes}
                />
                {error.dateofbirth && (
                  <span className="error-msg">{error.dateofbirth}</span>
                )}
              </div>
            </div>

            <div className="form-section-label">Guardian Information</div>
            <div className="form-grid">
              <div className="field-group">
                <label>
                  Father's Name <span>*</span>
                </label>
                <input
                  className={`sms-input${error.fathername ? " has-error" : ""}`}
                  value={studentDetail.fathername}
                  name="fathername"
                  type="text"
                  placeholder="Enter father's name"
                  onChange={handleInputes}
                />
                {error.fathername && (
                  <span className="error-msg">{error.fathername}</span>
                )}
              </div>

              <div className="field-group">
                <label>
                  Mother's Name <span>*</span>
                </label>
                <input
                  className={`sms-input${error.mothername ? " has-error" : ""}`}
                  value={studentDetail.mothername}
                  name="mothername"
                  type="text"
                  placeholder="Enter mother's name"
                  onChange={handleInputes}
                />
                {error.mothername && (
                  <span className="error-msg">{error.mothername}</span>
                )}
              </div>
            </div>

            <div className="form-section-label">Contact & Identity</div>
            <div className="form-grid">
              <div className="field-group">
                <label>
                  Mobile Number <span>*</span>
                </label>
                <input
                  className={`sms-input${error.mobilenumber ? " has-error" : ""}`}
                  value={studentDetail.mobilenumber}
                  name="mobilenumber"
                  type="text"
                  inputMode="numeric"
                  placeholder="10-digit mobile number"
                  onChange={handleInputes}
                />
                {error.mobilenumber && (
                  <span className="error-msg">{error.mobilenumber}</span>
                )}
              </div>

              <div className="field-group">
                <label>
                  Aadhar Card No. <span>*</span>
                </label>
                <input
                  className={`sms-input${error.aadharcard ? " has-error" : ""}`}
                  value={studentDetail.aadharcard}
                  name="aadharcard"
                  type="text"
                  inputMode="numeric"
                  placeholder="12-digit Aadhar number"
                  onChange={handleInputes}
                />
                {error.aadharcard && (
                  <span className="error-msg">{error.aadharcard}</span>
                )}
              </div>
            </div>

            <div className="form-grid single" style={{ marginTop: "20px" }}>
              <div className="field-group">
                <label>
                  Email Address <span>*</span>
                </label>
                <input
                  className={`sms-input${error.email ? " has-error" : ""}`}
                  value={studentDetail.email}
                  name="email"
                  type="email"
                  placeholder="student@example.com"
                  onChange={handleInputes}
                />
                {error.email && (
                  <span className="error-msg">{error.email}</span>
                )}
              </div>
            </div>

            <div className="sms-divider" />

            <div className="sms-footer">
              {studentDetail.length > 0 && (
                <span className="record-count">
                  <strong>{updatedData.length}</strong> student
                  {studentDetail.length > 1 ? "s" : ""} registered
                </span>
              )}
              <Button className="sms-btn-submit" onClick={handleSubmit}>
                Register Student
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Add;
