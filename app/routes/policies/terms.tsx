import logo from "~/../public/img/ja1.png";

export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="Jeffamzn Logo" />
      </div>
      <div className="content-aboutus2">
        <h2><span>Staying informed is hard.</span><br />We make it easy.</h2>
        <p>Jeffamzn is a daily newsletter for go-getters who like to stay informed about the business world.</p>
      </div>
  </div>
  );
}