import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Comments from './pages/Comments';
import Tasks from './pages/Tasks';

import UserUpdate from './pages/UserUpdate';

function App() {
  return (
    <Router>
    <div className="App">  

     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Accueil</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Posts" className="nav-link">Posts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Users" className="nav-link">Utilisateurs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Comments" className="nav-link">Commentaires</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Tasks" className="nav-link">Tâches</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
      <div className="container">
        <switch>
          <Route path="/users/:bachi" component={UserUpdate} />
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/users" component={Users} />
          <Route path="/comments" component={Comments} />
          <Route path="/tasks" component={Tasks} />
        </switch>
      </div>
    </div>
    </Router>
  );
}export default App;