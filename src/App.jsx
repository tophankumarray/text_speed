import Alert from './Components/Alert/Alert';
import Navbar from './Components/Navbar/Navbar'
import Textform from './Components/TextForm/Textform'
import React, { useState } from 'react';

const App = () => {
  const [mode, setMode] = useState('light');   //create state
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled","success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="Text Speed" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App
