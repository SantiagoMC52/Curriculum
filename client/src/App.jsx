import React from 'react';
import {
  Switch, Route, BrowserRouter
} from 'react-router-dom';
import Dashboard from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import MoreInfo from './components/MoreInfo';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/more" component={MoreInfo} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
