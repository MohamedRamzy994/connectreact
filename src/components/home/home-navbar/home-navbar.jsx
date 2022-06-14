import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import '../home-navbar/home-navbar.scss'
import logo from '../../../assets/logo.png'
import Fab from '@mui/material/Fab'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import  Button from '@mui/material/Button'; 
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment'



function HomeNavbar() {

    const [openSearchBox,setopenSearchBox]= useState(true);


    return (
 <React.Fragment>
    
    <Navbar  expand="lg" className='bg-toolbar sticky'>
  <Container fluid>
    <Navbar.Brand href="/home"><img src={logo}/></Navbar.Brand>
                    <Fab size="small" color="warning" aria-label="add" className='me-3' 
                    onClick={()=>setopenSearchBox(!openSearchBox)}>
                    <SearchTwoToneIcon />
                    </Fab>

<form className="toolbar-search" hidden={openSearchBox} >
        <Box>
         
            <TextField variant='standard' placeholder='بحث فى المنصة' fullWidth
            helperText='كتب الكلمة التى تريد البحث عنها'
            label='بحث فى المنصة'
            InputLabelProps={{
               style:{
                   position:'absolute',
                   right:0,
                   top:0,
                   transformOrigin:'top right'
               }
            }}
            FormHelperTextProps={{
                className:'text-end'
            }}
            InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
              }}
          ></TextField>
          

        </Box>


      </form>
     
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
          
        <Link to={'/home'} >  الرئيسية </Link>
    
        <Link to={'/home'}>  الخدمات </Link>
        <Link to={'/home'}>  الصناعات </Link>
        <Link to={'/home'}>  المدونة </Link>
        <Link to={'/home'}>  الدعم </Link>
        <Link to={'/home'}>  الوظائف </Link>

        <Link to={'/login'}>  
        <Button className='btnlogin' variant='contained'>
            
            تسجيل دخول
                
                &nbsp;
                <PersonIcon/>
                
                </Button> </Link>
            <Link to={'/home'}>  
        <Button className='btnlogin' variant='contained'>
            
             الاتصال بالمبيعات
             
             &nbsp;
             <LocalPhoneIcon/>
             </Button> </Link>



        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </React.Fragment >
  )
}

export default HomeNavbar