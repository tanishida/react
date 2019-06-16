import * as CounterActions from '../actions/index';
import React from 'react';
import NavBar from './NavBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Appコンポーネントにstateを流し込む
const mapStateToProps = state => {
    return {
      reducer: state.reducer,
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
        <div>
            <NavBar {...this.props} />
        </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);