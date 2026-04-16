import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";
import header from "~/../public/img/ja7.png";

export default function Index() {
  return (
    <div className="subscribe-container">
            <div className="content">
              <div className="inner-content">
                  <img src={header} alt="Jeffamazon newsletter image" />
              <div className="box">
              <h1>Join 12k+ builders in Canada</h1>
              <p>Subscribe for your weekly dose of Canadian business, policy, and tech news 🇨🇦</p>
            <form method="post" action="https://app.thepoast.com/subscription/form">
              <div className="input-wrapper1">
                <input className="email" type="text" name="firstName" placeholder="Your Name *" />
              </div>
              <div className="input-wrapper">
                <input className="email" type="email" name="email" required placeholder="Email Address *" />
                <button className="submit" type="submit">I'm in</button>
              </div>
              <Altcha />
              <input id="bcd05" type="hidden" name="l" value="bcd05274-b4b9-4a90-a8b5-1fdee92637fa" />
              <input type="hidden" name="nonce" />
            </form>
                </div>
              </div>
            </div>
      <div className="inner-content2">
        <h2><span>Join 12k+ builders</span> shaping the future of Canada</h2>
        <Link className="text" to="/subscribe">Skip the noise. The Poast is a one minute news feed for entrepreneurs, leaders, and Canadian builders who want the business, policy, and tech posts that actually matter</Link>
      </div>
    </div>
  );
}