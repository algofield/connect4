import React, { useState } from 'react'
import '../styles/index.css'
import { calculateWins, copyGrid, findOpenIndex } from '../util/utils'
import Board from './Board'

const App = (props) => {


  let [grid, updateGrid] = useState(Array.from({ length : 42 }, (_, i) => ({ color: '' })))
  let [redIsUp, setRedIsUp] = useState(true)
  let [isGameOver, setIsGameOver] = useState(false)
  let [whoWon, setWhoWon] = useState('')

  const RED = 'red'
  const BLUE = 'blue'

  const clickHandler = (index) => {
    if (!isGameOver) {
      let g = copyGrid(grid)
      let gBefore = copyGrid(grid)
      let k = findOpenIndex(g, index)
      if (k === -1) return;
      if (redIsUp) {
        g[k].color = RED
      } else {
        g[k].color = BLUE
      }
      const { won:isOver, winningColor } = calculateWins(g, gBefore, index)
      // console.log(isOver, winningColor)
      if (isOver) {
        setIsGameOver(true)
        setWhoWon(winningColor)
      } else {
        setRedIsUp(!redIsUp)
      }
      updateGrid(g)
    }
  }

  const restartGame = () => {
    updateGrid(Array.from({ length : 42 }, (_, i) => ({ color: '' })))
    setRedIsUp(true)
    setWhoWon('')
    setIsGameOver(false)
  }

  return (
    <div className="page-container">
      <div className="title">Connect 4</div>
      <div className="btn-box">
        <h2 className="title">{redIsUp ? RED : BLUE}'s Turn</h2>
      </div>
      <Board grid={grid} onClick={clickHandler}/>
      {
        isGameOver ? (
          <div className="modal">
            <h1 className="title">{whoWon} wins!</h1>
            <button onClick={restartGame} className="btn">Play Again?</button>
          </div>
        ) : (
          <React.Fragment>
          </React.Fragment>
        )
      }
    </div>
  )
}

export default App
