import { Link } from "@remix-run/react";
import Altcha from "../../components/altcha";


import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";

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
                        <input className="email mb" type="text" name="firstName" required placeholder="First Name *" />
                        <input className="email mb" type="text" name="lastName" required placeholder="Last Name *" />
                        <input className="email mb" type="text" name="company" required placeholder="Company *" />
                        <div className="input-wrapper">
                          <input className="email" type="email" name="email" required placeholder="Business Email Address *" />
                          <button className="submit" type="submit">Let's do it</button>
                        </div>
                        <Altcha />
                        <input id="82687" type="hidden" name="l" value="82687238-ae68-46c7-98ad-183fbf4cfea0" />
                        <input type="hidden" name="nonce" />
                      </form>
        </div>
        <div className="inner-content1">
          <img src={header} alt="The Poast newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
        <h2>Connect with your next customers on <span>The Poast</span></h2>
        <Link className="text" to="/ads/ad-form">
          Our audience is highly vetted, ambitious, and always looking for what's new. 
          So whether you want to use videos, images, or words, there's a The Poast 
          ad format that'll help you reach our audience.
        </Link>
      </div>
    </div>
  );
}