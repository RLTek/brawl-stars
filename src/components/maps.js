import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './styles/maps.css';
import Navbar from './navbar';


export default function Maps(){
    const [maps, setMaps] = useState({});
    const [mapFilter, setMapFilter] = useState('all');


//Calls the api to get a list of maps
    useEffect(() => {
        fetch('https://api.brawlapi.com/v1/maps')
        .then(res => res.json())
        .then(res => setMaps(res))
        .catch(err => console.log(err))
    }, [])

//maps through and displays the list of maps
    const mapsList = maps.list?.map(m => <div key={m.id}>
         <Link to={`/maps/${m.id}`}>
            <img src={m.imageUrl} alt={m.name} id="map-image"/>
            <h3>{m.name}</h3>
         </Link>
    </div>)

//filters and displays the list of maps based on user selection
    const mapFilterList = maps.list?.filter(gameType => gameType.gameMode.name.toLowerCase().includes(mapFilter)).map(type => <div key={type.id}>
        <Link to={`/maps/${type.id}`}>
            <img src={type.imageUrl} alt={type.name} id="map-image"/>
            <h3>{type.name}</h3>
        </Link>
   </div>)

//Handles changing the color of the background when a map filter is selected
   const mapsPage = document.getElementById('mapsSection');

   const changeBackground = () => {
        
            if(mapFilter === "all" && mapsPage){
                mapsPage.style.background = "white"
            }
            else if(mapFilter === "heist"){
                mapsPage.style.background = "#d65cd3"
            }
            else if(mapFilter === "volley brawl" || mapFilter === "duels"){
                mapsPage.style.background = "#b8fb26"
            }
            else if(mapFilter === "solo showdown" || mapFilter === "duo showdown"){
                mapsPage.style.background = "#81d621"
            }
            else if(mapFilter === "robo rumble" || mapFilter === "big game" || mapFilter === "boss fight" || mapFilter === "last stand" || mapFilter === "super city rampage"){
                mapsPage.style.background = "#dc2423"
            }
            else if(mapFilter === "basket brawl"){
                mapsPage.style.background = "#2fc4f9"
            }
            else if(mapFilter === "gem grab"){
                mapsPage.style.background = "#9a3df3"
            }
            else if(mapFilter === "brawl ball"){
                mapsPage.style.background = "#8ca0e0"
            }
            else if(mapFilter === "hot zone"){
                mapsPage.style.background = "#e33b50"
            }
            else if(mapFilter === "knockout"){
                mapsPage.style.background = "#f7831c"
            }
            else if(mapFilter === "wipeout"){
                mapsPage.style.background = "#00cfff"
            }
            else if(mapFilter === "snowtel thieves"){
                mapsPage.style.background = "#00da48"
            }
            else if(mapFilter === "hunter" || mapFilter === "hold tthe trophy"){
                mapsPage.style.background = "#e337c1"
            }
            else if(mapFilter === "bot drop" || mapFilter === "payload"){
                mapsPage.style.background = "#e33b50"
            }
            else if(mapFilter === "siege"){
                mapsPage.style.background = "#f05031"
            }
            else if(mapFilter === "lone star"){
                mapsPage.style.background = "#56cdea"
            }
            else if(mapFilter === "takedown"){
                mapsPage.style.background = "#b606b0"
            }
   
}

   changeBackground()
   
    return(
        <div id="maps-page">
            <Navbar />
            <div id="mapsSection">
            <h4>Filter by Game Mode:</h4>
            <select id="map-drop" onChange={e => setMapFilter(e.target.value.toLowerCase())}>
                <option>all</option>
                <option>Solo Showdown</option>
                <option>Duo Showdown</option>
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
        </div>
    )
}