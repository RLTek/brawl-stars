import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import './styles/brawler.css';

import Navbar from './navbar';


export default function Brawler(){
    const { id } = useParams();
    const [brawler, setBrawler] = useState({});


//Calls the API for the selected brawler
    useEffect(() => {
        fetch(`https://api.brawlapi.com/v1/brawlers/${id}`)
        .then(res => res.json())
        .then(res => setBrawler(res))
        .catch(err => console.log(err))
    }, [id])

//Maps through and displays the gadgets
    const gadgets = brawler.gadgets?.map(gadget => <div key={gadget.name}>
        <h4><img src={gadget.imageUrl} alt="gadget" id="gadget-pic"/> Name: {gadget.name}</h4>
        <p><b>Description:</b> {gadget.description}</p>
    </div>)

//Maps through and displays the starpowers
const starPowers = brawler.starPowers?.map(starPower => <div key={starPower.name}>
    <h4><img src={starPower.imageUrl} alt="starpower" id="starpower-pic"/> Name: {starPower.name}</h4>
    <p><b>Description:</b> {starPower.description}</p>
</div>)

//Assigns the background color based on the brawler's rarity
    let rarity = brawler.rarity?.name;
    const common = "#b9eaff";
    const rare = "#68fd58"
    const superRare = "#5ab3ff";
    const epic = "#d850ff";
    const mythic = "#fe5e72"
    const legendary = "#fff11e";
    const chromatic = "#f88f25";

    const backRare = document.getElementById('brawler-data');

//Changes the background color based on the brawler's rarity
    const backgroundRare = () => {
        if(rarity === "Common"){
            backRare.style.background = common
        }
        else if(rarity === "Rare"){
            backRare.style.background = rare
        }
        else if(rarity === "Super Rare"){
            backRare.style.background = superRare
        }
        else if(rarity === "Chromatic"){
            backRare.style.background = chromatic
        }
        else if(rarity === "Epic"){
            backRare.style.background = epic
        }
        else if(rarity === "Mythic"){
            backRare.style.background = mythic
        }
        else if(rarity === "Legendary"){
            backRare.style.background = legendary
        }
    }
    
//Calls the background changing function
    backgroundRare()

    return(
        <div id="brawler-page">
            <Navbar />

            <div id="brawler-data">
                <h2>{brawler?.name}</h2>
                <img src={brawler?.imageUrl} alt={brawler.name}/>

                <h3>{brawler.class?.name}</h3>
                <Link to={brawler?.link} target="_blank"><p>Get the latest live stats for {brawler?.name}</p></Link>

                <p><b>Rarity:</b> {brawler.rarity?.name}</p>
                <p>{brawler?.description}</p>
                <h3>Gadgets:</h3>
                <div id="gadgets">
                   {gadgets}
                </div>
                <h3>Star Powers:</h3>
                <div>
                    {starPowers}
                </div>
            </div>
        </div>
    )
}