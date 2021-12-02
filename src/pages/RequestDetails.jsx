import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import NavAppBar from '../components/NavAppBar';

export default class RequestDetails extends React.Component {

  render(){
    return (
      <>
        <NavAppBar/>
        <Container style={{marginTop: 20}}>
            <Paper style={{width: '100%', padding:  '5vh'}}>
              <h1>Solicitação LGPD</h1>
              <h3>Solicitante:</h3>{this.props.location.state.name}
              <h3>Telefone:</h3>{this.props.location.state.phone}
              <h3>E-mail:</h3>{this.props.location.state.email}
              <h3>Tipo:</h3>{this.props.location.state.type}
              <h3>Descrição:</h3>{this.props.location.state.message}
            </Paper>
        </Container>
      </>      
    );
  }
}
