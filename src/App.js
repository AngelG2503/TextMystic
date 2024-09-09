
import React , { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState('null');
  
  const showAlert=(message,type)=>{
         setAlert( {message:message,
          type:type
        }
      )
      setTimeout(() => {
        showAlert(null);
      }, 1200);
  }

  const togglemode=()=>{

    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#3b3b3b';
      showAlert("the Dark mode has been enabled","success");
      document.title='TextUtils-DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("the Light mode has been enabled","success");
    }
}

  
  return (
   <>
<Router>
<Navbar title="TextMystic" about="About" home="Home" mode={mode} togglemode={togglemode}/>


<Alert alert={alert}/>

<div className="container my-3">
    <Routes>
    <Route exact path="/about"
     element={<About />} />

    <Route exact path="/" 
    element={<TextForm heading="Enter your text to analyse" mode={mode} showAlert={showAlert} />} />
    </Routes>
</div>
</Router>

   </>
  )
}

export default App;
