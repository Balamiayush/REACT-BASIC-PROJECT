import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers, allDelete, removeUser } from './features/userSlice'

function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  return (
    <div>
      <h1>User Management</h1>
      <button onClick={() => dispatch(addUsers())}>Add User</button>
      <button onClick={() => dispatch(removeUser())}>Clear Users</button>
      <button onClick={() => dispatch(allDelete())}>Delete All Users</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => dispatch(removeUser(user.id))}>Remove</button>
          </li>
        ))}
      </ul> // The code here is a list of users from the Redux store. ^^
    </div>
  )
}

export default App