import React from "react";
import TrianglesLeft from "../landing-AsicHosting/TrianglesLeft";
import Image from "next/image";
import Link from "next/link";

const LoginScreen = () => {
  return (
    <div className="banner-container2">
      <TrianglesLeft />
      <div className="new-login">
        <Link className="logo-link" href="/">
          <img src="/logoLanding.svg" />
        </Link>

        <h2>Welcome back!</h2>
        <span>Please Sign in with your personal info</span>
        <div className="botonera-login">
          <button className="google-signIn">
            {" "}
            <Image alt="" src="/googleLogo.png" width={20} height={20} />
            Sign In with Google
          </button>
          <button className="google-signIn">
            {" "}
            <Image alt="" src="/githubLogo.svg" width={20} height={20} /> Sign
            In with Github
          </button>
        </div>
        <div className="inputs-login">
          <input placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <p className="forgot-pass">Forgot password?</p>

        <Link className="logo-link2" href="/profile">
          <button>Sign In</button>
        </Link>
        <p>
          New user?{" "}
          <Link href="/register">
            <strong> Sign Up</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
