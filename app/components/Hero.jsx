import React from 'react'
import Loginform from "./Loginform"

const Hero = ({message}) => {
  return (
    
    <div className='flex w-full items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img z-[1]'>
      
        {/* Overlay */}
        <div className='w-full h-full z-[0]'>
        <Loginform />
        </div>
        
        </div>
    
  )
}

export default Hero
