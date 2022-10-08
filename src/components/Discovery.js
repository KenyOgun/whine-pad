import Logo from "./Logo";
import Body from "./Body";
import Button from "./Button";
import React from "react";
import ReactDOM from "react-dom";
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

      {/* render button */}
      <h2>Buttons</h2>
      <p>
        Button with onClick:{" "}
        <Button onClick={() => alert("ouch")}>Click me</Button>
      </p>
      <p>
        A link: <Button href="https://reactjs.org/">Follow me</Button>
      </p>
      <p>
        Custom class name:{" "}
        <Button className="Discovery-custom-button">I do nothing</Button>
      </p>
    </div>
  );
}

export default Discovery;
