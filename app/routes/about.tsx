import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>NY in a <span>minute.</span></h2>
        <p>The Poast delivers the latest, and greatest stories happening in NY—with extra eyes on breaking news, features, and more. We're the <span>one minute newsletter</span> for New Yorkers who hate newsletters.</p>
      </div>
  </div>
  );
}