import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Link} from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

const columns = [
  { id: 'solicitante', label: 'Solicitante', minWidth: 170 },
  { id: 'tipo', label: 'Tipo', minWidth: 170 },
  { id: 'ver', label: '', minWidth: 170 },
];

export default class TableRequests extends React.Component {

  render(){
    return (
      <Paper style={{width: '100%'}}>
        <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, textAlign: 'center' }}
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
                     <TableCell style={{textAlign: 'center'}}>
                          {row.name}
                      </TableCell>
                      <TableCell style={{textAlign: 'center'}}>
                          {row.type}
                      </TableCell>
                      <TableCell style={{textAlign: 'center'}}>
                        <Link
                          to={{
                            pathname: "/requests/details",
                            state: row
                          }}
                        >

                            <IconButton color="primary" component="span">
                              <VisibilityIcon />
                            </IconButton>
                        </Link>
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
