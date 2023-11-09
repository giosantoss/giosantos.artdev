import React from 'react'
import './about.css'
import { motion } from 'framer-motion'

function Me() {
  return (
    <motion.div            
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0,}}
    transition={{
        duration:.8
    }} className='me'></motion.div>
  )
}

export default Me