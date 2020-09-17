import React from 'react'

const NavContainer = ({ children }) => {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      {children}
    </nav>
  )
}

export default NavContainer
