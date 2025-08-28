import React, { useState } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = () => {
  const [active, setActive] = useState(false)

  const toggleNavBar = () => {
    setActive(!active)
  }

  return (
    <StaticQuery
      query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
      render={data => (
        <nav className='navbar is-fixed-top' aria-label='main navigation'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <strong>VeneHindustrial</strong>
            </Link>
            <button
              className={`button navbar-burger ${active ? 'is-active' : ''}`}
              data-target='navMenu'
              onClick={toggleNavBar}
              aria-label='Toggle navigation menu'
              aria-expanded={active}
              aria-controls='navMenu'
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div className={`navbar-menu ${active ? 'is-active' : ''}`} id='navMenu'>

            <div className='navbar-end'>
              <SearchBox searchIndex={data.siteSearchIndex.index} />
              <Link className='navbar-item' to='/about' activeStyle={{ textDecoration: 'salmon double underline' }}>
                About
              </Link>
              <Link className='navbar-item' to='/pricing' activeStyle={{ textDecoration: 'salmon double underline' }}>
                Products
              </Link>
              <Link className='navbar-item' to='/services' activeStyle={{ textDecoration: 'salmon double underline' }}>
                Services
              </Link>
              <Link className='navbar-item' to='/blog' activeStyle={{ textDecoration: 'salmon double underline' }}>
                Blog
              </Link>
              <a className=' navbar-item' target='_blank' rel='noopener noreferrer' href='https://calendar.venehindustrial.site'>Events</a>
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <p className='control'>
                    <Link
                      className='button is-primary is-outlined'
                      to='/contact'>
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default NavBar
