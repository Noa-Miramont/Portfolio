import React from "react"
import '../style/Header.css'

function Header () {
    return(
        <div className="Header">
            <img src="../../public/icons/arrow_back.svg" />

            <nav className="nav_bar">
                <a href="/">Home</a>
                <a href="app.html#/ComingSoon">About</a>
                <a href="app.html#/ComingSoon">Contact</a>
            </nav>
        </div>
    )
}

export default Header