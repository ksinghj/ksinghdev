import React, { useState } from 'react'
import '../../modules/styles/DarkModeToggle.css'

const DarkModeToggle = () => {
  let [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    toggled === false ? setToggled(true) : setToggled(false)
    document.body.classList.toggle('is-dark')
  }

  return (
    <div className="dark-mode-toggle dmt__container mx-auto">
      <div className={!toggled ? 'dmt__button w-100 h-100' : 'dmt__button w-100 h-100 dmt__toggled__bg'} onClick={handleToggle}>
        <div className={!toggled ? 'dmt__button-head h-100' : 'dmt__button-head h-100 dmt__toggled'}></div>
      </div>
    </div>
  )
}

export default DarkModeToggle
