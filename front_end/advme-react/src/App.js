import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import SkillsGoalsContainer from './containers/SkillsGoalsContainer';
import UserFormContainer from './containers/UserFormContainer.js';
import UserContainer from './containers/UserContainer';
import NavBar from './components/NavBar';
import Logout from './components/Logout';
class App extends Component{
  state={
    user: {
      username:"",
      userLevel: 0,
      skills: [],
      goals: []
    },
    loggedIn: false,
    links: []
  }
  userInfo = (loggedUser, level, skills, goals) =>{
    this.setState({
      ...this.state,
      user: {
        username: loggedUser,
        userLevel: level,
        skills,
        goals
      },
      loggedIn: true
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
    this.setState({
      user: {
        username:"",
        skills: [],
        goals: []
      },
      loggedIn: false,
      links: []
    })
  }
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>ADVANCEME</h1>
      <div className="ContentBox1">
      <div className="ContentBox2">
        <Router>
          {/* {this.redirectToLocation()} */}
          {this.renderNavBar()}
          {this.redirectToProfile()}
          <Route path='/login' render={(props) => <UserFormContainer {...props} type={'login'} passBack={this.userInfo}  renderLinks={this.addLinks}/> } />
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
