import React from 'react';
import { Container, Fab } from '@material-ui/core';
import NavAppBar from '../components/NavAppBar';
import TableApp from '../components/TableApp';
import AddIcon from '@material-ui/icons/Add';

class Home extends React.Component {
    render() {
        return (
            <>
            <NavAppBar />
            <Container style={{marginTop: 20}}>
                <TableApp />
            </Container>
            <Fab color="secondary" aria-label="add" style={{position: 'absolute', bottom: 40, right: 40}} >
                <AddIcon />
            </Fab>
            </>
        );
    }
}

export default Home;