import React from 'react';
import { Container } from '@material-ui/core';
import NavAppBar from '../components/NavAppBar';
import TableApp from '../components/TableApp';
import axios from 'axios';
import { API_URL } from '../core';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            models: [],
        };
    }

    componentDidMount() {
        this.getData(); 
    }

    getData(){
        axios.get(API_URL + '/api/models?format=json')
        .then(res => {
            this.setState({ models: res.data });
        })
    }
    render() {
        return (
            <>
            <NavAppBar/>
            <Container style={{marginTop: 20}}>
                <TableApp data={this.state.models}/>
            </Container>
            </>
        );
    }
}

export default Home;