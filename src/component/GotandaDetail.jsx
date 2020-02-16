import React from 'react';
import {RaisedButton, TextField} from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Checkbox from '@material-ui/core/Checkbox';
import {Panel, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';



class GotandaDetail extends React.Component {
    closeAction() {
        this.props.deleteGotandaRegistAction();
        this.props.gotandaDetailToggleAction();
        this.props.gotandaToggleAction();
    }
    render() {
        const radio = this.props.radioList.map(item => {
            if (item.checked) {
                return item.index;
            }
        }).filter(a => a);
        return( 
            <Grid container justify="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                <Panel><Panel.Body>
                    <Grid item xs={12}>
                        <div style={{marginTop: '3px', marginBottom: '-20px'}}>
                            <div style={{fontSize: 'x-large', marginBottom: '20px'}}>
                                {this.props.shopName}<br />
                            </div>
                            「{this.props.handleName}」さんからの評価
                        </div><br />
                        {
                            this.props.radioList.map(item => {
                                if (item.index <= radio) {
                                    return (
                                        <StarIcon htmlColor={"gold"} fontSize={"large"} />
                                    );
                                }
                                return (
                                    <StarBorderIcon fontSize={"large"} />
                                );
                            })
                        }
                    </Grid>
                    <Grid container>
                        <div style={{marginTop: '15px', marginBottom: '-15px'}}>
                            コメント
                        </div><br />
                        <Grid item xs={12}>
                            <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            value={this.props.comment}
                            multiLine
                            fullWidth
                            rows="4"
                            disabled
                            />
                        </Grid>
                    </Grid>
                    <RaisedButton label={'閉じる'}  onClick={() => this.closeAction()}/>
                </Panel.Body></Panel>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        );
    }
}
export default GotandaDetail;