import { useState } from "react";
import "./App.css";
//  import DarkMode from "./componants/DarkMode";
import Navbar from "./componants/Navbar";
import TextArea from "./componants/TextArea";
import Alerts from "./componants/Alerts";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
 

  const showAlert = (message, type) =>{
    setAlert({
      message:message,
      type:type
    })
      setTimeout(()=>{
      setAlert(null);
      },1000);
  }

  const toggleMode = () => {
    if (mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enable","success");
      document.title="TextBox DarkMode";
     } 
    else 
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enable","success")
      document.title="TextBox LightMode";
    }
  };
  
  const red = () =>{ 
       setMode("dark");
       document.body.style.backgroundColor = "red";
  }
    const black= () => {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    };
      const green= () => {
        setMode("dark");
        document.body.style.backgroundColor = "green";
      };
  return (
    <>
      <Navbar
        title="TEXTBOX"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
        red={red}
        black={black}
        green={green}
      />
      <Alerts alert={alert}/>
      <div className="container">
      <TextArea heading="Text Box" mode={mode} showAlert={showAlert}/>
        {/* <DarkMode/>  */}
      </div>
    </>
  );
}
export default App;
