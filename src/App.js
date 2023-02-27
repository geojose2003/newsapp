import './App.css';
import React,{Component} from 'react';

import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
function App() {
  return (
    <>        
        <Navbar/>
        <Router>
          <Switch>
           <Route path="/general"><News  country="us" category=""/></Route>
           <Route path="/business"><News  country="us" category="business"/></Route>
           <Route path="/entertainment"><News  country="us" category="entertainment"/></Route>
           <Route path="/general"><News  country="us" category="general"/></Route>
           <Route path="/health"><News  country="us" category="health"/></Route>
           <Route path="/science"><News  country="us" category="science"/></Route>
           <Route path="/sports"><News  country="us" category="sports"/></Route>
          

        </Switch></Router>
        </>
     );
   }
   export default App;

