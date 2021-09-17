import React from 'react' 


export default function TrailCard(props) {
    
    const handleClick = (event) => {
        props.removeTrail(props.trail)
    }
    
    return (
        <li className="trail-card">
            <p>{props.trail.name}</p>
            <p>{props.trail.difficulty}</p>
            <button className="delete" onClick={handleClick}>REMOVE TRAIL</button>
        </li>
    )
}