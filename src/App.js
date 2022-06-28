/* eslint no-extra-semi: "error" */
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import EnhancedTable from './components/EnhancedTable'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TableService from './services/TableService'

function App () {
  const [searchValue, setSearchValue] = useState('')

  const [page, setPage] = React.useState(0)

  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value)
    setPage(0)
  }

  const { data = { rows: [], total: 0 }, refetch } = useQuery(
    'getTableData',
    () => TableService.getTableRows(page + 1, rowsPerPage, searchValue)
  )

  const { data: options } = useQuery('getOptions', () =>
    TableService.getUniqSalary()
  )

  const { rows, total } = data

  useEffect(() => {
    refetch()
  }, [page, rowsPerPage, searchValue])

  const handleChange = e => {
    if (!e.target.value) {
      setSearchValue('')
      setPage(0)
    } else {
      setSearchValue(e.target.value)
      setPage(0)
    }
  }

  return (
    <div>
      <div
        style={{
          margin: '50px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <FormControl style={{ width: '500px' }}>
          <InputLabel>Salary</InputLabel>
          <Select value={searchValue} label="Salary" onChange={handleChange}>
            <MenuItem style={{ height: '40px' }} value={''}>
              {' '}
            </MenuItem>
            {options?.map(salary => (
              <MenuItem key={salary} value={salary}>
                {salary}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <EnhancedTable
        searchValue={searchValue}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangePage={handleChangePage}
        rows={rows}
        page={page}
        rowsPerPage={rowsPerPage}
        total={total}
      />
    </div>
  )
}

export default App
