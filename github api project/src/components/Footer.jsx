import React from 'react'
function Footer(data) {
    
  return (
    <div className='w-[80%] h-[50vh] text-black bg-[#A7E6FF] rounded flex justify-between items-center p-10'>
        <div className='w-[20%] h-[30vh] bg-red-500 rounded'>
            <img src="" alt="" className='object-fit'/>
        </div>
        <div className='text-xl '>
            <p>User:{data.followers}</p>
            <p>Followers:</p>
            <p>FOllowing:</p>
        </div>
    </div>
  )
}

export default Footer