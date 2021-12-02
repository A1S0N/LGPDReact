import React from 'react';
import { Container } from '@material-ui/core';
import NavAppBar from '../components/NavAppBar';
import TableRequests from '../components/TableRequests';
import axios from 'axios';
import { API_URL } from '../core';

class Requests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: [],
        };
    }

    componentDidMount() {
        this.getData(); 
    }

    getData(){
        axios.get(API_URL + '/api/requests?format=json')
        .then(res => {
            this.setState({ requests: res.data });
        })
    }
    render() {
        return (
            <>
            <NavAppBar/>
            <Container style={{marginTop: 20}}>
                <TableRequests data={this.state.requests}/>
            </Container>
            </>
        );
    }
}

export default Requests;