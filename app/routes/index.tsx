import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import chill from "~/../public/img/chill.jpg";
import tobi from "~/../public/img/tobic.jpg";
import roast from "~/../public/img/roast.jpg";
import handcoin from "~/../public/img/trump.jpeg";
import dd from "~/../public/img/rocket.jpeg";
import trump from "~/../public/img/handcoin.jpeg";
import linkedin from "~/../public/img/in.png";
import ig from "~/../public/img/ig.png";
import x from "~/../public/img/x.png";
import email from "~/../public/img/email.png";


const rotatingWords = [" gridlock.", " cabbies.", " choas."];
export default function Index() {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);


  // Word rotation effect (unchanged)
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
    <div className="container">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>THE POAST</h4>
            <h1>Mostly sunny with a chance of 
               <span className={`${fadeOut ? "fade-out" : "fade-in"}`}>
                {rotatingWords[index]}
              </span>
            </h1>
            <p>Sign up to know what's really going on in the greatest city in the world.</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Let's do it</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="bcd05" type="hidden" name="l" value="bcd05274-b4b9-4a90-a8b5-1fdee92637fa" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
      </div>
      <div className="inner-content2">
        <h2>Enjoy our <span>free</span> newsletter</h2>
        <Link to="#"><p>We writes headlines that make headlines. And our weekly scoop tells it like it is for the greatest city in the world.</p></Link>
      </div>
      <div className="inner-content3">
        <div className="box">
          <img src={handcoin} />
        </div>
        <div className="box">
          <img src={dd} />
        </div>
        <div className="box">
          <img src={trump} />
        </div>
      </div>
      <div className="inner-content4">
            <h3>Delivered straight to your inbox daily.</h3>
            <p>Read by people who actually love New York.</p>
      </div>
      <div className="inner-content5">

        <div className="box">
          <img src={roast} />
          <h1>Poasts that roast</h1>
          <p>We write headlines that make headlines.</p>
        </div>
        <div className="box">
          <img src={chill} />
          <h1>No bad vibes</h1>
          <p>Hot takes, big steaks, all from the empire state.</p>
        </div>
          <div className="box">
          <img src={tobi} />
          <h1>Once a week</h1>
          <p>Know what's happening in the greatest city in the world.</p>
        </div>
      </div>
      <div className="btn">
        <Link to="#" className="pricebtn">
            Sign up for free
      </Link>
      </div>
<div className="footer">
  <img src={logo} alt="Logo" />
<div className="footer-top">
  <div className="footer-signup">
    <p>Subscribe to The Poast.</p>
    <form method="post" action="https://app.jeffamzn.com/subscription/form">
      <div className="input-wrapper">
        <input className="email" type="email" name="email" required placeholder="Email Address *" />
        <button className="submit" type="submit">Sign up</button>
      </div>
      <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
      <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
      <input type="hidden" name="nonce" />
    </form>
  </div>
  
<div className="footer-links">
  <div className="column">
    <h4>Company</h4>
    <Link to="#">Home</Link>
  </div>
  <div className="column">
    <h4>Newsletters</h4>
    <a title="The Poast Newsletter" href="https://www.thepoast.com">The Poast</a>
    <a title="Jeffamzn Newsletter" href="https://www.jeffamzn.com" target="_blank">Jeffamzn</a>
  </div>
</div>
</div>

<div className="footer-bottom">
  <div className="footer-meta">
  <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer">
    Privacy Policy
  </a>
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
  <a href="mailto:hey@thepoast.com">
    <img src={email} alt="Email us" />
  </a>
  </div>
</div>
</div>
    </div>
  );
}