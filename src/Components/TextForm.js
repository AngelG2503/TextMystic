import React ,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
   
  }
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
   
  }
  const handleOnChange=(event)=>{
   console.log("on change");
   setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
 <h1 >
    {props.heading}
 </h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label" >{props.text}</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#3b3b3b':'white', color: props.mode==='dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
      <h2> Your Text Summary</h2>
      <p> {text.split(' ').length} words and {text.length} characters</p>
      <h2> Preview 
        </h2>
        <p> {text.length>0?text:"Enter your text in the above text box to preview it here"} </p>
    </div>
    </>
  )
}
