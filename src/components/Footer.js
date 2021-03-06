import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/K/k-white.png'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'

import '../modules/styles/footer.sass'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Link to="/">
            <img src={logo} alt="Kaldi" style={{ width: '10em', height: 'auto' }} />
          </Link>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    {
                      // TODO: about page
                    }
                    <li>
                      <a className="navbar-item" href="/admin/" target="_blank" rel="noopener noreferrer">
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Blog Updates
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3 social">
                <a title="twitter" href="https://twitter.com/kartarjabanda">
                  <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: '1em', height: '1em' }} />
                </a>
                <a title="instagram" href="https://www.instagram.com/kartarjabandaa/">
                  <img src={instagram} alt="Instagram" style={{ width: '1em', height: '1em' }} />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/in/kartar-jabanda-li/">
                  <img src={linkedin} alt="Linkedin" style={{ width: '1em', height: '1em' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
