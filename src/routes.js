import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory}  from 'history';

import Home from './pages/Home';

import {
  Home_page
} from './utils/NamedRoutes';

const history = createBrowserHistory();

 const App = () => {
   return(
     <Router history = {history}>
       <div className="col-md-12">
         <Switch>
           <Route exact path={Home_page} render={() => <Home />} />
         </Switch>
       </div>
     </Router>

   )
 }
export default App;
