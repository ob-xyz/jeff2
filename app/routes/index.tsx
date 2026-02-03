import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ads/recads.png";
import header3 from "~/../public/img/ja7.png";
import to1 from "~/../public/img/toronto3.jpg";
import to2 from "~/../public/img/toronto2.jpg";
import to3 from "~/../public/img/toronto1.jpg";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>1-MINUTE DAILY NEWSLETTER</h4>
            <h1>Scroll Less. Know More.</h1>
            <p>Subscribe for your daily dose of Toronto 🍁</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Let's do it</button>
        </div>
        <Altcha />
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
        <div className="inner-content1">
            <img src={header3} alt="The Poast newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Start your day with <span>The Poast</span></h2>
        <Link className="text" to="/subscribe">Don't waste your time scrolling Toronto's latest news. The Poast is the <span>1 minute antidote that keeps 12,000+ people in the loop</span> about what matters in the most ambitious city in the world.</Link>
      </div>
      <div className="floatimg">
          <img src={to1} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Stay ahead</span></h2>
          <Link className="text" to="/subscribe">Get the biggest stories happening every day of the week.</Link>
      </div>
      <div className="floatimg">
            <img src={to2} alt="The Poast newsletter image" />
        </div>
      <div className="inner-content25sm">
       <h2><span>1 min or less</span></h2>
             <Link className="text" to="/subscribe">Enjoy a quick update that's all things Toronto.</Link>
      </div>
      <div className="floatimg">
          <img src={to3} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>The city is yours</span></h2>
      <Link className="text" to="/subscribe">We're putting the the city in the palm of your hands.</Link>
      </div>
      <div className="floatimg">
          <img src={header} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25">
       <h2><span>The Poast</span></h2>
            <Link className="text" to="/subscribe">The Poast is a quick and insightful daily newsletter that helps you know what matters in the most ambitious city in the world.</Link>
      <div className="btn">
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
      <div className="inner-content255">
        <div className="side1">
       <h2><span>LEADERSHIP</span></h2>
      <p className="noclick">Founder</p>
      <p className="noclick">Chris Signore</p>
      <div className="btn">
          <Link className="pricebtn" to="/about">About</Link>
      </div>
        </div>
        <div className="side2">
          <img src={cs} alt="Founder image" />
        </div>
      </div>
      <div className="inner-content2555">
          <Link className="text" to="/about">" It's the one thing that lets me know what matters in Toronto.</Link>
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
        <p>Get The Poast delivered to your inbox.</p>
          <Link className="text" to="/subscribe">Subscribe →</Link>
      </div>
      <div className="box">
        <h1>Advertise</h1>
        <p>Become an advertiser in The Poast.</p>
          <Link className="text" to="/ads/ad-form">Get in touch →</Link>
      </div>
      </div>
    </div>
{/* <div className="inner-blog">
    <div className="header">
          <h4>The Poast NEWS</h4>
          <h3>The latest and greatest.</h3>
    </div>
    <ul className="grid">
    {campaigns.length === 0 ? (
      <li>No campaigns available yet.</li>
    ) : (
      campaigns.slice(0, 6).map((c) => (
        <li key={c.id} className="box">
          <a href={c.url} target="_blank" rel="noopener noreferrer">
            <img src="https://jeffamazn.com/GsidegWXwAECEUs.jpeg" alt="You gotta see this" />
            <h2>{c.subject}</h2>
            <p>{new Date(c.send_at).toLocaleDateString()}</p> 
          </a>
        </li>
      ))
    )}
  </ul>
</div> */}
{/* 
<div className="inner-blog">
      <div className="header">
          <h4>The Poast NEWS</h4>
          <h3>The latest and greatest.</h3>
      </div>
  <ul className="grid">
    <li className="box">
      <a
        href="http://app.jeffamzn.com/campaign/ba97f2f9-a8c7-46a7-b183-ccffbc3b6891/6716369b-5785-4c74-be76-73af2558eebb"
        rel="noopener noreferrer"
      >
        <img src="https://jeffamazn.com/Screen-Shot-2025-06-03-at-5.09.08-PM.png" alt="Test Campaign Preview" />
        <h2>Test Campaign — Preview</h2>
        <p>June 29, 2025</p>
      </a>
    </li>
  </ul>
</div> */}
    </div>
  );
}