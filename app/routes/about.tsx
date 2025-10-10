import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>We are <span>New York's</span> fave newsletter.</h2>
        <p>Got a minute? We'll make the start of your weekend better with one email of good stuff happening in NY.</p>
      </div>
  </div>
  );
}