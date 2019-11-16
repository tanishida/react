import React from 'react';

class RenderList extends React.Component {
  constructor() {
    super()
    this.styles = {
      marginTop: 10
    }
  }
  render() {
    let items = this.props.inputTextReducer.message !== undefined ? this.props.inputTextReducer.message : [];
    console.log('描画直前');
    console.log(items);
    items.forEach(item => {
      console.log('name:' + item.name);
      console.log('value:' + item.value);
    });
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