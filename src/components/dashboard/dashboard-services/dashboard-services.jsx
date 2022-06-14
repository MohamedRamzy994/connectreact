import React, { useContext , useEffect} from 'react'
import { ProgressContext } from '../../../App'
import './dashboard-services.scss';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHeader from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { styled } from '@mui/material/styles';
import  TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Fab  from '@mui/material/Fab';
import  Add  from '@mui/icons-material/Add';







function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
       <LastPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
       <KeyboardArrowRight /> 
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
       <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
         <FirstPageIcon />
      </IconButton>
    </Box>
  );
}


TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(id,name, calories, fat) {
  return { id,name, calories, fat };
}
const columns = [
  { id: 'id', label: 'الكود' , align:'center'},

  { id: 'name', label: 'عنوان الخدمة',  align:'center'},
  {
    id: 'details',
    label: 'تفاصيل الخدمة',
    align:'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'datetime',
    label: 'التاريخ',
    align:'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'actions',
    label: 'الأحداث',
    align:'center',
    
  },
];
const rows = [
  createData(1,'Cupcake', 305, 3.7),
  createData(2,'Donut', 452, 25.0),
  createData(3,'Eclair', 262, 16.0),
  createData(4,'Frozen yoghurt', 159, 6.0),
  createData(5,'Gingerbread', 356, 16.0),
  createData(6,'Honeycomb', 408, 3.2),
  createData(7,'Ice cream sandwich', 237, 9.0),
  createData(8,'Jelly Bean', 375, 0.0),
  createData(9,'KitKat', 518, 26.0),
  createData(10,'Lollipop', 392, 0.2),
  createData(11,'Marshmallow', 318, 0),
  createData(12,'Nougat', 360, 19.0),
  createData(13,'Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));



export default function DashboardServices(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
        const {isLoggedIn , setisLoggedin}= useContext(ProgressContext);

        useEffect(() => {
            setTimeout(() => {
    
                setisLoggedin(true)
            
                  
                }, 2000);
        
          return () => {
            setisLoggedin(false)
          }
        }, [])
        



  return (
    <div id='dashboardservices'>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
           خدمة جديدة
          </Typography>
       
        </AccordionSummary>
        <AccordionDetails>
         <AddNewService></AddNewService>
        </AccordionDetails>
      </Accordion>
   
          <br/>
    
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>جدول الخدمات</Typography>
       
        </AccordionSummary>
        <AccordionDetails>
     
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHeader>
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
        </TableHeader>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow hover key={row.name}>
                <TableCell  scope="row" style={{width:'10%'}} align="center">
                {row.id}
              </TableCell>
              <TableCell  scope="row" style={{width:'30%'}} align="center">
                {row.name}
              </TableCell>
              <TableCell style={{width:'10%'}} align="center">
                {row.calories}
              </TableCell>
              <TableCell style={{width:'10%'}} align="center">
                {row.fat}
              </TableCell>
              <TableCell style={{width:'40%'}} align="center">
              <Fab size="medium" color="primary" aria-label="add" sx={{m:1}}>
  <Add />
  </Fab>
  <Fab size="medium"  color="secondary" aria-label="add" sx={{m:1}} >
  <Add />
</Fab>
<Fab size="medium" color="accent" aria-label="add" sx={{m:1}}>
  <Add />
</Fab>

              </TableCell>
            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <StyledTableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>


        </AccordionDetails>
      </Accordion>
     

    </div>
  )
}

export  function AddNewService(props) {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div id='addnewservice'>

    <TextField id="filled-basic" label="عنوان الخدمة" variant="filled" fullWidth  sx={{m:1}}/>
    <TextField id="filled-basic" label="تفاصيل الخدمة" variant="filled"  rows={4}  multiline  fullWidth sx={{m:1}}/>
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <DesktopDatePicker
          label="تاريخ الخدمة "
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField fullWidth variant='filled' sx={{m:1}} {...params} />}
        />  
      </LocalizationProvider>
    
    <Button variant="contained" sx={{m:1}}>حفظ</Button>




    </div>
  )
}
