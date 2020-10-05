import React, { useState } from 'react'

const ModeToggle = ({ classNames }) => {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
    document.body.classList.toggle('is-dark')
    //mode === 'dark' ?
  }

  return (
    <button className={classNames} onClick={toggleMode}>
      <p>ModeToggle</p>
    </button>
  )
}

export default ModeToggle
