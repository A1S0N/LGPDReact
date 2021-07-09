import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import axios from 'axios';
import { API_URL, axiosconfig } from "../core";

export default class DialogRule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: '',
            severity: 0
        };
    }
    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
      axios.post(`${API_URL}/api/newRule`, '{"title": this.state.title, "severity": 0}', axiosconfig)
          .then(res => {
              if (res.status === 200) {
                  this.setState({ err: false, open: false, title: '', severity: 0})
              }
          }).catch(err =>
              this.setState({ err: true })
          )
      return false;
    };

    render(){
        return (
            <div>
              <Fab color="secondary" aria-label="add" onClick={this.handleClickOpen} style={{position: 'absolute', bottom: 40, right: 40}} >
                <AddIcon />
              </Fab>
              <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Nova Regra</DialogTitle>
                <DialogContent>
                  <DialogContentText style={{width: '60vw'}}></DialogContentText>
                  <form id="ruleForm" onSubmit={this.handleSubmit}>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="title"
                    label="Título"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="severity"
                    label="Gravidade"
                    type="number"
                    fullWidth
                  />
                  </form>
                </DialogContent>
                <DialogActions style={{marginTop: 50}}>
                  <Button onClick={this.handleClose} color="primary">
                    Cancelar
                  </Button>
                  <Button variant="contained" color="primary" type="submit" form="ruleForm">
                    Salvar
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }
}
