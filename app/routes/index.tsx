import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/thepoast.png";
import header2 from "~/../public/img/thepoast.png";
import nyc1 from "~/../public/img/nyc1.jpg";
import nyc2 from "~/../public/img/nyc2.jpg";
import nyc3 from "~/../public/img/nyc3.jpg";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>THE POAST 1-MINUTE NEWSLETTER</h4>
            <h1>Scroll Less. Know More.</h1>
            <p>Subscribe for your daily dose of what matters 🗽</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Send it</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="bcd05" type="hidden" name="l" value="bcd05274-b4b9-4a90-a8b5-1fdee92637fa" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
        <div className="inner-content1">
            <img src={header} alt="The Poast newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Start your weekend smarter with <span>The Poast</span></h2>
        <Link className="text" to="/subscribe">Don't waste your weekends scrolling to stay ahead. <span>Jeffamazon is the antidote keeping 12,000+ new yorkers in the loop</span> about what matters across the city.</Link>
      </div>
      <div className="floatimg">
          <img src={nyc1} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Weekly news</span></h2>
          <Link className="text" to="/subscribe">Get the biggest stories happening every week.</Link>
      </div>
      <div className="floatimg">
            <img src={nyc2} alt="The Poast newsletter image" />
        </div>
      <div className="inner-content25sm">
       <h2><span>1 min or less</span></h2>
             <Link className="text" to="/subscribe">Enjoy a quick update that's all things New York.</Link>
      </div>
      <div className="floatimg">
          <img src={nyc3} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Stay ahead</span></h2>
      <Link className="text" to="/subscribe">We uncover every inch of the city and deliver it to you for free.</Link>
      </div>
      <div className="floatimg">
          <img src={header2} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25">
       <h2><span>The Poast</span></h2>
            <Link className="text" to="/subscribe">The Poast is a quick and insightful weekly newsletter that helps you make sense of interesting things happening in the greatest city in the world.</Link>
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
          <Link className="text" to="/about">" It's the one thing that lets me know what's happening in New York.</Link>
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
        <p>Get what matters delivered straight to your inbox.</p>
          <Link className="text" to="/subscribe">Subscribe →</Link>
      </div>
      <div className="box">
        <h1>Advertise</h1>
        <p>Want to post? We're looking for new advertisers.</p>
          <Link className="text" to="/ads/ad-form">Get in touch →</Link>
      </div>
      </div>
    </div>
{/* <div className="inner-blog">
    <div className="header">
          <h4>JEFFAMAZON NEWS</h4>
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
          <h4>JEFFAMAZON NEWS</h4>
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