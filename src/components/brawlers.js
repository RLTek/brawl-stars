import {useState, useEffect} from 'react';

import './brawlers.css'
import Navbar from './navbar.js'


export default function Brawlers(){
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('https://api.brawlapi.com/v1/brawlers')
        .then(res => res.json())
        .then(res => setCharacters(res))
    }, [])

    const characterList = characters.list?.map(character => <div>
        <img src={character.imageUrl} alt={character.name}/>
        <h2>{character.name}</h2>
    </div>)

    


    return(
        <div id ="brawlers-page">
        <Navbar />
        <h3>Search for your favorite brawler:</h3>
        <input id="searchInput" type="text" value={search} onChange={e => setSearch(e.target.value.toLowerCase())}/>
        <h2>Brawlers:</h2>
        <div id="brawler-card">
        {characterList}
        </div>
        
        </div>
    )
}