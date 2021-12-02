import React from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';
import { API_URL } from '../core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

class newLGPDRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
            type: 'CONFIRMAR TRATAMENTO',
            sent: false
        };
    }

    handleSubmit(e) {
      e.preventDefault();
      axios.post(`${API_URL}/api/requests/new`, {name: this.state.name, phone: this.state.phone,
      email: this.state.email, message: this.state.message, type: this.state.type})
          .then(res => {
              if (res.status === 201) {
                  this.setState({ err: false, open: false, name: '',
                phone: '',
                email: '',
                message: '',
                type: 'CONFIRMAR TRATAMENTO',
                sent: true});
              }
          }).catch(err =>
              this.setState({ err: true })
          )
      return false;
    };

    changeType(e){
        this.setState({type: e.target.value});
    }

    render() {
        return (
            <>
            <Container style={{marginTop: 20}}>
                <Paper style={{width: '100%'}}>
                    <div style={{padding: '5vh'}}>
                    {!this.state.sent ? 
                    <>
                        <h1>Solicitação LGPD</h1>
                        <form id="LGPDForm" onSubmit={(e) => this.handleSubmit(e)}>
                          <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            value={this.state.name}
                            label="Nome completo"
                            type="text"
                            fullWidth
                            onChange={(e) => this.setState({ name: e.target.value })}
                          />
                          <TextField
                            required
                            margin="dense"
                            id="severity"
                            label="Telefone"
                            type="number"
                            fullWidth
                            onChange={(e) => this.setState({ phone: e.target.value })}
                          />
                          <TextField
                            required
                            margin="dense"
                            id="email"
                            label="E-mail"
                            type="email"
                            fullWidth
                            onChange={(e) => this.setState({ email: e.target.value })}
                          />
                          <TextField
                            required
                            margin="dense"
                            id="message"
                            label="Descrição"
                            type="text"
                            multiline
                            rows={4}
                            fullWidth
                            onChange={(e) => this.setState({ message: e.target.value })}
                          />
                          <TextField
                            required
                            margin="dense"
                            id="type"
                            select
                            fullWidth
                            label="Tipo"
                            value={this.state.type}
                            onChange={(e) => this.changeType(e)}
                            helperText="Por favor selecione o tipo da solicitação"
                          >                      
                            <MenuItem key="Confirmar tratamento" value="CONFIRMAR TRATAMENTO">
                              Confirmar tratamento
                            </MenuItem>
                            <MenuItem key="Acessar dados pessoais" value="ACESSAR DADOS PESSOAIS'">
                              Acessar dados pessoais
                            </MenuItem>
                            <MenuItem key="Corrigir dados" value="CORRIGIR DADOS">
                              Corrigir dados
                            </MenuItem>
                            <MenuItem key="Solicitar anonimização" value="SOLICITAR ANONIMIZAÇÃO">
                              Solicitar anonimização
                            </MenuItem>
                            <MenuItem key="Solicitar portabilidade" value="SOLICITAR PORTABILIDADE">
                              Solicitar portabilidade
                            </MenuItem>
                            <MenuItem key="Solicitar eliminação de dados" value="SOLICITAR ELIMINAÇÃO DE DADOS">
                              Confirmar tratamento
                            </MenuItem>
                            <MenuItem key="Obter informações sobre o compartilhamento" value="OBTER INFORMAÇÕES SOBRE O COMPARTILHAMENTO">
                              Obter informações sobre o compartilhamento
                            </MenuItem>
                            <MenuItem key="Revogar consentimento" value="REVOGAR CONSENTIMENTO">
                              Revogar consentimento
                            </MenuItem>
                        </TextField>
                        <Button variant="contained" color="primary" type="submit" form="LGPDForm" style={{marginTop: '5vh'}}>
                            Enviar Solicitação
                        </Button>                
                          </form>
                      </>
                    :
                        <div>
                            <h3 style={{color: 'green'}}>
                                Solicitação enviada com sucesso!
                            </h3>
                        </div>
                    }
                    </div>
                </Paper>
            </Container>
            </>
        );
    }
}

export default newLGPDRequest;