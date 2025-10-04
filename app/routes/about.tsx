import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>Mostly sunny with a chance of <span>chaos.</span></h2>
        <p>The Poast is a once-a-week free one minute newsletter for New Yorkers who hate newsletters.</p>
      </div>
  </div>
  );
}