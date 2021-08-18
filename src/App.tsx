import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SpellRyt } from './pages/SpellRyt';
import 'react-responsive-modal/styles.css';

function App() {
  return (
    <div className="App">
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={SpellRyt}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
