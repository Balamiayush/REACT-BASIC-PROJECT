import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [password, setPassword] = useState([]);
  const [char, setChar] = useState(false);
  const [number, setNumber] = useState(false);
  const [length, setLength] = useState(10);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+=-";
    let generatedPassword = "";
    for (let i = 0; i <= length; i++) {
      const randompass = Math.floor(Math.random() * str.length );
      pass+=str.charAt(randompass)
    }
    setPassword(pass)
  }, [ char, number, length]);
  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])

  return (
    <div className="w-full h-screen bg-zinc-800  gap-[5rem] flex items-center  flex-col ">
      <h1 className="font-bold text-5xl text-white">Password generator</h1>
      <div>
        <input type="text" readOnly  value={password}/>
      <input 
        type="button"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <p>{length}</p>
          <input type="checkbox" onChange={(e)=>{setChar(e.target.checked)}}/>
          <p>Character</p>
          <input type="checkbox" onChange={(e)=>{setNumber(e.target.checked)}} />
      </div>
    </div>
  );
};

export default App;
