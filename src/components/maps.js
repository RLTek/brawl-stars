import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './styles/maps.css';
import Navbar from './navbar';


export default function Maps(){
    const [maps, setMaps] = useState({});
    const [mapFilter, setMapFilter] = useState('all');

    useEffect(() => {
        fetch('https://api.brawlapi.com/v1/maps')
        .then(res => res.json())
        .then(res => setMaps(res))
        .catch(err => console.log(err))
    }, [])

    const mapsList = maps.list?.map(m => <div key={m.id}>
         <Link to={`/maps/${m.id}`}>
            <img src={m.imageUrl} alt={m.name} id="map-image"/>
            <h3>{m.name}</h3>
         </Link>
    </div>)

    const mapFilterList = maps.list?.filter(gameType => gameType.gameMode.name.toLowerCase().includes(mapFilter)).map(type => <div key={type.id}>
        <Link to={`/maps/${type.id}`}>
            <img src={type.imageUrl} alt={type.name} id="map-image"/>
            <h3>{type.name}</h3>
        </Link>
   </div>)


    return(
        <div id="maps-page">
            <Navbar />
            <h4>Filter by Game Mode:</h4>
            <select id="map-drop" onChange={e => setMapFilter(e.target.value.toLowerCase())}>
                <option>all</option>
                <option>Showdown</option>
                <option>Gem Grab</option>
                <option>Brawl Ball</option>
                <option>Hot Zone</option>
                <option>Knockout</option>
                <option>Heist</option>
                <option>Duels</option>
                <option>Basket brawl</option>
                <option>Robo Rumble</option>
                <option>Boss Fight</option>
                <option>Last Stand</option>
                <option>Big Game</option>
                <option>Wipeout</option>
                <option>Hunters</option>
                <option>Snowtel Thieves</option>
                <option>Payload</option>
                <option>Siege</option>
                <option>Volley Brawl</option>
                <option>Hold The Trophy</option>
                <option>Lone Star</option>
                <option>Takedown</option>
            </select>
            <div id="maps-section">
                
                {mapFilter === "all" ? mapsList : mapFilterList}
            </div>
        </div>
    )
}