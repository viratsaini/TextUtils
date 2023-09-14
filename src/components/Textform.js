import React, { useState } from "react";
import './Navbar.css'
export default function Textform(props) {

  const [text, setText] = useState("");

  const changetoup = () => {
    console.log("upper case is clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Changed to uppercase","success");
  };

  const changetolo = () => {
    console.log("upper case is clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Changed to lowercase","success");
  };

  const onchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const clear = () => {
    setText("");
    props.showalert("Text is cleared","success");
  };

  const copytext = () =>{
    navigator.clipboard.writeText(text);
    props.showalert("Copyed to Clipboard","success");
    
  }

  const removespace =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showalert("Extra space removed","success");
  }

  const word =(text)=>{
    let a=text.split(" ");
    a = a.filter((e)=> e !== "");
        return a.length;
  }
  const letter =(text)=>{
    var regex = /\S/g; 
        return text.split(regex).length - 1;
  }

  return (
    < >
     
    <div className="container"
     style={{color : props.mode === "light"?"#171a17":"#f4f4f4 "}}>
      <h1 >{props.heading}</h1>
      </div>
      <div className="contaner">
        <textarea
          className="form-control" style={{backgroundColor : props.mode === "light"?"#f4f4f4":"rgb(39, 39, 39)" ,color : props.mode === "light"?"#171a17":"#f4f4f4 "}} 
          value={text}
          onChange={onchange}
          id="text box"
          rows="9"
        ></textarea>
      </div >
      <button disabled={letter(text)===0} className={`btn btn-outline-${
              props.mode === "dark" ? "success" : "dark"
            }  my-2 mx-1` }
            onClick={changetoup} >
        <b>Convert to uppercase</b>
      </button>
      <button disabled={letter(text)===0} className={`btn btn-outline-${
              props.mode === "dark" ? "success" : "dark"
            }  mx-1 my-2` } onClick={changetolo}>
        <b>Convert to lowercase</b>
      </button>
      <button disabled={letter(text)===0}  className={`btn btn-outline-${
              props.mode === "dark" ? "success" : "dark"
            }  mx-1 my-2` } onClick={clear}>
        <b>Clear text</b>
      </button>
      
      <button disabled={letter(text)===0} className={`btn btn-outline-${
              props.mode === "dark" ? "success" : "dark"
            }  mx-1 my-2` } onClick={copytext}>
        <b>Copy Text</b>
      </button>
      <button  disabled={letter(text)===0} className={`btn btn-outline-${
              props.mode === "dark" ? "success" : "dark" 
            }  mx-1 my-2` } onClick={removespace}>
        <b>Remove Extra Space</b>
      </button>
      
    
    
    <div className="contaner my-3"  style={{color : props.mode === "light"?"#171a17":"#f4f4f4 "}}>
      <h2>Your text summary</h2>
      <p><b>{word(text)}</b> words and <b>{letter(text)}</b> characters</p>
      <p><b>{0.008 * word(text)}</b> Minutes to Read</p>
      <h2>Preview</h2>
      <p>{word(text)>0?text:"Nothing to Preview"}</p>
    </div>
    
    </>
  );
}
