import React,{useEffect, useState} from 'react'
import './nav-main.css'
import { useLocation ,Link,useNavigate } from 'react-router-dom'
import {delay, motion} from 'framer-motion'
import animations from '../animations/animations'
import projectsIcon from '../../assets/icons/projects-icon.png'
import aboutIcon from '../../assets/icons/about-icon.png'
import skillsIcon from '../../assets/icons/skills-icon.png'
import knowledgeIcon from '../../assets/icons/knowledge-icon.png'
import experienceIcon from '../../assets/icons/experience-icon.png'
import contactIcon from '../../assets/icons/contact-icon.png'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'


function NavMain() {
  const {containerNav,itemNav,itemNavRight,hover,containerTech,containerSpring,galery,itemTech} = animations()
  const [isHovered,setIsHovered] = useState(false)
  const containerMedia = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.2
      }
    },
    exit: { 
      transition: {
        duration:1.5, 
        staggerChildren: 0.15 ,
        ease:'circIn',
      }
    },
  }

  const description = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: .4 } },
  }

  const iconHover = {
    animate: { scale:1.1 },
    transition:{ type: "spring", stiffness: 400, damping: 17 }
  }

  const tap = {
    scale:0.7,
    transition:{ type: "spring", stiffness: 400, damping: 17 }
  }

  const float = {
    keyTimes: [0,0.5,1], scale: [1,1.06,1],y:[0,1.8,0], transition: {duration:3, ease: "easeInOut", repeat: Infinity} 
  }

  const leftContents = [
    { id: 1, path: '/projects', name: 'Projects', icon: projectsIcon },
    { id: 2, path: '/about', name: 'About', icon: aboutIcon },
    { id: 3, path: '/skills', name: 'Skills', icon: skillsIcon },
  ]

  const rightContents = [
    { id: 1, path: '/experience', name: 'Experience', icon: experienceIcon },
    { id: 2, path: '/knowledge', name: 'Knowledge', icon: knowledgeIcon },
    { id: 3, path: '/contact', name: 'Contact', icon: contactIcon },
  ]
  return (
    <nav id='nav-main'>
      <motion.div 
      className="nav-main-left"
      variants={containerNav}
      initial="initial"
      animate="animate"
      exit={'exit'}
      >
        {leftContents.map(leftContent =>(
          <motion.div
          variants={itemNav}
          transition={itemNav.transition}
          className='icon-container'>
            <Link to={leftContent.path} className='nav-main-item'>
              <motion.div
              initial="initial"
              animate="initial"
              whileHover="animate"
              whileTap={tap}
              transition={tap.transition}
              >
                <motion.div animate={float}>
                  <motion.img variants={iconHover} transition={iconHover.transition} src={leftContent.icon} className='nav-main-icon' />
                  <motion.p variants={description}>{leftContent.name}</motion.p>
                </motion.div>

              </motion.div>
            </Link>
          </motion.div>
        ))}

      </motion.div>

      <motion.div 
      className="nav-main-right"
      variants={containerNav}
      initial="initial"
      animate="animate"
      exit={'exit'}>
        {rightContents.map(rightContent =>(
          <motion.div
          variants={itemNavRight}
          transition={itemNavRight.transition}
          className='icon-container'>
            <Link to={rightContent.path} className='nav-main-item'>
              <motion.div
              initial="initial"
              animate="initial"
              whileHover="animate"
              whileTap={tap}
              transition={tap.transition}
              >
                <motion.div animate={float}>
                  <motion.img variants={iconHover} transition={iconHover.transition} src={rightContent.icon} className='nav-main-icon' />
                  <motion.p variants={description}>{rightContent.name}</motion.p>
                </motion.div>

              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="media"
      variants={containerMedia}
      initial='hidden'
      animate='visible'
      exit={'exit'}>
          <motion.a href="https://www.instagram.com/giosantos.artdev/"
          target='blank'
          whileHover={hover}
          variants={itemTech}>
            <BsInstagram size={25}/>
          </motion.a>
          <motion.a href="https://github.com/giosantoss"
          target='blank'
          whileHover={hover}
          variants={itemTech}>
            <AiFillGithub size={30}/>
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/o-giovanni-santos/"
          target='blank'
          whileHover={hover}
          variants={itemTech}>
            <AiOutlineLinkedin size={32}/>
          </motion.a>
      </motion.div>
    </nav>
  )
}

export default NavMain