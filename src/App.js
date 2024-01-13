import { useState } from "react";
import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
      })

      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const toggleValue= ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
      <Navbar title="My React App" mode={mode} toggleValue={toggleValue}/>
      <div className="container my-3">
        <Alert alert={alert}/>
        <TextForm heading="Give your suggestions.." mode={mode} showAlert={showAlert}/>
      
      </div>
    </>
  );
}

export default App;

