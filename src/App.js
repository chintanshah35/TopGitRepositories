import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import RepoList from './components/RepoList';
import RepoHome from './components/RepoHome';
import './App.css';

function App() {
  return (
    <BrowserRouter>
          <Route path="/" exact component={RepoList} />
          <Route path="/:name" exact component={RepoHome} />
    </BrowserRouter>
  );
}

export default App;
