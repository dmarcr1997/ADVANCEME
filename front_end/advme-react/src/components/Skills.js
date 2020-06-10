import React, { Component } from 'react'
import Skill from './Skill';
import Form from './Form';
import { connect }from 'react-redux';
import {newSkill, increaseSkill} from '../actions/skillActions';
class Skills extends Component{
    state = {
        toggle: false,
        currentUser: ''
    };
    
    componentDidMount(){
        const links = ['home', 'goals', 'logout']
        this.props.renderLinks(links)
        this.setState({
            currentUser: this.props.user_id
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        debugger
        this.props.newSkill(event.target.name.value, event.target.hidden.value)
        this.toggle()
    }
    toggle = () =>{
        let current = this.state.toggle
        this.setState({
            toggle: !current
        })
    }
    
    renderForm = () =>{
        const formInputs = ['name'];
        if(this.state.toggle === true)
        return(<Form callBack={this.handleSubmit} inputs={formInputs} hasHidden={true} hiddenVal={this.props.user_id}/>)
        else
        return
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h3>Skills</h3>
                {this.props.skills.map(skill => <div>{skill.name}: {skill.level}</div>)}
                {/* {this.props.skills.map((skill => <Skill skill={skill}/>))} */}
                <button onClick={() => this.toggle()}>New Skill</button>
                {this.renderForm()}
            </div>
        )
    }   
}

const mapStateToProps = state => {
    return({
      user: state.username,
      skills: state.skills,
      user_id: state.id
    })
  }
  const mapDispatchToProps = dispatch => {
    return{
        newSkill: (skillData, id) => dispatch(newSkill(skillData, id)),
        increaseSkill: skillData => dispatch(increaseSkill(skillData))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Skills)