import React from 'react' 
import TrailCard from './TrailICard'

export default function TrailContainer(props) {

    const showTrails = () => {
        return props.trails.map(trail => <TrailCard removeTrail={props.removeTrail} trail={trail} />)
    }

    return (
        <div>
            <form>
                <label for="difficulty">Choose a difficulty:</label>
                    <select name="difficulty" id="status">
                        <option value="green">GREEN</option>
                        <option value="blue">BLUE</option>
                        <option value="1black">1BLACK</option>
                        <option value="2black">2BLACK</option>
                    </select>
            </form>
            <ul className="trail-container">
                {showTrails()}
            </ul>
        </div>
    )
}