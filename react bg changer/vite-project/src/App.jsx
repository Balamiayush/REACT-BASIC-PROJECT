import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");
  return (
    <div
      className="w-full h-screen duration-200 flex items-center justify-center gap-5  "
      style={{ backgroundColor: color }}>
        <button className="px-[5rem] py-2 rounded-full  bg-red-500 font-bold text-2xl" onClick={()=>{setColor('red')}}>red</button>
        <button className="px-[5rem] py-2 rounded-full  bg-blue-500 font-bold text-2xl" onClick={()=>{setColor('blue')}}>blue</button>
        <button className="px-[5rem] py-2 rounded-full  bg-green-500 font-bold text-2xl" onClick={()=>{setColor('green')}}>rgreen</button>
        <button className="px-[5rem] py-2 rounded-full  bg-orange-500 font-bold text-2xl" onClick={()=>{setColor('orange')}}>orange</button>
        <button className="px-[5rem] py-2 rounded-full  bg-yellow-500 font-bold text-2xl" onClick={()=>{setColor('yellow')}}>yellow</button>
    </div>
  );
}

export default App;
