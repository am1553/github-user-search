import React from 'react'
import moon from '../assets/icon-moon.svg'

function Header() {

    return (
        <div className='header-component'>
            <div className="logo">
                <span className="logo-text">devfinder</span>
            </div>
                
            {/* <button className="theme-mode">
                <span className='theme-text'>dark</span>
                <img src={moon} alt="" />
            </button> */}
        </div>
    )
}

export default Header
