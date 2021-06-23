import React, { useState } from 'react';
import data from './data';
function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState(0);


  const handleSubmit = (e)=>{
    let amount = parseInt(input);
    if(amount <=0){
      amount = 1
    }
    if(amount > 8){
      amount = 8;
    }
    e.preventDefault();
setText(data.slice(0,amount))
  }
  return (
 <section className="section-center">
   <h3>tired of boring lorem ipsum?</h3>
   <form  className="lorem-form" onSubmit={handleSubmit}>
<label htmlFor="amount">
  paragraphs:
</label>
<input type="number" name='amount' id='amount' value={input} onChange={(e)=>setInput(e.target.value)}/>
<button type='submit' className="btn">generate</button>
   </form>
   <article className="lorem-text">
     {text.map((txt,index)=>{
       return <p key={index}>{txt}</p>
     })}
   </article>
 </section>
    )
}

export default App;
