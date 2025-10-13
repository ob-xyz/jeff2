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
            <h4>NEW YORK'S FAVE NEWSLETTER</h4>
            <h1>Stay informed in just 1 minute</h1>
            <p>Every week, The Poast delivers hot takes and real stories from the hottest people in the hottest city in America.</p>
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
        <h2>We are <span>New York's</span> fave newsletter.</h2>
        <a title="subscription form" href="https://app.jeffamzn.com/subscription/form"  rel="noopener noreferrer">
        <p>Once a week, The Poast delivers the latest conversations and stories that actually matter to the people of New York.</p>
        </a>
      </div>
      <div className="inner-content4">
            <h3>Delivered straight to your inbox.</h3>
            <p>Enjoy budding conversations and good stories from hottest people in the hottest city in the world.</p>
      </div>
      <div className="inner-content5">
        <div className="box">
          <img src={roast} />
          <h1>Real conversations</h1>
          <p>Read real conversations from people.</p>
        </div>
        <div className="box">
          <img src={chill} />
          <h1>Quick updates</h1>
          <p>Get one minute of quick updates.</p>
        </div>
        <div className="box">
          <img src={tobi} />
          <h1>Every week</h1>
          <p>It's the perfect amount of newsletter.</p>
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