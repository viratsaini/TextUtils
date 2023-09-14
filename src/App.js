import { useState } from "react";
import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import{BrowserRouter as Main,Route,Routes}from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "dark" || mode === "danger") {
      setMode("light");
      document.body.style.background = "#f4f4f4";
      showalert("Light mode has been enabled","success");
    } else {
      setMode("dark");
      document.body.style.background = "#171a17";
      showalert("Dark mode has been enabled","success");
      
    }
  };
  
  

  const [alert,setalert]=useState(null);
  const showalert=(massege,type)=>{
            setalert({
              msg:massege,
              t:type
            })
            setTimeout(()=>
            {
              setalert(null);
            },1500)
  }

  return (
    <>
    <Main>
      <Navbar
        titel="TextUtils"
        
        mode={mode}
        toggleMode={toggleMode}
        
       
      />
      <Alert alert={alert}/>

      <Routes>
      <Route exact path="/" element={<div className="container my-3">
        <Textform heading="Enter the text to Analyze below" showalert={showalert} mode={mode} />
      </div>}/>
       <Route  path='/About' element={<About mode={mode}/>} /> 
      </Routes>
      
      </Main>
    </>
  );
}

export default App;
