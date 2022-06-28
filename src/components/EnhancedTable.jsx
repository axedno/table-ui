import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Grid } from '@mui/material'
import EnhancedTableHead from './EnhancedTableHead'
/* eslint-disable camelcase */
function EnhancedTable ({
  rows,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
  total
}) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '70vh' }}>
      <Box sx={{ width: '70%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead />
              <TableBody>
                {rows?.map(
                  ({ id, first_name, last_name, gender, salary, email }) => {
                    return (
                      <TableRow hover key={id}>
                        <TableCell
                          component="th"
                          scope="row"
                          padding="none"
                          align="left"
                          style={{ padding: '0 20px' }}>
                          {first_name}
                        </TableCell>
                        <TableCell style={{ paddingLeft: '20px' }} align="left">
                          {last_name}
                        </TableCell>
                        <TableCell style={{ paddingLeft: '20px' }} align="left">
                          {email}
                        </TableCell>
                        <TableCell style={{ paddingLeft: '20px' }} align="left">
                          {gender}
                        </TableCell>
                        <TableCell style={{ paddingLeft: '20px' }} align="left">
                          {salary}
                        </TableCell>
                      </TableRow>
                    )
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Grid>
  )
}

EnhancedTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      gender: PropTypes.string,
      salary: PropTypes.number
    })
  ),
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  total: PropTypes.number
}

export default EnhancedTable
