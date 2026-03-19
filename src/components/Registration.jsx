import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [field, setField] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setField((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      !field.firstname ||
      !field.lastname ||
      !field.email ||
      !field.password ||
      !field.confirmpassword
    ) {
      setError((prev) => ({
        ...prev,
        firstname: !field.firstname ? "firstname is required" : "",
        lastname: !field.lastname ? "lastname is required" : "",
        email: !field.email ? "email is required" : "",
        password: !field.password ? "password is required" : "",
        confirmpassword: !field.confirmpassword
          ? "confirmpassword is required"
          : "",
      }));
      return;
    }
    if (field.firstname.length < 3) {
      setError((prev) => ({
        ...prev,
        firstname: "Minimum Charachter should be 3",
      }));
      return;
    } else if (field.firstname.length > 8) {
      setError((prev) => ({
        ...prev,
        firstname: "maximum Charachter should be 8",
      }));
      return;
    }
    if (field.lastname.length < 3) {
      setError((prev) => ({
        ...prev,
        lastname: "Minimum Charachter should be 3",
      }));
      return;
    } else if (field.lastname.length > 8) {
      setError((prev) => ({
        ...prev,
        lastname: "maximum Charachter should be 8",
      }));
      return;
    }
    if (field.password.length < 3) {
      setError((prev) => ({
        ...prev,
        password: "Minimum Charachter should be 3",
      }));
      return;
    } else if (field.password.length > 8) {
      setError((prev) => ({
        ...prev,
        password: "maximum Charachter should be 8",
      }));
      return;
    }
    if (field.confirmpassword.length < 3) {
      setError((prev) => ({
        ...prev,
        confirmpassword: "Minimum Charachter should be 3",
      }));
      return;
    } else if (field.confirmpassword.length > 8) {
      setError((prev) => ({
        ...prev,
        confirmpassword: "maximum Charachter should be 8",
      }));
      return;
    }
    if (field.password !== field.confirmpassword) {
      setError((prev) => ({
        ...prev,
        confirmpassword: "password do not match",
      }));
      return;
    }
    console.log(field);
    setField({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <PageWrapper>
      <Card>
        <BrandHeader>
          <SchoolIcon>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="10" fill="#1a56db" />
              <path d="M20 8L32 14V17H8V14L20 8Z" fill="white" />
              <rect x="10" y="18" width="4" height="10" fill="white" />
              <rect x="18" y="18" width="4" height="10" fill="white" />
              <rect x="26" y="18" width="4" height="10" fill="white" />
              <rect x="8" y="28" width="24" height="3" fill="white" />
            </svg>
          </SchoolIcon>
          <BrandText>
            <SchoolName>EduManage</SchoolName>
            <SchoolTagline>School Management System</SchoolTagline>
          </BrandText>
        </BrandHeader>

        <Divider />

        <FormHeading>
          <HeadingDot />
          <div>
            <h2>Create Account</h2>
            <p>Sign up to get full access to the portal</p>
          </div>
        </FormHeading>

        <form onSubmit={handleClick} noValidate>
          <FieldRow>
            <FieldGroup>
              <FieldLabel>First Name</FieldLabel>
              <Input
                onChange={handleInputs}
                name="firstname"
                value={field.firstname}
                type="text"
                placeholder="e.g. Arjun"
                hasError={!!error.firstname}
              />
              {error.firstname && <ErrorMsg>{error.firstname}</ErrorMsg>}
            </FieldGroup>
            <FieldGroup>
              <FieldLabel>Last Name</FieldLabel>
              <Input
                onChange={handleInputs}
                name="lastname"
                value={field.lastname}
                type="text"
                placeholder="e.g. Sharma"
                hasError={!!error.lastname}
              />
              {error.lastname && <ErrorMsg>{error.lastname}</ErrorMsg>}
            </FieldGroup>
          </FieldRow>

          <FieldGroup>
            <FieldLabel>Email Address</FieldLabel>
            <InputWrapper>
              <InputIcon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 4a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <path
                    d="M2 4l6 5 6-5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </InputIcon>
              <Input
                onChange={handleInputs}
                name="email"
                value={field.email}
                type="email"
                placeholder="yourname@school.edu"
                hasError={!!error.email}
                withIcon
              />
            </InputWrapper>
            {error.email && <ErrorMsg>{error.email}</ErrorMsg>}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel>Password</FieldLabel>
            <InputWrapper>
              <InputIcon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="3"
                    y="7"
                    width="10"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <path
                    d="M5 7V5a3 3 0 016 0v2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <circle cx="8" cy="10.5" r="1" fill="currentColor" />
                </svg>
              </InputIcon>
              <Input
                onChange={handleInputs}
                name="password"
                value={field.password}
                type="password"
                placeholder="Min 3 characters"
                hasError={!!error.password}
                withIcon
              />
            </InputWrapper>
            {error.password && <ErrorMsg>{error.password}</ErrorMsg>}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel>Confirm Password</FieldLabel>
            <InputWrapper>
              <InputIcon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="3"
                    y="7"
                    width="10"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <path
                    d="M5 7V5a3 3 0 016 0v2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <path
                    d="M6 11l1.5 1.5L10 9.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </InputIcon>
              <Input
                onChange={handleInputs}
                name="confirmpassword"
                value={field.confirmpassword}
                type="password"
                placeholder="Re-enter password"
                hasError={!!error.confirmpassword}
                withIcon
              />
            </InputWrapper>
            {error.confirmpassword && (
              <ErrorMsg>{error.confirmpassword}</ErrorMsg>
            )}
          </FieldGroup>

          <SubmitButton type="submit">
            Create Account
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SubmitButton>
        </form>

        <SignInText>
          Already have an account?{" "}
          <a onClick={handleLogin} href="#">
            Sign in here
          </a>
        </SignInText>
      </Card>
    </PageWrapper>
  );
};

/* ── Styled Components ─────────────────────────────────────────────────── */

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e8f0fe 0%, #f0f4ff 50%, #e3edf9 100%);
  padding: 24px 16px;
  font-family: "Segoe UI", "Inter", sans-serif;

  @media (max-width: 480px) {
    padding: 16px 12px;
    align-items: flex-start;
    padding-top: 24px;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 36px 40px;
  width: 100%;
  max-width: 480px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.04),
    0 8px 24px rgba(26, 86, 219, 0.08),
    0 24px 48px rgba(26, 86, 219, 0.06);
  border: 1px solid rgba(26, 86, 219, 0.08);

  @media (max-width: 520px) {
    padding: 28px 24px;
    border-radius: 16px;
  }

  @media (max-width: 360px) {
    padding: 20px 16px;
  }
`;

const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const SchoolIcon = styled.div`
  flex-shrink: 0;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
`;

const SchoolName = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #1a56db;
  letter-spacing: -0.5px;
  line-height: 1.2;
`;

const SchoolTagline = styled.span`
  font-size: 12px;
  color: #6b7280;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  font-weight: 500;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, #e0e8ff, #f3f4f6, #e0e8ff);
  margin-bottom: 24px;
`;

const FormHeading = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 24px;

  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 2px;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 13.5px;
    color: #6b7280;
    margin: 0;
  }
`;

const HeadingDot = styled.div`
  width: 4px;
  height: 40px;
  background: linear-gradient(to bottom, #1a56db, #93c5fd);
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`;

const FieldLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.1px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 12px;
  color: #9ca3af;
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ withIcon }) =>
    withIcon ? "10px 12px 10px 38px" : "10px 12px"};
  font-size: 14px;
  color: #111827;
  background: ${({ hasError }) => (hasError ? "#fff8f8" : "#f9fafb")};
  border: 1.5px solid ${({ hasError }) => (hasError ? "#f87171" : "#e5e7eb")};
  border-radius: 10px;
  outline: none;
  transition:
    border-color 0.2s,
    background 0.2s,
    box-shadow 0.2s;
  box-sizing: border-box;

  &::placeholder {
    color: #c4cad6;
    font-size: 13.5px;
  }

  &:hover {
    border-color: ${({ hasError }) => (hasError ? "#f87171" : "#a5b4fc")};
  }

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "#f87171" : "#1a56db")};
    background: #ffffff;
    box-shadow: 0 0 0 3px
      ${({ hasError }) =>
        hasError ? "rgba(248,113,113,0.12)" : "rgba(26,86,219,0.1)"};
  }
`;

const ErrorMsg = styled.p`
  font-size: 12px;
  color: #ef4444;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: "⚠";
    font-size: 11px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin-top: 8px;
  background: linear-gradient(135deg, #1a56db 0%, #2563eb 100%);
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: 0.2px;
  transition:
    transform 0.15s,
    box-shadow 0.2s,
    background 0.2s;
  box-shadow: 0 4px 12px rgba(26, 86, 219, 0.3);

  &:hover {
    background: linear-gradient(135deg, #1648c0 0%, #1d4ed8 100%);
    box-shadow: 0 6px 16px rgba(26, 86, 219, 0.38);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(26, 86, 219, 0.3);
  }
`;

const SignInText = styled.p`
  text-align: center;
  font-size: 13.5px;
  color: #6b7280;
  margin: 20px 0 0;

  a {
    color: #1a56db;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Registration;
