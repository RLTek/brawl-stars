import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './styles/mode.css';
import Navbar from './navbar';


export default function Mode(){
    const { id } = useParams();
    const [gameMode, setGameMode] = useState({})


//calls the API to get the game mode that was selected
    useEffect(() => {
        fetch(`https://api.brawlapi.com/v1/gamemodes/${id}`)
        .then(res => res.json())
        .then(res => setGameMode(res))
        .catch(err => console.log(err))
    }, [id])

//handles changing the background color based on the game mode selected
    const colorChange = document.getElementById('gameMode-section');

    const handleColorChange = () => {
       if(colorChange){
        colorChange.style.background = gameMode.bgColor
       }
    }
    
        handleColorChange()
    

    return(
        <div id="gameMode-page">
            <Navbar />
            
            <div id="gameMode-section">
                <img src={gameMode.imageUrl2} alt={gameMode.name} id="mode-banner"/>
                <div id="mode-hero">
                    <div>
                    <img src={gameMode.imageUrl} alt={gameMode.name} id="mode-logo"/>
                    </div>
                    <div>
                        <h2>{gameMode.name}</h2>
                        <h5>{gameMode.title}</h5>
                        <h5>{gameMode.shortDescription}</h5>
                    </div>
                    <div>
                    <img src={gameMode.imageUrl} alt={gameMode.name} id="mode-logo"/>
                    </div>
                </div>
                <div id="description">
                <p>{gameMode.tutorial}</p>        
                </div>
            </div>
        </div>
    )
}