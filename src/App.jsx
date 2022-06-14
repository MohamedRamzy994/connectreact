import './App.css';
import { LinearProgress } from '@mui/material';
import React, {useEffect, useState } from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomeComponent from './components/home/home.component';
import Login from './components/login/login';
import { createTheme, ThemeProvider } from '@mui/material'
import ResetPassword from './components/resetpassword/resetpassword';
import Dashboard from './components/dashboard/dashboard';
import DashboardIndex from '../src/components/dashboard/dashboard-index/dashboard-index';
import DashboardServices from './components/dashboard/dashboard-services/dashboard-services';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
export const ProgressContext= React.createContext({
  isLoggedin :true,
   setisLoggedin:()=> {}
});

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  const [isLoggedin, setisLoggedin] = useState(false);

  const ThemeButton =createTheme({
    direction: 'rtl',
    components:{
        MuiButton:{
           defaultProps:{
              style:{
                  backgroundColor:'#E8E8E8',
                  color:'#000',
                  fontFamily:'inherit'
              }
           }
        }
    }
  })
 
  document.title='الصفحة الرئيسية';


    return( 
      <React.Fragment>
       
       <CacheProvider value={cacheRtl}>
    
        <ProgressContext.Provider value={{isLoggedin,setisLoggedin}}>
        <LinearProgress hidden={isLoggedin} sx={{position:'sticky', top:0}} ></LinearProgress>
       
      <ThemeProvider theme={ThemeButton}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/home" element={<HomeComponent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/dashboard/" element={<Dashboard />}>
        <Route path='' element={<DashboardIndex/>} />
        <Route path='index' element={<DashboardIndex/>} />
        <Route path='services' element={<DashboardServices/>} />

      </Route>
    </Routes>
 
    </BrowserRouter>
    </ThemeProvider>
    </ProgressContext.Provider>
    </CacheProvider>
      </React.Fragment> );
 

}

export default App;
