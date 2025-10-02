import { useEffect } from "react";
import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import linkedin from "~/../public/img/in.png";
import ig from "~/../public/img/ig.png";
import x from "~/../public/img/x.png";
import email from "~/../public/img/email.png";

export default function Footer() {
      useEffect(() => {
    // Dynamically load the hCaptcha script
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
<footer className="footer">
  <img src={logo} alt="Logo" />
<div className="footer-top">
  <div className="footer-signup">
    <h1>Screw it, let's do it.</h1>
    <p>Sign up to know what's going on in the five boroughs.</p>
    <form method="post" action="https://app.jeffamzn.com/subscription/form">
      <div className="input-wrapper">
        <input className="email" type="email" name="email" required placeholder="Email Address *" />
        <button className="submit" type="submit">Let's do it</button>
      </div>
      <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
      <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
      <input type="hidden" name="nonce" />
    </form>
  </div>
  
<div className="footer-links">
  <div className="column">
    <h4>Company</h4>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
  <div className="column">
    <h4>Support</h4>
    <a href="mailto:chris@thepoast.com">Contact</a>
    <a href="mailto:press@thepoast.com">Press</a>
    <a title="subscription form" href="https://app.jeffamzn.com/subscription/form"  rel="noopener noreferrer">Subscribe</a>
  </div>
</div>
</div>

<div className="footer-bottom">
  <div className="footer-meta">
    <Link to="/policies/privacy">Privacy Policy</Link>
   <a href="https://policies.google.com/terms?hl=en-US" target="_blank" rel="noopener noreferrer">
    Terms of Service
  </a>
  </div>
  <div className="footer-social">
  <a href="https://instagram.com/thepoast" target="_blank" rel="noopener noreferrer">
    <img src={ig} alt="Instagram" />
  </a>
  <a href="https://x.com/thepoast" target="_blank" rel="noopener noreferrer">
    <img src={x} alt="X (formerly Twitter)" />
  </a>
  <a href="https://linkedin.com/company/thepoast" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="LinkedIn" />
  </a>
  <a href="mailto:chris@thepoast.com">
    <img src={email} alt="Email us" />
  </a>
  </div>
</div>
</footer>
  );
}
