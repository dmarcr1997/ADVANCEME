import React, { Component } from 'react';
import Skill from '../components/Skill';
import Form from '../components/Form';
import '../App.css'
import { connect }from 'react-redux';
import {newSkill, increaseSkill} from '../actions/skillActions';
class Skills extends Component{
    state = {
        toggle: false,
        currentUser: '',
    };
    
    renderSkills = () =>{
        return(
            <div className='skillContainer'>
            <h3>Skills</h3>
            {this.props.skills.map((skill => <Skill user_id={this.props.user_id} skill={skill} increase={this.props.increaseSkill}/>))}
            <button onClick={() => this.toggle()}>New Skill</button>
            {this.renderForm(['name'], this.handleSubmit)}
            </div>
        )
    }
    

    componentDidMount(){
        const links = this.props.links
        this.props.renderLinks(links)
        this.setState({
            currentUser: this.props.user_id,
            type: this.props.type
        })
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
    
    renderForm = (inp, func) =>{
        const formInputs = inp;
        if(this.state.toggle === true)
        return(<Form callBack={func} inputs={formInputs} hasHidden={true} hiddenVal={this.props.user_id}/>)
        else
        return
    }
    render(){
        return(
            <>
            {this.renderSkills()}
            </>
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
        increaseSkill: (skill_id, user_id) => dispatch(increaseSkill(skill_id, user_id)),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Skills)

