import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'model', label: 'Campo', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 },
];

export default class TableDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
    };
}

  render(){
    return (
      <Paper style={{width: '100%'}}>
      <h1 style={{padding: '2vh'}}>{this.props.data.model}</h1>
        <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, textAlign: 'center'}}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.fields.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                     <TableCell style={{textAlign: 'center'}}>
                          <span style={{color: row.status !== 'OK' ? 'red' : 'black'}}>{row.field}</span>
                      </TableCell>
                      <TableCell style={{textAlign: 'center'}}>
                          <span style={{color: row.status !== 'OK' ? 'red' : 'green'}}>{row.status}</span>
                      </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>     
      </Paper>
    );
  }
}
