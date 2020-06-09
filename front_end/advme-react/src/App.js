import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Skills from './components/Skills';
import Goals from './components/Goals';
import UserFormContainer from './containers/UserFormContainer.js';
import UserContainer from './containers/UserContainer';
import NavBar from './components/NavBar';
import Logout from './components/Logout';
class App extends Component{
  state={
    user: {
      username:"",
      skills: [],
      goals: []
    },
    loggedIn: false,
    links: []
  }
  userInfo = (loggedUser, skills, goals) =>{
    this.setState({
      ...this.state,
      user: {
        username: loggedUser,
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
        <Router>
          {/* {this.redirectToLocation()} */}
          {this.renderNavBar()}
          {this.redirectToProfile()}
          <Route path='/login' render={(props) => <UserFormContainer {...props} type={'login'} passBack={this.userInfo}  renderLinks={this.addLinks}/> } />
          <Route path='/signup' render={(props) => <UserFormContainer {...props} type={'signup'} passBack={this.userInfo}  renderLinks={this.addLinks}/> } />
          <Route path='/home' render={(props) => <UserContainer {...props} user={this.state.user} renderLinks={this.addLinks}/>} />
          <Route path='/skills' render={(props) => <Skills {...props} renderLinks={this.addLinks}/>} />
          <Route path='/goals' render={(props) => <Goals {...props} goals={this.state.goals} renderLinks={this.addLinks}/>} />
          <Route path='/logout' render={(props) => <Logout {...props} userLogout={this.handleLogout}/> } />
        </Router>
      </header>
    </div>
  );
  }
}


export default App;
