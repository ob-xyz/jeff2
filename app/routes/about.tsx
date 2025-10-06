import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>so what's your story? we're the newsletter <span>for people who fucking hate new york.</span></h2>
        <p>so what's your story? Every week The Poast delivers a quick update on the latest, and greatest stories happening in NY—with extra eyes on <span>main conversations, features, and characters.</span> We're the newsletter for people who  hate new york.</p>
      </div>
  </div>
  );
}