import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>We are <span>New York's</span> fave newsletter.</h2>
        <p>Got a minute? We'll help you stay informed about what's driving the good stuff happening in NY this weekend.</p>
      </div>
  </div>
  );
}