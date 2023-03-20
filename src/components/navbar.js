import {Link} from 'react-router-dom'

import hero from '../images/brawl-stars.png'


import './navbar.css'

export default function Navbar() {



    return(
        <header id="navbar-page">
            <img src={hero} alt="Brawl Stars" id="hero"/>
            <h1><span id="brawl">Brawl</span> <span id="stars">Stars</span></h1>
        <ul id ="navbar">
            <Link to="/"><li>Home</li></Link>
            <Link to="brawlers"><li>Brawlers</li></Link>
            <Link><li>Maps</li></Link>
            <Link><li>Modes</li></Link>
            <Link><li>Events</li></Link>
        </ul>
        </header>
    )
}