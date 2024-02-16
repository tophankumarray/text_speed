import React, { useState } from "react";

const Textform = (props) => {
    // const[text,setText] = useState('Enter text here')
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // setText("You have clicked on handleUpClick")
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
  };
  const handleClClick = () => {
    let newText2 = "";
    setText(newText2);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };


  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {" "}
          <b>
            {" "}
            {text.split(" ").length} words and {text.length} characters
          </b>
        </p>
        <p>
          <b>{0.008 * text.split(" ").length} Minutes read</b>
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Textform