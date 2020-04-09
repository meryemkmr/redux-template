import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Import Redux
import {createStore} from '.redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'

// router
import {BrowserRouter,Switch, Route} from 'react-router-dom';


let store = createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider stote = {store}>
    <BrowserRouter>
      {/* <BaseLayout> */}
        <Switch>
          <Route exact path ="/" component = {App}/>
        </Switch>
      {/* </BaseLayout> */}
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

