import React,{useState,useEffect} from 'react'
import './main.css'
import { useLocation } from 'react-router-dom'
import {motion,AnimatePresence,useMotionValue,useSpring} from 'framer-motion'
import animations from '../animations/animations'
import mainLogo from '../../assets/gs-logo.png'
import NavMain from '../nav/NavMain'
import Icon from '../svg/svgIcon'
import VanillaTilt from 'vanilla-tilt'
import FollowMouse from './FollowMouse'

function Main() {
    const {fadeIn,container,item,galery} = animations()
    const hover = {scale:1.01}

    useEffect(()=>{
        VanillaTilt.init(document.querySelectorAll('.main-container'),{
            max: 5,
            speed: 10,
            glare: true,
            'max-glare': 0
        })
    })


      
    return (
        <div>
            <NavMain/>

            <motion.div    
            initial={{ opacity: 0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:2 }}
            id='main'>
                <motion.div
                variants={container}
                initial="hidden"
                animate="visible">
                        <motion.img
                        initial="hidden"
                        animate="visible"
                        exit={{opacity:0,scale:1.5,transition:{duration:.8}}}
                        variants={{
                            type: "spring",
                            hidden: { opacity: 0, y: '100%',scale:0},
                            visible: { opacity: 1, y: 0,scale:1 },
                        }}
                        transition={{
                            duration: 1.2,
                            opacity: { duration: 2 },
                        }}
                        whileHover={hover}
                        className='main-logo'
                        src={mainLogo} alt="logo" />
                        
                </motion.div>
            
            </motion.div>
            
        </div>
    )
}

export default Main