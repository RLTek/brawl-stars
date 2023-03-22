import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import './styles/map-page.css';
import Navbar from './navbar'


export default function MapPage(){
    const { id } = useParams();
    const [mapPage, setMapPage] = useState({})


//Calls the API to get the map selected
    useEffect(() => {
        fetch(`https://api.brawlapi.com/v1/maps/${id}`)
        .then(res => res.json())
        .then(res => setMapPage(res))
        .catch( err => console.log(err))
    }, [id])


    



    return(
        <div id="map-page" style={{backgroundColor: mapPage.gameMode?.bgColor}}>
            <Navbar />
            <div id="map-data">
               <img src={mapPage?.imageUrl} alt={mapPage.name} id="map-pic"/>
               <h2>{mapPage.name}</h2>
               <h3>Game Mode: {mapPage.gameMode?.name}</h3>
               <p>Environment type: {mapPage.environment.name}</p>
               <Link to={mapPage.link} target="_blank">Get the latest stats for {mapPage.name}</Link>
               
            </div>
        </div>
    )
}