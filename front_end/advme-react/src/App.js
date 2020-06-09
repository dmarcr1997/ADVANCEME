import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Skills from './components/Skills';
import Goals from './components/Goals';
import UserFormContainer from './containers/UserFormContainer.js';
import UserContainer from './containers/UserContainer';
import NavBar from './components/NavBar';

class App extends Component{
  state={
    user: "",
    loggedIn: false,
    redirect: false,
    location: "",
    links: []
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

  // redirectSetup = (desLocation) =>{
  //   this.setState({
  //     redirect: true,
  //     location: desLocation
  //   })
  // }

  // redirectToLocation = () =>{
  //   if(this.state.redirect === true){
  //     this.setState({
  //       redirect: false
  //     })
  //     console.log(this.state)
  //     return(
  //       <Redirect to={`/${this.state.location}`} />
  //     )
  //   }
  //   else{
  //     return
  //   }
  // }

  renderNavBar = () => {
    return(
        <div>
            <NavBar links = {this.state.links}/>
        </div>
    )
  } 
  
  addLinks = (navLinks) => {
    this.setState({
      links: navLinks
    })
    return console.log('New Links')
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/* {this.redirectToLocation()} */}
          {this.renderNavBar()}
          {this.redirectToProfile()}
          <Route path='/login' render={(props) => <UserFormContainer {...props} type={'login'} passBack={this.userInfo}/> } />
          <Route path='/signup' render={(props) => <UserFormContainer {...props} type={'signup'} passBack={this.userInfo}/> } />
          <Route path='/profile' render={(props) => <UserContainer {...props} user={this.state.user} renderLinks={this.addLinks}/>} />
          <Route path='/skills' render={(props) => <Skills {...props} user={this.state.user} train={false} renderLinks={this.addLinks}/>} />
          <Route path='/goals' render={(props) => <Goals {...props} user={this.state.user} renderLinks={this.addLinks}/>} />
          <Route path='/train' render={(props) => <Skills {...props} user={this.state.user} train={true} renderLinks={this.addLinks}/>} /> 
     
        </Router>
      </header>
    </div>
  );
  }
}


export default App;
