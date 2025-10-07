import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>We are <span>New York's fave newsletter.</span></h2>
        <p>Every day The Poast delivers a quick update on the latest, and greatest stories happening in NY—with extra eyes on conversations, features, and the weather.</p>
      </div>
  </div>
  );
}