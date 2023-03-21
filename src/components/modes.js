import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

import './styles/modes.css';
import Navbar from './navbar';


export default function Modes(){
    const [gameModes, setGameModes] = useState({});


//Calls the api to get a list of game modes
    useEffect(() => {
        fetch(`https://api.brawlapi.com/v1/gamemodes`)
        .then(res => res.json())
        .then(res => setGameModes(res))
        .catch(err => console.log(err))
    }, [])


//Maps through and displays the list of game modes
    const modeList = gameModes.list?.map(mode => <div key={mode.id} >
        <Link to={`/modes/${mode.id}`}>
            <img src={mode.imageUrl} alt={mode.name} id="mode-pic"/>
            <h3>{mode.name}</h3>
        </Link>
    </div>)


    return(
        <div id="mode-page">
            <Navbar />
            <h2>Game Modes:</h2>
            <div id="mode-section">
                {modeList}
            </div>
        </div>
    )
}