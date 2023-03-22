import { useState, useEffect } from 'react'

import './styles/events.css'
import Navbar from './navbar'


export default function Events() {
    const [events, setEvents] =useState({})

    useEffect(() => {
        fetch('https://api.brawlapi.com/v1/events')
        .then(res => res.json())
        .then(res => setEvents(res))
        .catch(err => console.log(err))
    }, [])

    const activeEvents = events.active?.map(e => <div key={e.id} className="active-events" style={{backgroundColor: e.map.gameMode.bgColor}}>
        <h3>{e.map.name}</h3>
        <h4>{e.slot.emoji}{e.slot.name}{e.slot.emoji}</h4>
        <p>Event type: {e.map.gameMode.name}</p>
        <img src={e.map.imageUrl} alt={e.map.name} id="event-pic"/>
        <p>Start Time: {e.startTime?.split('T').join(' ').split('.000Z')} UTC</p>
        <p>End Time: {e.endTime?.split('T').join(' ').split('.000Z')} UTC</p>
    </div>)

    const upcomingEvents = events.upcoming?.map(e => <div key={e.id} className="upcoming-events" style={{backgroundColor: e.map.gameMode.bgColor}}>
        <h3>{e.map.name}</h3>
        <h4>{e.slot.emoji}{e.slot.name}{e.slot.emoji}</h4>
        <p>Event type: {e.map.gameMode.name}</p>
        <img src={e.map.imageUrl} alt={e.map.name} id="event-pic"/>
        <p>Start Time: {e.startTime?.split('T').join(' ').split('.000Z')} UTC</p>
        <p>End Time: {e.endTime?.split('T').join(' ').split('.000Z')} UTC</p>
    </div>)



   

    return (
        <div id="events-page">
            <Navbar />
            <h2>Active Events:</h2>
            <div className="events-component">
                {activeEvents}
            </div>
            <h2>Upcoming Events:</h2>
            <div  className="events-component">
                {upcomingEvents}
            </div>
        </div>
    )
}