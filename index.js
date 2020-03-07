
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/component/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './src/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>, document.getElementById("root"))
