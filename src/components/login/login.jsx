import React,{useEffect,useContext,useState} from 'react'
import {ProgressContext} from '../../App'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import './login.scss'
import { BrowserRouter, Link } from 'react-router-dom';
import  Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { VerifiedUser } from '@mui/icons-material';
function Login() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const {isLoggedin,setisLoggedin}  = useContext(ProgressContext);

      useEffect(() => {
        document.title='تسجيل الدخول'  
        setTimeout(() => {
    
        setisLoggedin(true)
    
          
        }, 2000);
          
        return () => {
          setisLoggedin(false);
         
        }
      },[])


  return (
    <div id='login'>

<div className="container-fluid login-background text-center">
    <div className="row ">
    <div className="col-md-4"></div>
    <div className="col-md-4 mt-5 pt-5">
      <Card>
  
        <CardContent>
        <Link to={'/home'} >
          <img src={require('../../assets/logo.png')} alt="Connect Platform Logo" />
          </Link>  
            <TextField  fullWidth  variant='filled'
            InputProps={{
                endAdornment:(
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <VerifiedUser></VerifiedUser>
                      </IconButton>
                    </InputAdornment>
               ),
            }}
            placeholder='اسم المستخدم'
     
            ></TextField>
          
          <FormControl className='mt-3' fullWidth variant="filled">
       
          <FilledInput 
            id="filled-adornment-password"
            placeholder='كلمة المرور'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
 

              <Link to={'/resetpassword'} className='btn-link' >
                  <Button variant='text' color='info'  className='mt-3'>
                  هل نسيت كلمة المرور ؟
                  </Button>
                  </Link>
        </CardContent>
        <CardActions>
          <Link to={'/dashboard'} className='m-auto btn-link'>
          
          <Button variant='contained'  color='primary' >دخول</Button>
          </Link>

        </CardActions>
      </Card>
    </div>
    <div className="col-md-4"></div>
  </div>

  </div>
      

    </div>
  )
}

export default Login