import React, { Component, Fragment } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

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
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
