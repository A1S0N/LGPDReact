import React from 'react';
import { Container } from '@material-ui/core';
import NavAppBar from '../components/NavAppBar';
import TableDetails from '../components/TableDetails';

class Details extends React.Component {
    render() {
        const row = this.props.location.state;
        return (
            <>
                <NavAppBar/>
                <Container style={{marginTop: 20}}>                    
                    <TableDetails data={row}/>
                </Container>
            </>
        );
    }
}

export default Details;