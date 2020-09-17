import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import twitter from '../img/social/twitter.svg'
import k from '../img/K/k-white.png'
import NavContainer from './NavContainer'
import '../modules/styles/navbar.sass'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [navBarActiveClass, setnavBarActiveClass] = useState('')

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active)
    // after state has been updated,
    // set the class in state for the navbar accordingly
    active ? setnavBarActiveClass('is-active') : setnavBarActiveClass('')
  }

  return (
    <NavContainer>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={k} alt="Kaldi" style={{ width: '28px', height: '28px', borderRadius: '5px' }} />
          </Link>
          {/* Hamburger menu */}
          <div className={`navbar-burger burger ${navBarActiveClass}`} data-target="navMenu" onClick={() => toggleHamburger()}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            {
              // <Link className="navbar-item" to="/about">
              //   About
              // </Link>
              // <Link className="navbar-item" to="/products">
              //   Products
              // </Link>
              // <Link className="navbar-item" to="/contact">
              //   Contact
              // </Link>
              // <Link className="navbar-item" to="/contact/examples">
              //   Form Examples
              // </Link>
            }
          </div>
          <div className="navbar-end has-text-centered">
            <a className="navbar-item" href="https://github.com/ksinghj" target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <img src={github} alt="Github logo" />
              </span>
            </a>
            <a className="navbar-item" href="https://twitter.com/kartarjabanda" target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <img src={twitter} alt="Twitter logo" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </NavContainer>
  )
}

export default Navbar
