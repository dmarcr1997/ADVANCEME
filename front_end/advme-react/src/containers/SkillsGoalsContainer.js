import React, { Component } from 'react';
import Skill from '../components/Skill';
import Goal from '../components/Goal';
import Form from '../components/Form';
import { connect }from 'react-redux';
import {newSkill, increaseSkill} from '../actions/skillActions';
class Skills extends Component{
    state = {
        toggle: false,
        currentUser: ''
    };
    
    renderGoalsOrSkills = () =>{
        switch(this.props.type){
            case 'skills':
                return(
                <div>
                <h3>Skills</h3>
                {this.props.skills.map((skill => <Skill user_id={this.props.user_id} skill={skill} train={this.trainSkill}/>))}
                <button onClick={() => this.toggle()}>New Skill</button>
                {this.renderForm(['name'])}
                </div>
                )
            case 'goals':
                return(
                    <div>
                    <h3>Goals</h3>
                    {this.props.goals.map((goal => <Goal goal={goal}/>))}
                    <button onClick={() => this.toggle()}>New Goal</button>
                    {this.renderForm(['name', 'datetime'])}
                    </div>
                    )
            case 'default':
                return(<div>Go Back to Home page</div>)
        }
    }

    componentDidMount(){
        const links = this.props.links
        this.props.renderLinks(links)
        this.setState({
            currentUser: this.props.user_id
        })
    }

    trainSkill = (skill_id, user_id) => {
        this.props.increaseSkill(skill_id, user_id)
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.newSkill(event.target.name.value, event.target.hidden.value)
        this.toggle()
    }
    toggle = () =>{
        let current = this.state.toggle
        this.setState({
            toggle: !current
        })
    }
    
    renderForm = (inp) =>{
        const formInputs = inp;
        if(this.state.toggle === true)
        return(<Form callBack={this.handleSubmit} inputs={formInputs} hasHidden={true} hiddenVal={this.props.user_id}/>)
        else
        return
    }
    render(){
        console.log(this.props)
        return(
            <>
            {this.renderGoalsOrSkills()}
            </>
        )
    }   
}

const mapStateToProps = state => {
    return({
      user: state.username,
      skills: state.skills,
      goals: state.goals,
      user_id: state.id
    })
  }
  const mapDispatchToProps = dispatch => {
    return{
        newSkill: (skillData, id) => dispatch(newSkill(skillData, id)),
        increaseSkill: (skill_id, user_id) => dispatch(increaseSkill(skill_id, user_id))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Skills)