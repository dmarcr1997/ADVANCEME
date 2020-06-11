import React from 'react'

const Skill = (props) => {
    let trainSkill = () => {
        props.increase(props.skill.id, props.user_id)
    }
    return(
        <div>
            {props.skill.name}
            <ul>
                <li>Level: {props.skill.level}</li>
                <li>Happiness: {props.skill.happiness}</li>
                <button onClick={() => trainSkill()}>Train</button>
            </ul>
        </div>
    )
} 

export default Skill