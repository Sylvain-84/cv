import React from 'react'
import './nav.scss'

const Nav = () => {

    const url = window.location.href

  return (
    <div className='nav'>
        <a href='/projects' className={url.includes('projects') ? 'active' : ''}
        >Projets</a>
        <a href='/about' className={url.includes('about') ? 'active' : ''}>A propos</a>
        <a href='/curriculum' className={url.includes('curriculum') ? 'active' : ''}>CV</a>

        <a href='/contact' className={url.includes('contact') ? 'active contact' : 'contact'}>Contact</a>
    </div>
  )
}

export default Nav