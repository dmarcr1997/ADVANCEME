import React from 'react'



const Skill = (props) => {
    let getWidth = () => {
        let per = props.skill.level - parseInt(props.skill.level) 
        if (per === 0.25) return '25px'
        else if (per === 0.50) return '50px'
        else if (per === 0.75) return '75px'
        else return '5px'
        
    }

    let trainSkill = () => {
        props.increase(props.skill.id, props.user_id)
    }

    let barStyle ={
        background: 'green',
        width: '100px',
        paddingTop: '10px',
        paddingBottom: '10px',
        borderRadius: '30px'
    }

    let progStyle ={
        background: 'yellow',
        width: getWidth(),
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '30px'
    }
    return(
        <div>
            {props.skill.name}
            <ul>
                <li>Level: {props.skill.level}</li>
                <div style={barStyle}><div style={progStyle}></div></div>
                <button onClick={() => trainSkill()}>Train</button>
            </ul>
        </div>
    )
} 

export default Skill