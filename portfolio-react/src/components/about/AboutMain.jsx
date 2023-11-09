import React,{useState,useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useViewportScroll, useTransform , AnimatePresence, delay  } from "framer-motion";
import './about.css'
import Me from './Me'
import logo from '../../assets/gs-logo-white.png'
import { Link } from 'react-router-dom';
import contactIcon from '../../assets/contact-blue.png'
import G from '../../assets/about/g.png'
import S from '../../assets/about/s.png'
import {IoIosArrowDown} from 'react-icons/io'

function AboutMain() {
  return (
    <motion.section
    id='about'
    initial={{ opacity: 0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    transition={{ duration:1 }}
    >

      <motion.div className='greeting'
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={containerText}
      style={!isMobile ? { scale, opacity } : null}>

        <motion.div variants={word}>
          <motion.aside
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={containerText}>
            <motion.p variants={word}>
              Hi! My name is
            </motion.p>
            <motion.p variants={word} className='name'>
              <img src={G} className='letter'/>iovanni <img src={S} className='letter'/>antos
            </motion.p>
            <motion.p variants={word} className='vocation'>
              Front-End Developer
            </motion.p>
          </motion.aside>
        </motion.div>

        <motion.div variants={word}>
          <motion.aside
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={containerText}>
            <motion.p variants={word}>
              I'm <span className="vocation">Brazilian</span>,
            </motion.p>
            <motion.p variants={word}>
              and I live in João Pessoa.
            </motion.p>
          </motion.aside>
        </motion.div>
        
        
      </motion.div> 

      <motion.img src={logo} className='logo'
      initial={{ opacity: 0, scale:1.5 }}
      animate={{ opacity:1,scale:1 }}
      exit={{ opacity:0,scale:1.3 }}
      transition={{ duration:1 }}
      style={isMobile ? null : {scale,opacity}}/>


      <Me/>

      <AnimatePresence>
        {!isAtEnd && (
          <motion.div className='scroll'
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={containerText}>
            <motion.div variants={word}>
            Scroll
            </motion.div>

            <motion.div className='scroll-arrows' variants={word}>
              <motion.span animate={float}><IoIosArrowDown/></motion.span>
              <motion.span animate={float2}><IoIosArrowDown/></motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isAtEnd &&(
          <Link to={'/contact'} className="contact-stick">
            <motion.div
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={containerText}
            whileHover={{scale:1.2}}
            whileTap={{scale:1}}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <motion.button className='about-contact-btn' variants={word}>
                <img src={contactIcon} className='about-contact-icon'/>
                Contact Me
              </motion.button>
            </motion.div>
          </Link>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default AboutMain