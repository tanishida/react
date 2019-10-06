import React from 'react';

class RenderList extends React.Component {
  constructor() {
    super()
    this.styles = {
      marginLeft: 0
    }
  }
  render() {
    const items = this.props.inputTextReducer.list;
    return (
      <div>
        <ul>
            {
              items.map(item => {
                return <li>{item}</li>
              })
            }
        </ul>
      </div>
    );
  }
}

export default RenderList;