import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/thepoast.png";
import header2 from "~/../public/img/thepoast.png";
import nyc1 from "~/../public/img/nyc1.jpg";
import nyc2 from "~/../public/img/nyc2.jpg";
import nyc3 from "~/../public/img/nyc3.jpg";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
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
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>THE POAST WEEKLY NEWSLETTER</h4>
            <h1>Scroll Less. Know More.</h1>
            <p>Start your weekend with a 1-minute dose of what matters 🚀</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Send it</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
        <div className="inner-content1">
            <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Start your weekend with <span>The Poast</span></h2>
      <a title="subscription form" href="https://thepoast.com/subscribe"  rel="noopener noreferrer">
      <p>Don't waste your weekends scrolling to stay informed. <span>The Poast is the antidote keeping 11,000+ people in the loop</span> about what matters across the five boroughs.</p>
      </a>
      </div>
      <div className="floatimg">
          <img src={nyc1} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Weekly news</span></h2>
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>Get the biggest stories happening every week.</p>
      </a>
      </div>
      <div className="floatimg">
            <img src={nyc2} alt="The Poast newsletter image" />
        </div>
      <div className="inner-content25sm">
       <h2><span>Know more</span></h2>
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>Enjoy a quick update about what's happening in New York.</p>
      </a>
      </div>
      <div className="floatimg">
          <img src={nyc3} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Weather update</span></h2>
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>We give you the small, and big details you wanna know.</p>
      </a>
      </div>
            <div className="floatimg">
            <img src={header2} alt="The Poast newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>The Poast</span></h2>
      <a title="The Poast home page" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>The Poast is an informative and insightful 1-minute weekly newsletter that updates you on interesting events, trends, and things happening across the five boroughs.</p>
      </a>
      <div className="btn">
        <a title="subscription form" href="https://thepoast.com/subscribe"  rel="noopener noreferrer" className="pricebtn">
            Subscribe for free
        </a>
      </div>
      </div>
      <div className="inner-content255">
        <div className="side1">
       <h2><span>LEADERSHIP</span></h2>
      <p className="noclick">Founder</p>
      <p className="noclick">Chris Signore</p>
      <div className="btn">
        <a title="subscription form" href="https://thepoast.com/"  rel="noopener noreferrer" className="pricebtn">
            About
        </a>
      </div>
        </div>
        <div className="side2">
          <img src={cs} alt="Founder image" />
        </div>
      </div>
      <div className="inner-content2555">
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>" It's the one thing that actually lets me know what matters.</p>
      </a>
      <div className="tag">
      <p>
        CHRIS SIGNORE
      </p>
      <p>
        Founder
      </p>
      </div>
      </div>
       <div className="inner-content3">
      <div className="grid">
      <div className="box">
        <h1>Subscribe</h1>
        <p>Want to know what matters?</p>
        <a title="subscribe today" href="https://thepoast.com/subscribe"  rel="noopener noreferrer">Subscribe →</a>
      </div>
      <div className="box">
        <h1>Advertise</h1>
        <p>Want to post? We're looking for new advertisers.</p>
        <a title="get in touch" href="mailto:ads@thepoast.com"  rel="noopener noreferrer">Get in touch →</a>
      </div>
      </div>
    </div>
    </div>
  );
}