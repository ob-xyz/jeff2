import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>We are <span>New York's</span> fave newsletter.</h2>
        <p>The Poast delivers a Friday email of good stuff for you to know about this weekend, like happening conversations, features—and most importantly—the weather.</p>
      </div>
  </div>
  );
}