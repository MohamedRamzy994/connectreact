import { Inbox } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, FilledInput, IconButton, InputAdornment } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import React ,{useContext, useEffect} from 'react'
import { ProgressContext } from '../../App.jsx'
import { Link } from 'react-router-dom'
import './resetpassword.scss'

function ResetPassword() {
 
  const {isLoggedin,setisLoggedin}  = useContext(ProgressContext);

  useEffect(() => {
  
    setTimeout(() => {

    setisLoggedin(true)

      
    }, 2000);
      
    return () => {
      setisLoggedin(false);
     
    }
  },[])
  

 
  return (

    <div id='resetpassword'>


<div className="container-fluid login-background text-center">
    <div className="row ">
    <div className="col-md-4"></div>
    <div className="col-md-4 mt-5 pt-5">
      <Card>
    
        <CardContent>
          
        
        <Link to={'/home'}  ><img src="../../assets/logo.png" alt="Connect Platform Logo" /></Link>
        
          <FormControl variant='filled' fullWidth>
           
            <FilledInput type='email' placeholder='البريد الالكترونى '
            endAdornment={
              <InputAdornment position='end'>
                <IconButton>
                  <Inbox></Inbox>
                </IconButton>
              </InputAdornment>
            }
            
            ></FilledInput>
            

              </FormControl>
            </CardContent>


        <CardActions >
          <Button className='m-auto' variant='contained' color="primary">ارسال</Button>
          
        </CardActions>
    
      </Card>
    </div>
    <div className="col-md-4">
    
    </div>
  </div>

  </div>


    </div>
  )
}

export default ResetPassword