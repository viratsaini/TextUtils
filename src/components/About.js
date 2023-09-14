import React from "react";


export default function About(props) {
  let mystyle={
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"#313030":"white",
    border:props.mode==="dark"?"1px solid white":"1px solid black",
    borderRadius:"2px",
   
  }

  return (
    <>
      <div className="container my-3" >
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
          <h1>About Us</h1>
        </div>
        <div
          className="container "
          
        >
          <div className="accordion accordion-flush my-2" id="accordionFlushExample" >
            <div className="accordion-item" 
            
            >
              <h2 className="accordion-header" id="flush-headingOne" style={mystyle}>
                <button
                 
                  className="accordion-button collapsed"
                  type="button"
                  style={mystyle}
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Analyze Your text
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                style={mystyle}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body" style={mystyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                </div>
              </div>
            </div>
            <div className="accordion-item" 
           
            >
              <h2 className="accordion-header" id="flush-headingTwo" style={mystyle}>
                <button
                  
                  className="accordion-button collapsed"
                  type="button"
                  style={mystyle}
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Free to use
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                style={mystyle}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body" style={mystyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
              </div>
            </div>
            <div className="accordion-item " 
            
            >
              <h2 className="accordion-header" id="flush-headingThree" style={mystyle}>
                <button
                  style={mystyle}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                 Browrser Compatible
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                style={mystyle}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body" style={mystyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                  application.
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
