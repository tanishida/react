
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/component/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './src/store/configureStore';
import MediaQuery from "react-responsive";

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <MediaQuery query="(min-width: 767px)">
        <App />
      </MediaQuery>
    </Provider>
  </MuiThemeProvider>, document.getElementById("root"))
