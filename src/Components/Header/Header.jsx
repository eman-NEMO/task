import React from 'react'
import logo from '../../Assets/openmoji_space-shuttle.svg'
export default function Header() {
  const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'About', href: '#' }
];
  return (
<div id='Header'>
<nav className="navbar navbar-expand-lg" >
  <div className="container-fluid">
      <img src={logo} alt="space logo"  />
      <a class="navbar-brand" href="#">SPACEEX</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        
       
      <ul className="navbar-nav">
            {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                    <div className='box rounded-5 d-flex justify-content-center align-items-center m-2'>
                        <a className="nav-link" href={link.href}>{link.text}</a>
                    </div>
                </li>
            ))}
        </ul>
        <li className="nav-item ">
        <div className='ms-4 me-3'> <a className="nav-link" href="#"><strong className='text_color'>Sign Up</strong></a></div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

  )
}
