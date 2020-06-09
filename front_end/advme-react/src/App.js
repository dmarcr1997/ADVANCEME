import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Skills from './components/Skills';
import Goals from './components/Goals';
import UserFormContainer from './containers/UserFormContainer.js';
import UserContainer from './containers/UserContainer';


class App extends Component{
  state={
    user: "",
    loggedIn: false,
    redirect: false,
    location: ""
  }
  userInfo = (loggedUser) =>{
    this.setState({
      user: loggedUser,
      loggedIn: true
    })
   
  }
  redirectToProfile = () => {
    if (this.state.loggedIn === true)
      return(
        <Redirect to='/profile' />
      )
    else
        return(
          <Redirect to='/login' />
      )
  }

  redirectSetup = (desLocation) =>{
    this.setState({
      redirect: true,
      location: desLocation
    })
  }

  redirectToLocation = () =>{
    if(this.state.redirect === true){
      this.setState({
        redirect: false,
      })
      return(
        <Redirect to={`/${this.state.location}`} />
      )
    }
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {this.redirectToProfile()}
          <Route path='/login' render={(props) => <UserFormContainer {...props} type={'login'} passBack={this.userInfo}/> } />
          <Route path='/signup' render={(props) => <UserFormContainer {...props} type={'signup'} passBack={this.userInfo}/> } />
          <Route path='/profile' render={(props) => <UserContainer {...props} user={this.state.user} redirect={this.redirectSetup}/>} />
          <Route path='/skills' render={(props) => <Skills {...props} user={this.state.user} train={false} redirect={this.redirectSetup}/>} />
          <Route path='/goals' render={(props) => <Goals {...props} user={this.state.user} redirect={this.redirectSetup}/>} />
          <Route path='/skills/train' render={(props) => <Skills {...props} user={this.state.user} train={true} redirect={this.redirectSetup}/>} /> 
          {this.redirectToLocation()}
        </Router>
      </header>
    </div>
  );
  }
}


export default App;
