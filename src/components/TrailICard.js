import React from 'react' 


export default function TrailCard(props) {
    return (
        <li>
            <p>{props.trail.name}</p>
            <p>{props.trail.difficulty}</p>
        </li>
    )
}