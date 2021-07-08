import {HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import './style/App.scss';
import { HomePage } from './views/HomePage/HomePage';
import { PortfolioPage } from './views/PortfolioPage/';
import { ContactMe } from './cmps/ContactMe'

function App() {
  return (
    <div className="App">
      <Router>
      <AppHeader />
        <Switch>
          {/* <HomePage /> */}
          <Route component={PortfolioPage} path="/portfolio" />
          <Route component={HomePage} path="/" />
        </Switch>
        <ContactMe />

      </Router>
    </div>
  );
}

export default App;
