import React, { useState } from "react";
import { useRouter } from "next/router";
import TrianglesLeft from "../landing-AsicHosting/TrianglesLeft";
import Link from "next/link";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }),
      });
      if (response.ok) {
        router.push("/login");
      } else {
        setError("Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    if (password && value && password !== value) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  return (
    <div className="banner-container2">
      <TrianglesLeft />
      <div className="new-login">
        <Link className="logo-link" href="/">
          <img src="/logoLanding.svg" alt="Logo" />
        </Link>

        <h2>Welcome!</h2>
        <span>Please Sign up with your personal info</span>
        <form className="inputs-login" onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={error}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link href="/login">
            <strong> Sign In</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
