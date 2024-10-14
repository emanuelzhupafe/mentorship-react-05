import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.css';
import Entries from './components/Entries';
import Overview from './components/Overview';
import type {Entry} from './components/types';

function App() {
  const [entries, setEntries] = useState<Entry[]>([]);

  const handleEntryChange = (newEntries: Entry[]) => {
    setEntries(newEntries);
  };

  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-dark container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active-menu"
                exact
                to="/"
              >
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active-menu"
                exact
                to="/entries"
              >
                Entries
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Route
            path="/"
            exact
            render={() => <Overview entriesData={entries} />}
          />
          <Route
            path="/entries"
            exact
            render={() => (
              <Entries
                entriesData={entries}
                onEntryChange={handleEntryChange}
              />
            )}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
