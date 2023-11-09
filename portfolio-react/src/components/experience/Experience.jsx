import React from 'react';
import { motion, useTransform } from "framer-motion";
import faccia from '../../assets/projects/faccia-mockup.png'
import genedilson from '../../assets/projects/genedilson-mockup.png'
import './experience.css'
import {FaTooth} from 'react-icons/fa'
import {FaPenAlt} from 'react-icons/fa'
import experience from '../../assets/experience-blue.png'
import {BiLinkAlt} from 'react-icons/bi'
import animations from '../animations/animations'

function Experience() {  
  const {container,galery,containerSpring} = animations()

  return (
    <section id='experience'>
      <motion.div className='top'
        initial="hidden"
        animate="visible"
        exit={'exit'}>
        <motion.img src={experience} className='experience-icon' 
          variants={galery}/>
        <motion.p
          variants={galery}>I have these projects that I did on demand, I was contacted to make a solution for their goals.</motion.p>
      </motion.div>

      <motion.div className='cards'
        variants={container}
        initial="hidden"
        animate="visible"
        exit={'exit'}>

        <motion.div variants={galery}>
          <motion.div className='experience-card'
          variants={container}
          initial="hidden"
          animate="visible"
          exit={'exit'}>
            <motion.h2 variants={galery}>
              <FaTooth size={16}/> Faccia Odontologia
            </motion.h2>
            <motion.p variants={galery}>The Faccia Odontologia project was my first on-demand project, all done in React. It was created with the aim of promoting the Faccia dental clinic as a landing page, welcoming the user and redirecting them to WhatsApp.</motion.p>
            <motion.img src={faccia}/>
            <motion.a
            href="https://facciaodontologiajp.com.br/"
            target='#blank'
            variants={galery}
            whileHover={{scale:1.1}}
            whileTap={{scale:1}}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              Check Out
              <BiLinkAlt size={22} color='#3C91F7'/>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div variants={galery}>
          <motion.div className='experience-card'
          variants={container}
          initial="hidden"
          animate="visible"
          exit={'exit'}>
            <motion.h2 variants={galery}><FaPenAlt size={15}/> Genedilson</motion.h2>
            <motion.p variants={galery}>The Genedilson project was another on-demand project, my first WordPress project. The client wanted a blog that he could add and edit with posts himself, and WordPress was a great solution.</motion.p>
            <motion.img src={genedilson}/>
            <motion.a
            href="https://genedilsonfm.com.br/"
            target='#blank'
            variants={galery}
            whileHover={{scale:1.1}}
            whileTap={{scale:1}}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              Check Out
              <BiLinkAlt size={22} color='#3C91F7'/>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience