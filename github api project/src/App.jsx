import React, { useCallback, useEffect, useState } from 'react'
import Input from './components/Input'
import Footer from './components/Footer'

function App({data}) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const Api = 'https://api.github.com/users/';
  const fetchData = useCallback(async (username) => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()

  },[])

  useEffect(() => {
    fetchData()
     .then(data => {
        setUserData(data);
        setError(null);
      })
     .catch(error => {
        setError(error);
        setUserData(null);
      });
  },[])
  return (
    <div className='w-full h-screen text-white bg-[#050C9C] flex  flex-col items-center gap-5 p-5'>
      <h1 className='text-5xl font-extrabold bg-[#3572EF] p-2 rounded-full'>GitHub API Search</h1>
      <Input />
      <Footer data={data}/>
    </div>
  )
}

export default App