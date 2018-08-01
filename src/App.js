import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import C from './C';
import ProductWrapper from './ProductWrapper'


class App extends Component {
    render() {
        return(
       <Router>
           <div>
            <Route exact path='/' component={C} />
            <Route exact path='/event' component={ProductWrapper} />
        </div>
        </Router>  


    );
}
}

export default App;