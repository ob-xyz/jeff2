import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import chill from "~/../public/img/chill.jpg";
import tobi from "~/../public/img/tobic.jpg";
import roast from "~/../public/img/roast.jpg";
import handcoin from "~/../public/img/trump.jpeg";
import dd from "~/../public/img/rocket.jpeg";
import trump from "~/../public/img/handcoin.jpeg";

const rotatingWords = [" choas.", " cabbies.", " gridlock."];
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
            <p>Sign up to know what's going on in the five boroughs.</p>
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
        <h2>We're the <span>newsletter for New Yorkers</span> who fucking hate newsletters.</h2>
        <a title="subscription form" href="https://app.jeffamzn.com/subscription/form"  rel="noopener noreferrer">
        <p>At The Poast it's mostly sunny with a chance of chaos. And to help get you through it—a newsletter for New Yorkers who fucking hate newsletters.</p></a>
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
            <p>Read by New Yorkers who fucking hate newsletters.</p>
      </div>
      <div className="inner-content5">

        <div className="box">
          <img src={roast} />
          <h1>We tell it like it is</h1>
          <p>Join New Yorkers who arn't afraid to burn bridges just to tell it like it is.</p>
        </div>
        <div className="box">
          <img src={chill} />
          <h1>Get every story that matters</h1>
          <p>Get every news story that matters to people in the five boroughs.</p>
        </div>
          <div className="box">
          <img src={tobi} />
          <h1>Once a week</h1>
          <p>Cause real New Yorkers fucking hate newsletters.</p>
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