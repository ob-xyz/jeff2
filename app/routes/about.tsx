import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>Mostly sunny with a chance of <span>chaos.</span></h2>
        <p>But that won't stop The Poast from delivering you the latest, and greatest stories happening in NY—with extra eyes on special events, sports, and entertainment. We're the <span>one minute newsletter</span> for New Yorkers who hate newsletters.</p>
      </div>
  </div>
  );
}