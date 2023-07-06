import React, { useState } from "react";

export default function TextArea(props) {

  const [text, setText] = useState("");
  
   const handleOnChange = (event) => {
    setText(event.target.value);
  };


  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const del = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Now! Text Box is Clear", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking is Started", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extraspace", "success");
  };

  const handleCopy = () => {
    let text1 = document.getElementById("exampleFormControlTextarea1");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showAlert("Your text is copied Now!", "success");
  };

 
  
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#adb5bd" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <button
          className="btn btn-outline-danger mx-1"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
          onClick={handleUpClick}
        >
          UppeerCase
        </button>
        <button
          className="btn btn-outline-danger  mx-1"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
          onClick={handleDownClick}
        >
          LowerCase
        </button>
        <button
          className="btn btn-outline-danger  mx-1"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
          onClick={del}
        >
          Cleare
        </button>
        <button
          className="btn btn-outline-danger mx-1 my-2"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
          onClick={speak}
        >
          Speak
        </button>
        <button
          className="btn btn-outline-danger mx-1 my-2"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
          onClick={handleCopy}
        >
          CopyText
        </button>
        <button
          className="btn btn-outline-danger  mx-1 my-2"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
          onClick={handleExtraSpaces}
        >
          RemoveExtraSpaces
        </button>
      </div>

      <div
        className="container style my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <p>
            {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and
            {" "}{text.replace(/\s+/g, "").length} characters
          </p>
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Reads</p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in above textbox to preview it here"}
        </p>
        <p>Copy rights @ Kapil Raut</p>
      </div>
    </>
  );
}
