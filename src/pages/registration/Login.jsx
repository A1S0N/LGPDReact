import React from 'react';
import axios from 'axios';
import { API_URL } from '../../core';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      sent: false,
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
        e.preventDefault();
        const data = new FormData()
        data.append('username', this.state.username);
        data.append('password', this.state.password);
        axios.post(`${API_URL}/api/token`, data)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ sent: true, err: false })
                    localStorage.setItem('token', res.data.access)
                    this.props.history.push('/home')
                }
            }).catch(err =>
                this.setState({ err: true })
            )
        return false;
    }


  render() {
      const st = this.state;
    return (
        <Container maxWidth="sm" style={{display: 'flex', justifyContent:'center', alignItems: 'center', height: '90vh'}}>
            <Paper style={{padding: '1rem'}}>
                <form style={{margin: '2rem'}} onSubmit={this.handleSubmit}>
                    <div style={{textAlign: 'center'}}>
                        <h2>LGPDReact</h2>
                    </div>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField onChange={(e) => this.setState({ username: e.target.value })} id="username" label="Username" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField onChange={(e) => this.setState({ password: e.target.value })} id="password" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>                    
                    <Grid container style={{ marginTop: '4rem', justifyContent: 'center' }}>
                        <Button type="submit" variant="contained" color="primary" style={{ textTransform: "none", width: '100%' }}>ENTRAR</Button>
                    </Grid>
                    {st.err ? <p style={{textAlign: 'center', color: "red"}}>Usuário ou senha inválidos</p> : null}
                </form>
            </Paper>
        </Container>
    );
  }
}

export default Login;