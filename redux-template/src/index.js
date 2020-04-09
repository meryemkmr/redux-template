import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Container from './components/Container'
// Import Redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'
import BaseLayout from './components/layout/BaseLayout'

// router
import {BrowserRouter,Switch, Route} from 'react-router-dom';


let store = createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
     <BaseLayout>
        <Switch>
          <Route exact path ="/" component = {Container}/>
        </Switch>
      </BaseLayout> 
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

