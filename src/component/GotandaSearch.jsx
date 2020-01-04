import React from 'react';
import Root from './RootSearch';

class GotandaSearch extends React.Component {
    render() {
        return (
          <div className={this.props.activeKey !== '1' ? 'hidden' : ''}>
            <Root />
            <div>
              検索結果　 {} 　件
            </div>
          </div>
      );
    }
  }
  
  export default GotandaSearch;