import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2><span>Staying informed is hard.</span><br />We make it easy.</h2>
        <p>The Poast is a newsletter for New Yorkers who fucking hate newsletters.</p>
      </div>
  </div>
  );
}