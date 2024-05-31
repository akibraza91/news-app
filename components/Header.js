"use client"

import React, { useRef, useState } from 'react'
import '../app/globals.css';
import Link from 'next/link';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleClick = (e) => {
    setMenuOpen(!menuOpen);
    menuOpen ? e.target.src = './icon-menu.svg' : e.target.src = './icon-menu-close.svg';
  }

  return (
    <header>
        <div className="logo">
            <img src="./logo.svg" alt="Logo" />
        </div>
        <nav ref={navRef} className={menuOpen ? 'open' : ''}>
          <div className="menuIcon" onClick={handleClick}>
            <img src="./icon-menu.svg" alt="Icon Menu" />
          </div>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/New">New</Link>
            <Link href="/Popular">Popular</Link>
            <Link href="/Trending">Trending</Link>
            <Link href="/Categories">Categories</Link>
          </div>
        </nav>
        <div className={menuOpen ? 'overlay open' : 'overlay'} onClick={handleClick}></div>
    </header>
  )
}

export default Header
