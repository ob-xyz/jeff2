import { Link } from "@remix-run/react";
import Altcha from "../../components/altcha";


import logo from "~/../public/img/ja2.png";
import header from "~/../public/img/ads/imageads.png";

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
            <h1>Reach 12k+</h1>
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
          <Link className="text" to="/ads/ad-form">Our audience is bold, decisive, and always looking for something new. So whether you want to use videos, images, or words - there's a The Poast ad format that will help you reach your goals.</Link>
      </div>
    </div>
  );
}