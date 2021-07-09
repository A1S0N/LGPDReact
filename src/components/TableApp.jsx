import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DialogRuleEdit from './DialogRuleEdit';

const columns = [
  { id: 'title', label: 'Título', minWidth: 170 },
  { id: 'severity', label: 'Gravidade', minWidth: 100 },
];

export default class TableApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        rule: {id: 0, title: '', severity: 0}
    };
}

  render(){
    return (
      <Paper style={{width: '100%'}}>
        <DialogRuleEdit rule={this.state.rule} open={this.state.open} />
        <TableContainer style={{maxHeight: 440}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
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
