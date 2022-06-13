import React, { useState } from "react";
import { Helmet } from 'react-helmet';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Btn was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to uppercase", "success")
  };

  const handleLowClick = () => {
    // console.log("Btn was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to lowercase", "success")
  };

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking has been start", "success")
  };

  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success")
  };

  const handleTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));   
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces has been removed", "success")
  };

 

  // const replaceString = () => {
  //   let repval = prompt("Enter the word to be replaced:");
  //   let tobereplaced = new RegExp(repval, "g");

  //   let toreplace = prompt("Enter the text that you want to replace with:");

  //   let newText = text.replace(tobereplaced, toreplace);
  //   setText(newText);
  // };

  const handleOnChange = (event) => {
    //   console.log("Onchange clicked ");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text"; //wrong way to change the state
  // setText = "new text"; //correct way to change the state

  return (
    <>
    <Helmet>
        <title>TextUtils | Home</title>
      </Helmet>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3 className="my-3">{props.heading}</h3>
        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>

          <button className="btn btn-success my-3 mx-1" onClick={handleUpClick}>
            Change to Uppercase
          </button>
          <button
            className="btn btn-success my-3 mx-1"
            onClick={handleLowClick}
          >
            Change to Lowercase
          </button>
          <button
            onClick={handleSpeakClick}
            className="btn btn-success my-3 mx-1"
          >
            Speak Text
          </button>
          <button
            className="btn btn-success my-3 mx-1"
            onClick={handleClrClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-success my-3 mx-1"
            onClick={handleTitleCase}
          >
            Capitalize Text
          </button>
          <button
            className="btn btn-success my-3 mx-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          {/* <button className="btn btn-success my-3 mx-1" onClick={replaceString}>
            Replace Text
          </button> */}
        </div>
      </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text summary</h3>
        <p>
          {/* Words - {text.split(" ").length}, Characters -{text.length} */}
          Words - { text.length>0 ? text.trim().split(" ").length : 0}, Characters -{text.length}
          {/* text.length>0 ? text.trim().split(" ").length : 0 */}
        </p>
        <p>Time to read the text - {0.008 * text.split(" ").length} Minutes</p>
       
      </div>
    </>
  );
}















// for dark modes

// we have to first pass an object into use state like this...
//   const [mode, setMode] = useState(

//     {

//       color:"dark",

//       backgroundColor:"light",

//       primaryClr:"primary",

//       greenClr:"success",

//       lightClr:"light"}

//   )

// // and after that pass a function for every btn which change theme something like this...
//   const switchToDark = () =>{ 

//         setMode(

//           {color:"dark",

//         backgroundColor:"light",

//         primaryClr:"primary",

//         greenClr:"success"})

// }



// const switchToGreen = () => {

//   setMode(

//     {color:"dark",

//   backgroundColor:"success",

//   primaryClr:"primary",

//   greenClr:"success",

//   lightClr:"light"})
// }

// const switchToBlue = () => {

//   setMode(

//     {color:"light",

//   backgroundColor:"primary",

//   primaryClr:"primary",

//   greenClr:"success",

//   lightClr:"light"
// })}