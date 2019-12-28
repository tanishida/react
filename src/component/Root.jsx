import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '-webkit-fill-available'
      },
    },
  }));

const Root = () => {
    const classes = useStyles();
    return <div>
             <form className={classes.root} noValidate autoComplete="off"> 
               <ButtonGroup color="primary" aria-label="outlined primary button group">
                  <TextField id="outlined-basic" label="検索ワードを入力" variant="outlined" />
                  <Button>
                    <SearchIcon />
                  </Button>
                </ButtonGroup>
             </form>
           </div>;

}
export default Root;