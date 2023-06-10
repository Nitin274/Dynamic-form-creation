import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <nav className={'navbarContainer'}>
      <div className={'navbarOption'}>
      <h4 className='navbarText'>Home</h4>
      <h4 className='navbarText' >Contact Us</h4>
      <h4 className='navbarText' >About us</h4>
      </div>
    </nav>
  )
}
