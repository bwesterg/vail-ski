import React from 'react' 
import TrailCard from './TrailICard'

export default function TrailContainer(props) {

    const showTrails = () => {
        return props.trails.map(trail => <TrailCard removeTrail={props.removeTrail} trail={trail} />)
    }

    return (
        <ul className="trail-container">
            {showTrails()}
        </ul>
    )
}