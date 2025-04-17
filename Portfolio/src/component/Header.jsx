import React from "react"
import '../style/Header.css'

function Header () {
    return(
        <div className="Header">
            <img src="../../static/icons/arrow_back.svg" />

            <nav className="nav_bar">
                <a className="Home" href="/">Home</a>
                <a className="About" href="/About">About</a>
                <a className="Contact" href="/Contact">Contact</a>
            </nav>
        </div>
    )
}

export default Header