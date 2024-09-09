import React ,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  
  const handleOnChange=(event)=>{
   console.log("on change");
   setText(event.target.value)
  }
  
  const [text, setText] = useState('');
  return (
    <>
    <div>
     
 <h1>
    {props.heading}
 </h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">{props.text}</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={speak}>Text to Speech</button>
    </div>
    <div className="container my-3">
      <h2> Your Text Summary</h2>
      <p> {text.split(' ').length} words and {text.length} characters</p>
      <h2> Preview 
        </h2>
        <p> {text} </p>
    </div>
    </>
  )
}
