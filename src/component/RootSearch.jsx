import React from 'react';
import {Glyphicon, InputGroup, FormControl, Button} from 'react-bootstrap';

const RootSearch = () => {
    return( 
            <div style={{marginTop: '10px', whiteSpace: 'nowrap', marginBottom: '10px', width: '240px'}}>
                <InputGroup>
                  <FormControl type="text" />
                    <Button title="検索">
                      <Glyphicon glyph="search" />
                    </Button>
                </InputGroup>
            </div>
          );
}
export default RootSearch;