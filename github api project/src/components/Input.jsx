import React, { useState } from "react";

function Input({fetchData}) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(username);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}  className="flex gap-5">
        <label className="text-2xl font-extrabold p-2 rounded-full">NAME:</label>
        <input
          type="text"
          className="w-[20rem] bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Input;
