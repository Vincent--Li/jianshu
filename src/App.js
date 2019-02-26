import React, { Component, Fragment } from 'react';
import store from './store';
import { Provider } from 'react-redux';

import { GlobalStyle } from './statics/iconfont/iconfont';
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Fragment>
          <GlobalStyle/>
          <Header/>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
