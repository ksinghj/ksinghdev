import React from 'react'

const NavContainer = ({ children }) => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main-navigation" style={{ background: 'transparent' }}>
      {children}
    </nav>
  )
}

export default NavContainer
