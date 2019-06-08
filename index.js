import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/component/app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import reducer from './src/reducer/reducer';

// const store = createStore(reducer);

// class App extends React.Component{
//   render(){
//     return(
//       <div>Hello Worlds</div>
//     );
//   }
// }

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>, document.getElementById("root"))