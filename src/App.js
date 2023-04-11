import React, { useState } from 'react';
import './App.css';
function App() {
  const [inpText, setInpText] = useState('');
  const [getText, setText] = useState('');
  function submit() {
    let string = inpText
    setText(() => string);
    setInpText("");
  }
  return (
    <>
      <div className='box'>
        <h1>{getText}</h1>
      </div>
      <input value={inpText} onChange={(e) => setInpText(e.target.value)} type='text' placeholder='Enter some text...'/>
      <button className='submit' onClick={() => submit()}>Submit</button>
    </>
  );
}
export default App;