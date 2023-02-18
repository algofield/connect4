import React, { useState } from 'react'
import '../styles/index.css'


const App = (props) => {

  let [count, updateCount] = useState(0)

  return (
    <div className="page-container">
      <div className="title">The Count is {count}</div>
      <div className="btn-box">
        <button className="btn" onClick={(e) => (e.preventDefault(), updateCount(count + 1))}>+</button>
        <button className="btn" onClick={(e) => (e.preventDefault(), updateCount(count - 1))}>-</button>
        <button className="btn" onClick={(e) => (e.preventDefault(), updateCount(0))}>0</button>
      </div>
    </div>
  )
}

export default App
