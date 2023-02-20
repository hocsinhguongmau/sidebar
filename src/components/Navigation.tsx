import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiFillCloseCircle } from 'react-icons/ai'
import { SlArrowRight } from 'react-icons/sl'
import navigation from '../data/navigation.json'

type NavigationType = {
  url: string
  text: string
  children?: NavigationType[]
}

const NavItem = ({ url, text, children }: NavigationType) => {
  const [active, setActive] = useState(false)
  return (
    <li>
      {children ? (
        <>
          <button
            className={`nav-button ${active ? 'active' : ''}`}
            onClick={() => setActive(!active)}>
            {text}
            <SlArrowRight
              className={`nav-arrow ${active ? 'rotate-90' : ''}`}
            />
          </button>
          <ul className={`navigation ${active ? '' : 'hidden'}`}>
            {children.map((item, index) => (
              <NavItem {...item} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <a href={url} className='nav-button'>
          {text}
        </a>
      )}
    </li>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`nav-bar ${open ? 'left-0' : '-left-full'}`}>
      <button
        className={`absolute top-4 ml-4 left-full text-3xl text-white md:hidden ${
          open ? 'hidden' : ''
        }`}
        onClick={() => setOpen(true)}>
        <RxHamburgerMenu />
      </button>
      <button
        className='absolute top-2 right-2 text-purple-500 text-3xl md:hidden'
        onClick={() => setOpen(false)}>
        <AiFillCloseCircle />
      </button>
      <div className={`navigation`}>
        <ul className=''>
          {navigation.map((item: NavigationType, index) => (
            <NavItem {...item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  )
}
