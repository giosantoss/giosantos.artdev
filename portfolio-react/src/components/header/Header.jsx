import React from 'react'
import './header.css'
import { useLocation,Link } from 'react-router-dom'
import { motion,AnimatePresence } from 'framer-motion'
import logo from '../../assets/gs-logo.png'
import Nav from '../nav/Nav'
import NavMobile from '../nav/NavMobile'

function Header() {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        duration: 2,
        staggerChildren: 1
      }
    },
    exit: { transition: { duration: 1.5, staggerChildren: 0.15 }  },
  };

  const item = {              
    hidden: { opacity: 0, x: -70 },
    visible: { opacity: 1, x: 0  },
    animate: { scale:1.1 },
    transition:{ 
      x: { delay: 1, duration: 1.2 },
      opacity: { delay: 1, duration: 1.2 },
      type: "spring", stiffness: 800, damping: 170 ,
    }
  }

  const tap = {
    transition:{ type: "spring", stiffness: 400, damping: 17 }
  }

  return (
    <motion.header id='header'
     variants={container} initial="hidden" animate="visible"
    >
      <Link to={'/'}>
        <motion.img src={logo} className='header-logo' 
        initial="hidden"
        animate="visible"
        exit="hidden"
        whileHover="animate"
        transition={item.transition}
        whileTap={tap}
        variants={item}
        />
      </Link>
      
      <Nav/>

      <NavMobile/>

    </motion.header>
  )
}

export default Header