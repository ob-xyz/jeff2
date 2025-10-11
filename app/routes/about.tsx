import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>We are <span>New York's</span> fave email.</h2>
        <p>Got a minute? We'll help you catch the good stuff happening this weekend.</p>
      </div>
  </div>
  );
}