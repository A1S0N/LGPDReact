import React from 'react';
import { Container } from '@material-ui/core';
import NavAppBar from '../components/NavAppBar';
import TableApp from '../components/TableApp';
import DialogRule from '../components/DialogRule';
import axios from 'axios';
import { API_URL } from '../core';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rules: [],
        };
    }

    componentDidMount() {
        this.getData(); 
    }

    getData(){
        axios.get(API_URL + '/api/rules?format=json')
        .then(res => {
            this.setState({ rules: res.data });
        })
    }
    render() {
        return (
            <>
            <NavAppBar />
            <Container style={{marginTop: 20}}>
                <TableApp data={this.state.rules}/>
            </Container>
            <DialogRule getData={this.getData.bind(this)}/>
            </>
        );
    }
}

export default Home;