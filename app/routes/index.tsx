import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";
import chill from "~/../public/img/chill.jpg";
import tobi from "~/../public/img/tobic.jpg";
import roast from "~/../public/img/samae.jpg";


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
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>Know what's happening in New York</h4>
            <h1>Scroll Less. Know More.</h1>
            <p>Subscribe for your 1-minute daily dose of news 🚀</p>
          </div>
      <form method="post" action="https://app.thepoast.com/subscription/form">
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
      <h2>Know what's happening with <span>The Poast</span></h2>
      <a title="subscription form" href="https://thepoast.com/subscribe"  rel="noopener noreferrer">
      <p>Every day The Poast delivers a quick and insightful newsletter that helps you get breaking news, interesting events, and trends happening across New York.</p>
      </a>
      </div>
      <div className="inner-content4">
            <h3>Delivered straight to your inbox.</h3>
            <p>Regular news makes you feel bad and social media just wants you to doom-scroll to infinity. <b>Jeffamazon is the antidote.</b> It's our 1-minute newsletter that helps you know what's happening <a title="subscription form" href="https://thepoast.com/subscribe"  rel="noopener noreferrer">right here →</a></p></div>
      <div className="inner-content5">
         <div className="box">
          <img src={tobi} />
          <h1>Know what's happening</h1>
          <p>Know what's happening, without the noise. It's news that feels good to read.</p>
        </div>
        <div className="box">
          <img src={chill} />
          <h1>60 seconds or less</h1>
          <p>Get a weekly 60 seconds or less update of everything that matter, delivered to your inbox.</p>
        </div>
        <div className="box">
          <img src={roast} />
          <h1>Know more</h1>
          <p>Start your weekend right with New York City in the palm of your hand.</p>
        </div>
      </div>
      <div className="btn">
        <a title="subscription form" href="https://thepoast.com/subscribe"  rel="noopener noreferrer" className="pricebtn">
            Subscribe for free
      </a>
      </div>
    </div>
  );
}