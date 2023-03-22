import {Link} from 'react-router-dom'

import hero from '../images/brawlStars.jpg'
import logo from '../images/logo.png'


import './styles/navbar.css'

export default function Navbar() {



    return(
        <header id="navbar-page">
            <img src={hero} alt="Brawl Stars" id="hero"/>
            <h1 id="title"><span id="brawl">Brawl</span> <span id="stars">Stars</span> <img src={logo} alt="logo" id="logo"/></h1>
            
        <ul id ="navbar">
            <Link to="/"><li>Home</li></Link>
            <Link to="/brawlers"><li>Brawlers</li></Link>
            <Link to="/maps"><li>Maps</li></Link>
            <Link to="/modes"><li>Modes</li></Link>
            <Link to="/events"><li>Events</li></Link>
        </ul>
        </header>
    )
}