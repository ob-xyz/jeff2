import { useEffect, useState } from "react";

import logo from "~/../public/img/ja1.png";
import chill from "~/../public/img/chill.jpg";
import tobi from "~/../public/img/tobic.jpg";
import roast from "~/../public/img/roast.jpg";
import handcoin from "~/../public/img/trump.jpeg";
import dd from "~/../public/img/rocket.jpeg";
import trump from "~/../public/img/handcoin.jpeg";

const rotatingWords = [" Brooklyn.", " Manhattan.", " Queens.", " the Bronx.", " Staten Island."];
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
            <h4>ONE MINUTE NEWSLETTER FOR NY</h4>
            <h1>Don't start your weekend without knowing what's happening in 
               <span className={`${fadeOut ? "fade-out" : "fade-in"}`}>
                {rotatingWords[index]}
              </span>
            </h1>
          <p>Sign up to The Poast's weekly one minute newsletter.</p>
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
        <h2>Mostly sunny with a chance of <span>chaos.</span></h2>
        <a title="subscription form" href="https://app.jeffamzn.com/subscription/form"  rel="noopener noreferrer">
        <p>But that won't stop The Poast from delivering you the latest, and greatest stories happening in NY—with extra eyes on special events, sports, and entertainment. We're the one minute newsletter for New Yorkers who hate newsletters.</p></a>
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
            <h3>Delivered straight to your inbox.</h3>
            <p>Enjoy our free, one minute weekly newsletter that helps 10,000+ people who love NY stay informed.</p>
      </div>
      <div className="inner-content5">

        <div className="box">
          <img src={roast} />
          <h1>Find out what's really going on</h1>
          <p>Start to know what's really going on in the city that never sleeps.</p>
        </div>
        <div className="box">
          <img src={chill} />
          <h1>Stories from real New Yorkers</h1>
          <p>Get the latest and greatest stories and events happening in NY.</p>
        </div>
          <div className="box">
          <img src={tobi} />
          <h1>Don't start your weekend without it</h1>
          <p>We're the once-a-week newsletter for New Yorkers who hate newsletters.</p>
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