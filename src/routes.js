import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory}  from 'history';

import Home from './pages/Home';
import ImageList from './pages/ImageList_page';
import EstacionesList from './pages/EstacionesList_page';
import EspeciesList from './pages/EspeciesLsit_page';
import EspecieImageList from './pages/EspecieImageList_page';

import {
  HOME_PAGE,
  FOTOS_CARGADAS,
  ESTACIONES,
  ESPECIES,
  EXPECIE_IMAGENES,
  ESTACION_CREATE
} from './utils/NamedRoutes';
import EstacionForm from './pages/EstacionForm_page';

const history = createBrowserHistory();

 const App = () => {
   return(
     <Router history = {history}>
       <div className="col-md-12">
         <Switch>
           <Route exact path={HOME_PAGE} render={() => <Home />} />
           <Route exact path={FOTOS_CARGADAS} render={() => <ImageList />} />
           <Route exact path={ESTACIONES} render={() => <EstacionesList />} />
           <Route exact path={ESPECIES} render={() => <EspeciesList />} />
           <Route exact path={EXPECIE_IMAGENES} render={() => <EspecieImageList />} />
           <Route exact path={ESTACION_CREATE} render={ () => <EstacionForm />} />
         </Switch>
       </div>
     </Router>

   )
 }
export default App;
