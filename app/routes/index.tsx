import { useEffect, useState } from "react";

import logo from "~/../public/img/ja1.png";
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
            <h4>MAMDANI'S FAVE NEWSLETTER</h4>
            <h1>Stay informed in just 1 minute</h1>
            <p>New York is changing dramatically—from Mamdani's victory to free bus lines. The Poast cuts through the noise with the inside scoop, empowering you to stay connected to your city.</p>
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
        <h2>Start your weekend right with <span>The Poast</span></h2>
        <a title="subscription form" href="https://app.jeffamzn.com/subscription/form"  rel="noopener noreferrer">
      <p>Every Friday, The Poast delivers quick and insightful updates, helping you make sense of stories, news, and actual stuff happening in New York.</p>
        </a>
      </div>
      <div className="inner-content4">
            <h3>Delivered straight to your inbox.</h3>
            <p>Join thousands who start their weekend knowing what's going on in New York.</p>
      </div>
      <div className="inner-content5">
        <div className="box">
          <img src={roast} />
          <h1>Stories from citizens</h1>
          <p>Know every story that matters.</p>
        </div>
        <div className="box">
          <img src={chill} />
          <h1>News that's happening</h1>
          <p>Get news that's happening right now in New York.</p>
        </div>
        <div className="box">
          <img src={tobi} />
          <h1>Start your weekend right</h1>
          <p>Start every weekend right with The Poast.</p>
        </div>

      </div>
      <div className="btn">
            <a title="subscription form" href="https://app.jeffamzn.com/subscription/form"  rel="noopener noreferrer" className="pricebtn">
            Subscribe for free
      </a>
      </div>
    </div>
  );
}