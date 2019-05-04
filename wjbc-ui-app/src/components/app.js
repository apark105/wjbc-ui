import React, { Component } from 'react';
import Calendar from './calendar';
// import { Route } from 'react-router-dom';
// import '../stylesheets/main.scss';
// import Home from './home';
// import Events from './events';
// import About from './about';
// import Navbar from './navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        demo
        <Calendar />
      </div>

    );
  }
}

export default App;
