import Logo from "./Logo";
import Body from "./Body";
// more imports here...

function Discovery() {
  return (
    <div className="Discovery">
      <h2>Logo</h2>
      <div style={{ background: "#f6f6f6", display: "inlineblock" }}>
        <Logo />
      </div>
      <h2>Body</h2>
      <Body>I am content inside the body</Body>
      {/* and so on */}
    </div>
  );
}

export default Discovery;
