import React, { useState } from "react";

export default function TextForm(props) {

  const [sentence, setSentence] = useState("");

  const handleOnChange = (event)=>{
    setSentence(event.target.value);
  };

  const handleOnClick = ()=>{
    var uppercase = sentence.toUpperCase();
    setSentence(uppercase);
    props.showAlert("Converted to UpperCase...", "success");
  };

  const copyText= ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard...", "success");
    }

  const removeSpace = ()=>{
    let newText = sentence.split(/[ ]+/);
    setSentence(newText.join(" "));
    props.showAlert("Removed extra spaces from text...", "success");
  }

  const clearText =()=>{
    var text= "";
    setSentence(text);
    props.showAlert("Text box is cleared", "success");
  }

  return (
    <div>
        <h1 style={{color:props.mode === 'light'? 'black': 'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myInput" className="form-label" style={{color:props.mode === 'light'? 'black': 'white'}}>
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="myInput"
          placeholder="name@example.com"
          style={{backgroundColor:props.mode === 'light'? 'white': 'lightgray', color:props.mode === 'light'? 'black': 'white'}}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label" style={{color:props.mode === 'light'? 'black': 'white'}}>
          Enter text
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="5"
          value={sentence}
          placeholder="Enter text here..."
          onChange={handleOnChange}
          style={{backgroundColor:props.mode === 'light'? 'white': 'lightgray',
                  color:props.mode === 'light'? 'black': 'white'}}
        ></textarea>
        <div className="my-4">
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={removeSpace}>Remove Spaces</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>

        </div>

        <div className="container">
          <h1 style={{color:props.mode === 'light'? 'black': 'white'}}>Your text summary</h1>
          <p style={{color:props.mode === 'light'? 'black': 'white'}}>{sentence.split(" ").length} words and {sentence.length} characters</p>
        </div>
      </div>
    </div>
  );
}
