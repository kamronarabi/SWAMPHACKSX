import React from 'react'
import { useState } from 'react';

const PwdGen = () => {

    
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const includeLowercase = true;
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const chars = [];
    if (includeUppercase) chars.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (includeLowercase) chars.push('abcdefghijklmnopqrstuvwxyz');
    if (includeNumbers) chars.push('0123456789');
    if (includeSymbols) chars.push('!@#$%^&*()_-+={}[]|;:<>,.?/~');

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomChars = chars.join('');
      newPassword += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="pwd">
      <h1>Password Generator</h1>
      <div>
        <label>Password Length: </label>
        <input 
          type="number" 
          value={length} 
          onChange={e => setLength(e.target.value)} 
          min="8" 
          max="128" 
          style={{height:"15px", marginBottom:"20px", fontSize:""}}
        />
      </div>
      <div className="checklist">
        <div>
            <input 
            type="checkbox" 
            checked={includeUppercase} 
            onChange={e => setIncludeUppercase(e.target.checked)} 
            style={{height:"20px"}}
            />
            <label>Include Uppercase</label>
        </div>
        <div>
            <input 
            type="checkbox" 
            checked={includeNumbers} 
            onChange={e => setIncludeNumbers(e.target.checked)} 
            style={{height:"20px"}}
            />
            <label>Include Numbers</label>
        </div>
        <div>
            <input 
            type="checkbox" 
            checked={includeSymbols} 
            onChange={e => setIncludeSymbols(e.target.checked)} 
            style={{height:"20px",marginBottom:"30px"}}
            />
            <label>Include Symbols</label>
        </div>

      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <label>Generated Password: </label>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
}

export default PwdGen