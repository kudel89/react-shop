import React from 'react'

export const Header = () => {
  return (
    <nav className='blue darken-3'>
      <div className='nav-wrapper'>
        <a href='#!' className='brand-logo'>
          React Movies
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/kudel89/react-shop'
              target='_blank'
              rel='noreferrer'>
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
