import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import header from "~/../public/img/ads/recads.png";
import header3 from "~/../public/img/ja7.png";
import sama from "~/../public/img/ott1.png";
import tobi from "~/../public/img/ott2.png";
import jensen from "~/../public/img/ott3.png";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <div className="inner-content">
            <img src={header3} alt="The Poast newsletter image" />
          <div className="box">
              <h1>Stay informed in just 1 minute</h1>
              <p>Subscribe for your daily dose of unconventional Canadian news 🇨🇦</p>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">I'm in</button>
        </div>
        <Altcha />
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
          </div>
        </div>
      </div>
      <div className="inner-content2">
        <h2><span>Join 12k+ Canadian builders</span> shaping the future</h2>
        <Link className="text" to="/subscribe">The Poast is the fastest way for entrepreneurs, leaders, and unconventional citizens to stay informed about business, policy, and frontier ideas shaping the future of Canada</Link>
      </div>
      <div className="floatimg">
          <img src={sama} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Stories shaping Canada</span></h2>
             <Link className="text" to="/subscribe">We share Canadians stories that shape how we live</Link>
      </div>
      <div className="floatimg">
            <img src={tobi} alt="The Poast newsletter image" />
        </div>
      <div className="inner-content25sm">
       <h2><span>Policies growing Canada</span></h2>
             <Link className="text" to="/subscribe">We help Canadians grow a brighter future in Canada</Link>
      </div>
      <div className="floatimg">
          <img src={jensen} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Posts from Canadians</span></h2>
      <Link className="text" to="/subscribe">Enjoy unconventional ideas, research, and stories from Canadians across the country</Link>
      </div>
      <div className="floatimg">
          <img src={header} alt="The Poast newsletter image" />
      </div>
      <div className="inner-content25">
       <h2><span>The Poast</span></h2>
            <Link className="text" to="/subscribe">Every day The Poast emails you a quick and curated one minute newsfeed that helps you stay informed</Link>
      <div className="btn">
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
      <div className="inner-content255">
        <div className="side1">
       <h2><span>LEADERSHIP</span></h2>
      <p className="noclick">Author</p>
      <p className="noclick">Chris Signore</p>
      <div className="btn">
          <Link className="pricebtn" to="/about">About</Link>
      </div>
        </div>
        <div className="side2">
          <img src={cs} alt="Author image" />
        </div>
      </div>
      <div className="inner-content2555">
          <Link className="text" to="/about">" I just want to see Canada win more.</Link>
      <div className="tag">
      <p>
        CHRIS SIGNORE
      </p>
      <p>
        Author
      </p>
      </div>
      </div>
       <div className="inner-content3">
      <div className="grid">
      <div className="box">
        <h1>Subscribe</h1>
        <p>Get The Poast delivered to your inbox</p>
          <Link className="text" to="/subscribe">Subscribe →</Link>
      </div>
      <div className="box">
        <h1>Advertise</h1>
        <p>Become an advertiser in The Poast</p>
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