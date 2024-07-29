import React from 'react'
import '../Styles/Style.css'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import logo from '../Assets/openmoji_space-shuttle.svg'
import { Helmet } from 'react-helmet'
export default function HomePage() {
  return (

    <>
  <Helmet>
    <link rel="icon" href={logo} sizes="10x10" />
        <title>Space</title>
      </Helmet>
     <Header/>
     <Home/>
    </>
    
    
  )
}
