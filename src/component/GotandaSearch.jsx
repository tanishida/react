import React from 'react';
import Root from './RootSearch';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import api from '../api';
import IconButton from '@material-ui/core/IconButton';
import {Dialog, RaisedButton, TextField} from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class GotandaSearch extends React.Component {
  componentDidMount() {
    api.fetchGotandaRegistAction().then(items => {
      items.forEach(item => {
        this.props.inputSearchResultAction(item.handleName, item.shopName, item.date, item.radio, item.comment);
      });
    });
    this.intervalId = setInterval(() => {
      api.fetchGotandaRegistAction().then(items => {
        items.forEach(item => {
          this.props.inputSearchResultAction(item.handleName, item.shopName, item.date, item.radio, item.comment);
        });
      });  
    }, 50000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
    render() {
      const list = this.props.gotandaList !== undefined ? this.props.gotandaList: [];
      return (
          <div className={this.props.activeKey !== '1' ? 'hidden' : ''}>
            <Root />
            <Grid container justify="center">
                {
                  list.map(item => {
                    return  <Grid item xs={4}>
                              <Card style={{marginTop: '10px', marginLeft: '10px', backgroundColor: 'whitesmoke'}}>
                                <div style={{marginTop: '3px', marginLeft: '10px', marginBottom: '-20px'}}>
                                  「{item.handleName}」さんからの情報
                                </div><br />
                                <IconButton title={`${item.shopName}を表示`} onClick={() => this.props.dialogAction()}>
                                  {item.shopName}
                                </IconButton>
                              </Card>
                              <Dialog open={this.props.dialogOpen} onClose={() => this.props.dialogAction()}>
                                <br /><RaisedButton label={'閉じる'} onClick={() => this.props.dialogAction()} />
                              </Dialog>
                            </Grid>
                  })
                }
            </Grid>
            <div>
              検索結果　 {list.length} 　件
            </div>
          </div>
      );
    }
  }
  
  export default GotandaSearch;