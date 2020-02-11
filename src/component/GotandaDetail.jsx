import React from 'react';
import {RaisedButton, TextField} from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

class GotandaDetail extends React.Component {
    render() {
        const radio = this.props.radioList;
        return( 
            <div>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <TextField
                            label="input"
                            value={this.props.handleName}
                            hintText="入力"
                            floatingLabelText="ハンドルネームを入力"
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        label="input"
                        value={this.props.shopName}
                        hintText="入力"
                        floatingLabelText="お店の名前を入力"
                        disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <DatePicker 
                        hintText="日付を入力"
                        container="dialog"
                        style={{marginTop: '24px'}}
                        value={this.props.date}
                        disabled
                        mode="landscape" />
                    </Grid>
                    <Grid item xs={4}>
                    <FormControl component="fieldset" style={{marginLeft: '35px'}}>
                        <FormLabel component="legend" style={{fontSize: '20px'}}>評価（おすすめ度）</FormLabel>
                        <RadioGroup aria-label="position" name="position" style={{width: 'max-content'}} row>
                            {
                            radio.map(item => {
                                return (
                                <FormControlLabel
                                    value={item.index}
                                    style={{marginLeft: item.index !== '1' ? '-20px' : ''}}
                                    control={<Radio color="primary" />}
                                    label={item.value}
                                    labelPlacement="top"
                                    checked={item.checked}
                                    disabled
                                />
                                );
                            })
                            }
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        value={this.props.comment}
                        multiLine
                        fullWidth
                        hintText="入力"
                        floatingLabelText="口コミ、評価、コメント"
                        rows="4"
                        disabled
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default GotandaDetail;