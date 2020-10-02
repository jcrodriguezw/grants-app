import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  CircularProgress
} from '@material-ui/core'
// import data from '../../Utils/data'
import { Link } from 'react-router-dom'
import moment from 'moment'


const columns = [
  { id: 'opportunityNumber', label: 'Opportunity Number', minWidth:'200px', maxWidth:'400px' },
  { id: 'opportunityTitle', label: 'Opportunity Title', minWidth:'500px', maxWidth:'900px' },
  { id: 'agency', label: 'Agency', minWidth:'200px', maxWidth:'400px' },
  { id: 'postedDate', label: 'Posted Date', minWidth:'200px', maxWidth:'300px' },
];

function createData(id, opportunityNumber, opportunityTitle, agency, postedDate) {
  // const density = population / size;
  return { id, opportunityNumber, opportunityTitle, agency, postedDate };
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  // container: {
  //   // maxHeight: 440,
  // },
});

export default function TableData({data, loading, error, search}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const dataSorting = data && data.announcements && data.announcements.slice().sort((a,b) => {
    if(a.postDate < b.postDate){
      return 1
    }

    if(a.postDate > b.postDate){
      return -1
    }

    return 0
  })

  const dataFilter = dataSorting && dataSorting.filter(ds => {
    return ds.opportunityNumber.toLowerCase().includes(search.toLowerCase())
  })


  const rows = dataFilter && dataFilter.map(d => createData(
    d.id,
    d.opportunityNumber,
    d.opportunityTitle,
    d.agencyCode,
    d.postDate
    // moment(d.postedDate).format('DD/MM/YYYY')
  ))

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if(loading){
    return (
      <div className='circularProgress'>
        <CircularProgress />
      </div>
    )
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <Typography variant='h6' style={{fontWeight:'bold'}}>{column.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Link to={`/detail/${row.id}/synopsis`} className='homeLink'>
                          <div>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </div>
                        </Link>
                        </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={1000}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}