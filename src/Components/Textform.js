import React, { useState } from 'react'


export default function Textform(props) {
  const handelLoClick=()=>{
let newText = text.toLowerCase()
setText(newText)
  }

  const handelUpClick=()=>{
let newText = text.toUpperCase()
setText(newText)
     }

  const handelOnChange=(event)=>{
setText(event.target.value)
     }
   
  const [text, setText]=useState('');
  var wordlength=text.split(" ").filter((element)=>{return element.length!==0})

//   const handelOnChange=()=>{
// console.log("on change ");
//   }
  return (
    
   
   
   <>
  <div style={{color: props.preBg==='light'?'black':'white'}}> 
<div className="mb-3 " >
  <label htmlFor="mybox" className="form-label"><h4>{props.heading}</h4></label>
  <textarea className="form-control" value={text} style={{backgroundColor: props.preBg==='light'?'white':'#3c1d5d', color:props.preBg==='light'?'black':'white'}} onChange={handelOnChange} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary my-2 mx-2" onClick={handelUpClick}>Change to Uppercase</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handelLoClick}>Change to Lowercase</button>
  <h3>Your Text Summery</h3> 
  <p>This text has {wordlength.length} words and {text.length} letters</p>
  <p>{wordlength.length*0.008} minutes to read</p>
</div>


    </>
  )
}
