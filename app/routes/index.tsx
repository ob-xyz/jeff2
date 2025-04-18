import { useEffect } from "react";
import logo from "~/../public/img/logo-sm2.png";

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
        <img src={logo} />
      </div>
      <div className="inner-content">
      <div className="text">
         <h1>The Poast</h1>
         <h2>Always here for the best moments!</h2>
         <p>Subscribe to  <u><span>The Poast</span></u>: Your 5-minute brief of the best moments in sports.</p>
         <p>Add an easy win to your day.</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
          <p><input className="submit" type="submit" value="Get access" /></p>
          <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
          <input id="e54c6" type="hidden" name="l" checked value="e54c6f80-cc9f-4b6c-a8d5-4d67891437db" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      </div>
  );
}