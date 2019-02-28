import React, { Component, Fragment } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';

import { GlobalStyle } from './statics/iconfont/iconfont';
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Fragment>
          <GlobalStyle/>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path='/' exact render={()=> <div>home</div>}></Route>
              <Route path='/detail' exact render={()=> <div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
