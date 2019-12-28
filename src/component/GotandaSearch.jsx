import React from 'react';
import Root from './Root';


class GotandaSearch extends React.Component {
    constructor() {
      super()
      this.state = {
        style: {
          marginTop: 10,
          width: '-webkit-fill-available',
          font: '-webkit-mini-control'
        }
      }
    }
    render() {
        return (
          <div className={this.props.activeKey !== '1' ? 'hidden' : ''}>
            <Root />
          </div>
      );
    }
  }
  
  export default GotandaSearch;