import React from 'react'
import './home.component.scss'
import HomeIntro from './home-intro/home-intro'
import HomeNavbar from './home-navbar/home-navbar'
import HomeSlider from './home-slider/home-slider'
import HomeAdvantages from './home-advantages/home-advantages'
import HomeHowisitwork from './home-howitiswork/home-howisitwork'
import HomeFactories from './home-factories/home-factories'
import HomeStartnow from './home-startnow/home-startnow'
import HomeBlog from './home-blog/home-blog'
import HomeTestmonials from './home-testmonials/home-testmonials'
import HomeFooter from './home-footer/home-footer'
import { useContext, useState , useEffect } from 'react'
import {ProgressContext} from '../../App';


function HomeComponent() {
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
    <React.Fragment>
        <div className='bg-home'>
       
        <HomeNavbar></HomeNavbar>
        <HomeSlider></HomeSlider>
        <HomeIntro></HomeIntro>
        <HomeAdvantages></HomeAdvantages>
        <HomeHowisitwork></HomeHowisitwork>
        <HomeFactories></HomeFactories>
        <HomeStartnow></HomeStartnow>
        <HomeBlog></HomeBlog>
        <HomeTestmonials></HomeTestmonials>
        <HomeFooter></HomeFooter>
      
        </div>
        </React.Fragment>
  )
}

export default HomeComponent