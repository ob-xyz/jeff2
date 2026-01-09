import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/thepoast.png";

export default function Index() {
return (
    <div className="adform-container">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>ADVERTISE WITH US</h4>
            <h1>Reach 12K+</h1>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="text" name="firstName" required placeholder="First Name *" />
          <input className="email" type="text" name="lastName" required placeholder="Last Name *" />
          <input className="email" type="text" name="company" required placeholder="Company *" />
          <input className="email" type="email" name="email" required placeholder="Business Email Address *" />
          <button className="submit" type="submit">Request quote</button>
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
      <h2>Connect with your next customers on <span>The Poast</span></h2>
          <Link className="text" to="/subscribe">Our audience is highly vetted, decisive, and always looking for what's new. So whether you want to use videos, images, or words, The Poast has an ad format that'll help you reach our audience.</Link>
      </div>
    </div>
  );
}