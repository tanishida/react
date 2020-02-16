import React from 'react';
import Root from './RootSearch';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import api from '../api';
import IconButton from '@material-ui/core/IconButton';

class GotandaSearch extends React.Component {
  componentDidMount() {
    api.fetchGotandaRegistAction().then(items => {
      items.forEach(item => {
        this.props.inputSearchResultAction(item.handleName, item.shopName, item.date, item.radio, item.comment, item.id);
      });
    });
    this.intervalId = setInterval(() => {
      api.fetchGotandaRegistAction().then(items => {
        items.forEach(item => {
          this.props.inputSearchResultAction(item.handleName, item.shopName, item.date, item.radio, item.comment, item.id);
        });
      });
    }, 50000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  openDetail(handleName, shopName, date, radio, comment) {
    this.props.gotandaToggleAction();
    this.props.inputDetailInfoAction(handleName, shopName, date, radio, comment);
    this.props.gotandaDetailToggleAction();
  }

    render() {
      const list = this.props.gotandaList !== undefined ? this.props.gotandaList: [];
      return (
          <div className={this.props.activeKey !== '1' ? 'hidden' : ''}>
            <Grid container justify="center">
                {
                  list.map((item, index) => {
                    return  (
                      <Grid item xs={4}>
                        <Card style={{marginTop: '10px', marginLeft: '10px', backgroundColor: 'whitesmoke'}}>
                          <div style={{marginTop: '3px', marginLeft: '10px', marginBottom: '-20px'}}>
                            「{item.handleName}」さんからの情報
                          </div><br />
                          <IconButton title={`${item.shopName}を表示`} onClick={() => this.openDetail(item.handleName, item.shopName, item.date, item.radio, item.comment)}>
                            {item.shopName}
                          </IconButton>
                        </Card>
                      </Grid>
                    );
                  })
                }
            </Grid>
            <div>
              {list.length}　件表示
            </div>
          </div>
      );
    }
  }
  
  export default GotandaSearch;