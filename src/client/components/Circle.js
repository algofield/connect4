import React from 'react'
import '../styles/index.css'

const Circle = ({ elem, onClick }) => {
  const style = elem?.color ? `circle ${elem.color}`: `circle`

  return (
    <button className={style} onClick={onClick}></button>
  )
}

export default Circle