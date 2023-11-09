import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import animations from '../animations/animations'
import mainLogo from '../../assets/gs-logo.png'

function FollowMouse() {
    const {fadeIn,container,item,galery} = animations()
    const hover = {scale:1.01}
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const springConfig = {
      damping: 10,
      stiffness: 70,
    };
  
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);
  
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
  
    return (
        <motion.div    
        initial={{ opacity: 0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
        transition={{ duration:2 }}
        id='main'>
            <motion.div
            className='main-container'
            variants={container}
            initial="hidden"
            animate="visible">
                    <motion.img
                    style={{
                        x: springX,
                        y: springY,
                      }}
                    onMouseMove={handleMouseMove}
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
    );
  }
export default FollowMouse  