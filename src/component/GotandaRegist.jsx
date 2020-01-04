import React from 'react';
import {TextField, ActionInput, Snackbar} from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import Grid from '@material-ui/core/Grid';


class GotandaRegist extends React.Component {
    constructor() {
      super()
      this.state = {
        style: {
        }
      }
    }
    render() {
        return (
          <div className={this.props.activeKey !== '2' ? 'hidden' : ''}>
            <Grid container justify="center">
            <Grid item xs={4}>
              <TextField
                label="input"
                value={''}
                onChange={e => this.onChangeText(e)}
                hintText="入力"
                floatingLabelText="お店の名前を入力"
              />
            </Grid>
            <Grid item xs={4}>
              <DatePicker 
                hintText="日付を入力"
                style={{marginTop: '24px'}}
                mode="landscape" />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="input"
                value={''}
                onChange={e => this.onChangeText(e)}
                hintText="入力"
                floatingLabelText="URL"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiLine
                fullWidth
                hintText="入力"
                floatingLabelText="口コミ、評価、コメント"
                rows="4"
              />
            </Grid>
          </Grid>
         </div>
      );
    }
  }
  
  export default GotandaRegist;