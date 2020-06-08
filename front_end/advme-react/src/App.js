import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import formContainer from './containers/formContainer.js';
import userContainer from './containers/userContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path='/login' render={(props) => <formContainer {...props} type={'login'}/> } />
          <Route path='/signup' render={(props) => <formContainer {...props} type={'signup'}/> } />
        </Router>
      </header>
    </div>
  );
}

export default App;
