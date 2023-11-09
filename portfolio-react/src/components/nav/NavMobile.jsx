import React, { useState } from 'react'
import {MdMenuOpen} from 'react-icons/md'
import './nav-mobile.css'
import Nav from './Nav'
import {motion, AnimatePresence } from 'framer-motion'

function NavMobile() {
    const [isOpen,setIsOpen] = useState(false)

    const menu = {
        hidden: { opacity: 0, scale: 0, x: '100%' },
        visible: { opacity: 1, scale: 1, x: 0 },
        exit: { opacity: 0, scale: 0, x: '100%',
        transition: {
          type: "spring", stiffness: 100, damping: 16 
        }},
        transition: {
          type: "spring", stiffness: 100, damping: 16 
        },
    }
    
    return (
        <div className='nav-mobile'
        style={isOpen ? {height:'max-content'} : {height:'1rem'}}>
            <MdMenuOpen size={30} className='menu-icon' onClick={()=>setIsOpen(!isOpen)}/>
            <AnimatePresence>
                {isOpen && (
                    <motion.div className="nav-menu"
                    variants={menu}
                    initial="hidden"
                    animate="visible"
                    exit={menu.exit}
                    transition={menu.transition}>
                        <Nav/>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default NavMobile