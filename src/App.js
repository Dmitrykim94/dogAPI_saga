import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from '../src/components/main';
import History from '../src/components/history';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar color="light" light expand="md">
            <div>
              <Nav className="ml-3" navbar >
                <NavItem style={{ margin: '10px' }}>
                  <Link to="/">Главная</Link>
                </NavItem>
                <NavItem style={{ margin: '10px' }}>
                  <Link to="/history">История</Link>
                </NavItem>
              </Nav>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/history" component={History} />
              </Switch>
            </div>
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default App;
