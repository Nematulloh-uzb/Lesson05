import './App.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userName, removeUsers } from './Features/usersSlice.js'

function App() {
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter)
  const userNamee = useSelector((state) => state.users)

  function handleRemove(index) {
    dispatch(removeUsers(index))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const yozilishiShart = name.trim()

    if (!yozilishiShart) return

    const newObj = {
      name: yozilishiShart,
    }

    dispatch(userName(newObj))

    setName("")
    e.target.reset()
  }

  return (
    <div className="app-shell">
      <div className="card">
        <h1>Redux Toolkit!</h1>
        <p className="subtitle">Bu yerga biror narsa qo'shishingiz mumkin va u saqlanadi.</p>
        <form className="user-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter something" onChange={(e) => setName(e.target.value)} />
          <button type="submit">Click Me</button>
        </form>

        <div className="user-list">
          {userNamee.map((user, index) => (
            <div className="user-item" key={index}>
              <p>{user.name}</p>
              <button className="remove-btn" type="button" onClick={() => handleRemove(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
