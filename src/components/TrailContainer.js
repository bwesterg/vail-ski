import React from 'react' 
import TrailCard from './TrailICard'

export default function TrailContainer(props) {

    const showTrails = () => {
        return props.trails.map(trail => <p><TrailCard trail={trail} /></p>)
    }

    return (
        <ul className="trail-container">
            {showTrails()}
        </ul>
    )
}