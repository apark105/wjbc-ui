import React from 'react';
import { Route } from 'react-router-dom';
import '../stylesheets/main.scss';
import Home from './home';
import Events from './events';
import About from './about';
import Navbar from './navbar';

function App() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />      
                <Route path='/events' component={Events} />        
                {/* <Route path='/ministries' component={Ministries} />        
                <Route path='/resources' component={Resources} />        
                <Route path='/give' component={Give} />         */}
            </div>
        </div>
    )
}

export default App; 