import React, { useEffect } from 'react'

const NavContainer = ({ children }) => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main-navigation">
      {children}
    </nav>
  )
}

export default NavContainer
