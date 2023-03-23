import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './styles/brawlers.css'
import Navbar from './navbar.js'


export default function Brawlers(){
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")


//Calls API to get a list of brawlers
    useEffect(() => {
        fetch('https://api.brawlapi.com/v1/brawlers')
        .then(res => res.json())
        .then(res => setCharacters(res))
    }, [])

//maps the list of characters
    const characterList = characters.list?.map(character => <div key={character.id}>
        <Link to={`/brawlers/${character.id}`} className="brawler-card">
            <img src={character.imageUrl} alt={character.name}/>
            <h2>{character.name}</h2>
        </Link>
    </div>)

//Filters and maps a list of characters based on user search
    const filteredList = characters.list?.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).map(d => <div key={d.id}>
        <Link to={`/brawlers/${d.id}`} className="brawler-card">
            <img src={d.imageUrl} alt={d.name}/>
            <h2>{d.name}</h2>
        </Link>
    </div>)


    return(
        <div id ="brawlers-page">
        <Navbar />
        <h3>Search for your favorite brawler:</h3>
        <input id="searchInput" type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        <h2>Brawlers:</h2>
        <div id="brawler-card">
        {search !== '' ? filteredList : characterList}
        </div>
        
        </div>
    )
}