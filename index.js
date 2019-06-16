
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/component/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './src/store/configureStore';

injectTapEventPlugin();
const store = configureStore();
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
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>
  </MuiThemeProvider>, document.getElementById("root"))
