import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './dashboard.scss'
import { Link, Outlet } from 'react-router-dom';
import { Home } from '@mui/icons-material';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight:0 ,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth
    
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));



export default function Dashboard() {





  document.title='لوحة التحكم ';
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (

    <div id='dashboard' className='bg-home'>
  <Box>
      <CssBaseline />
      <AppBar  className='bg-toolbar' open={open}  position="sticky">
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link to={'/home'}>
          <img src={require('../../assets/logo.png')} className="img-fluid" alt="" />
          </Link>     
        </Toolbar>
      </AppBar>
      <Main open={open}>
      <Outlet></Outlet>

      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader  className="p-3">
      
        <img src={require('../../assets/avatar.png')} className="img-fluid" alt="" />
       
        </DrawerHeader>
        <Divider />
        <List>
        <Link to={'/dashboard/index'}>
            <ListItem button >
          
           
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
            
            <ListItemText primary='الرئيسية'>
            
              
            </ListItemText>
 

            
            </ListItem>
            </Link>  
            <Divider />  
             <Link to={'/dashboard/services'}>
            <ListItem button >
          
           
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
            
            <ListItemText primary='الخدمات'>
            
              
            </ListItemText>
 

            
            </ListItem>
            </Link>   
            <Divider />
              <Link to={'/dashboard/factories'}>
            <ListItem button >
          
           
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
            
            <ListItemText primary='الصناعات'>
            
              
            </ListItemText>
 

            
            </ListItem>
            </Link>   
            <Divider /> 
            <Link to={'/dashboard/'}>
            <ListItem button >
          
           
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
            
            <ListItemText primary='المدونة'>
            
              
            </ListItemText>
 

            
            </ListItem>
            </Link>    
            <Divider /> 
             <Link to={'/dashboard/'}>
            <ListItem button >
          
           
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
            
            <ListItemText primary='الدعم'>
            
              
            </ListItemText>
 

            
            </ListItem>
            </Link>    
            <Divider /> 
            <Link to={'/dashboard/'}>
            <ListItem button >
          
           
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
            
            <ListItemText primary='الوظائف'>
            
              
            </ListItemText>
 

            
            </ListItem>
            </Link>  
            <Divider />  
            <Link to={'/dashboard/'}>
            <ListItem button >
          
           
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
            
            <ListItemText primary='تسجيل الخروج'>
            
              
            </ListItemText>
 

            
            </ListItem>
            </Link>   
           
        </List>
        <Divider />
     
      </Drawer>
    </Box>
    </div>

  
  );
}
