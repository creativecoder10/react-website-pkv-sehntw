import React from 'react';
import { withStyles } from 'material-ui/styles';

import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact'
import Header from "./Components/Header";
import Study from './Pages/Study';
import { spring, AnimatedSwitch } from 'react-router-transition';
import { Redirect, Link, Route, Switch } from "react-router-dom";

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
     transform: `translateX(${styles.offset}%)`
  };
}

function slide(val) {
  return spring(val, {
    stiffness: 125,
    damping: 16,
  });
}


const topBarTransitions = {
  atEnter: {
    opacity: slide(0),
    offset: -100,
  },
  atLeave: {
    opacity: slide(0),
    offset: slide(150),
  },
  atActive: {
    opacity: slide(1),
    offset: (0),
  },
};




class App extends React.Component{


  render(){
    return (<BrowserRouter><div className="wrapper"><div className="container"> 
    <Header />   
          
   <AnimatedSwitch
    {...topBarTransitions}
    mapStyles={mapStyles}
    className="switch-wrapper"
  >
     <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />  
          <Route path="/contact" component={Contact} />
          <Route path="/study" component={Study} />
          </AnimatedSwitch>
          </div>
          </div>
                </BrowserRouter>
        );
  }
}

export default App;