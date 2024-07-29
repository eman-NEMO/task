import React from 'react'
import '../Styles/Style.css'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import { motion } from 'framer-motion'
export default function HomePage() {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
    }
  };
  return (

    <>
    
    <div className='back_img'>
    <Header />


      <Home/>
      
     </div>
    
    </>
    
    
  )
}
