import React from 'react'
import '../styles/index.css'
import Circle from './Circle'

const Board = ({ grid, onClick }) => {

  return (
    <div className="board">
      {
        grid.map((elem, i) => (
          <Circle key={i} elem={elem} onClick={() => onClick(i)}></Circle>
        ))
      }
    </div>
  )
}

export default Board