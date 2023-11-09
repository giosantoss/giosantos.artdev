import React,{useState} from 'react'
import './carousel.css'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import { easeIn, motion } from 'framer-motion'
import { useProjects } from '../projects/ProjectsContext'
import animations from '../animations/animations'

const Carousel = ({children}) =>{
    const maxVisibility = 4
    const count = React.Children.count(children)
    const {active,setActive} = useProjects()

    const {container,galery} = animations()

    return(
        
        <div className="carousell">
            {active > 0 && (
                <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                exit={'exit'}
                transition={{delay:1}}>
                    <motion.button onClick={() => setActive((i) => i - 1)}
                    variants={galery}
                    className='navarrow previous' 
                    whileHover={{scale:1.5}}
                    whileTap={{scale:1}}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                        <IoIosArrowBack/>
                    </motion.button>
                </motion.div>
            )}


            {React.Children.map(children, (child, i ) =>(
                <div className="card-container"
                style={{
                    "--active": i === active ? 1 : 0,
                    "--offset": (active - i) / 3,
                    "--direction": Math.sign(active - i),
                    "--abs-offset": Math.abs(active - i) / 3,
                    "pointerEvents": active === i ? "auto" : "none",
                    opacity: Math.abs(active - i) >= maxVisibility ? "0" : "1",
                    display: Math.abs(active - i) > maxVisibility ? "none" : "block",
                }}>
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                exit={'exit'}>
                    <motion.button onClick={() => setActive((i) => i + 1)}
                    variants={galery}
                    className='navarrow next'
                    whileHover={{scale:1.5}}
                    whileTap={{scale:1}}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                        <IoIosArrowForward/>
                    </motion.button>
                </motion.div>
            )}
        </div>
    )

}

export default Carousel