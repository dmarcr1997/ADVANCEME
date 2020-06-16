import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import SkillsGoalsContainer from './containers/SkillsGoalsContainer';
import UserFormContainer from './containers/UserFormContainer.js';
import UserContainer from './containers/UserContainer';
import NavBar from './components/NavBar';
import Logout from './components/Logout';
import Animation from './components/Animation';

class App extends Component{
  state={
    user: {
      username:"",
      userLevel: 0,
      skills: [],
      goals: []
    },
    loggedIn: false,
    links: [],
    type: 1
  }
  userInfo = (loggedIn, loggedUser, level, skills, goals) =>{
    this.setState({
      ...this.state,
      user: {
        username: loggedUser,
        userLevel: level,
        skills,
        goals
      },
      loggedIn: loggedIn
    })
   
  }
  redirectToProfile = () => {
    if (this.state.loggedIn === true)
      return(
        <Redirect to='/home' />
      )
    else
        return(
          <Redirect to='/login' />
      )
  }

  renderNavBar = () => {
    return(
        <div>
            <NavBar links = {this.state.links}/>
        </div>
    )
  } 
  
  addLinks = (navLinks) => {
    this.setState({
      ...this.state,
      links: navLinks
    })
    return console.log('New Links')
  }

  handleLogout = () => {
    fetch('http://localhost:3000/logout')
    .then(resp => resp.json)
    .then(data => {
      this.setState({
        ...this.state,
        user: {
          username:"",
          skills: [],
          goals: []
        },
        loggedIn: false,
        links: []
      })
    })
   
  }
 
  componentDidMount(){
    fetch('http://localhost:3000/')
    window.addEventListener('keypress', this.handleKey)
  }

  handleKey = (event) => {
    console.log(event.key)
    if(event.key === "w"){
      this.setState({
        ...this.state,
        type: 4
      })
    }
    else if(event.key === "s"){
      this.setState({
        ...this.state,
        type: 1
      })
    }
    else if(event.key === "a"){
      this.setState({
        ...this.state,
        type: 3
      })
    }
    else if(event.key === "d"){
      this.setState({
        ...this.state,
        type: 2
      })
      debugger
    }
  }

  renderAnimation = () => {
    return(
    <Animation type={this.state.type}/>
    )
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>ADVANCEME</h1>
      <div>{this.renderAnimation()}</div>
      <div className="ContentBox1">
      <div className="ContentBox2">
        <Router>
          {this.renderNavBar()}
          {this.redirectToProfile()}
          <Route path='/login' exact render={(props) => <UserFormContainer {...props} type={'login'} passBack={this.userInfo}  renderLinks={this.addLinks}/> } />
          <Route path='/signup' render={(props) => <UserFormContainer {...props} type={'signup'} passBack={this.userInfo}  renderLinks={this.addLinks}/> } />
          <Route path='/home' render={(props) => <UserContainer {...props} renderLinks={this.addLinks}/>} />
          <Route path='/skills' render={(props) => <SkillsGoalsContainer {...props} links={['home', 'goals', 'logout']} type='skills' renderLinks={this.addLinks}/>} />
          <Route path='/goals' render={(props) => <SkillsGoalsContainer {...props} links={['home', 'skills', 'logout']} type='goals' renderLinks={this.addLinks}/>} />
          <Route path='/logout' render={(props) => <Logout {...props} userLogout={this.handleLogout}/> } />
        </Router>
        </div>
        </div>
      </header>
    </div>
  );
  }
}


export default App;
