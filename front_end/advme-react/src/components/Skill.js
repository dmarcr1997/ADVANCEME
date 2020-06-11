import React from 'react'

const Skill = (props) => {
    return(
        <div>
            {props.skill.name}
            <ul>
                <li>Level: {props.skill.level}</li>
                <li>Happiness: {props.skill.happiness}</li>
            </ul>
        </div>
    )
} 

export default Skill