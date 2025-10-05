import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>u see this? we're the <span>newsletter for newyorkers</span> who hate newsletters.</h2>
        <p>Every week The Poast delivers a quick updated on the latest, and greatest stories happening in NY—with extra eyes on special conversations, features, and stories. We're the <span>newsletter for newyorkers</span> who hate newsletters.</p>
      </div>
  </div>
  );
}