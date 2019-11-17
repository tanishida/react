import React from 'react';

class RenderList extends React.Component {
  constructor() {
    super()
    this.styles = {
      marginTop: 10
    }
  }
  render() {
    const items = this.props.inputTextReducer.message !== undefined ? this.props.inputTextReducer.message : [];
    return (
      <div style={this.styles}>
        {
          items.map(item => {
            return <div>{item.name}：{item.value}</div>
          })
        }
      </div>
    );
  }
}

export default RenderList;