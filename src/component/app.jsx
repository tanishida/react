import * as CounterActions from '../actions/index';
import React from 'react';
import NavBar from './NavBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';

// Appコンポーネントにstateを流し込む
const mapStateToProps = state => {
    return {
      reducer: state.reducer,
      modalReducer: state.modalReducer,
      inputTextReducer: state.inputTextReducer,
      calculatorLogicReducer: state.calculatorLogicReducer,
      navBarReducer: state.navBarReducer,
      gotandaRegistReducer: state.gotandaRegistReducer,
      gotandaSearchReducer: state.gotandaSearchReducer
    };
}
// actionをマッピングする
const mapDispatchToProps = dispatch => {
  const actionList = CounterActions.default;
    return {
      actions: bindActionCreators(actionList, dispatch)
    };
}

class App extends React.Component {
  render() {
    return (        
      <Grid container justify="center">
        <Grid item xs={12}>
          <div style={{overflowX: 'hidden'}}>
            <NavBar {...this.props} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);