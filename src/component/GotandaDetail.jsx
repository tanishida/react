import React from 'react';
import {Glyphicon, InputGroup, FormControl, Button} from 'react-bootstrap';

class GotandaDetail extends React.Component {
    render() {
        return( 
                <div>
                    <div>{this.props.handleName}</div>
                </div>
        );
    }
}
export default GotandaDetail;