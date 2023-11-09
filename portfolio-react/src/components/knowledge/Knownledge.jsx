import React from 'react'
import './knowledge.css'
import { delay, motion } from 'framer-motion'
import metaPrint from '../../assets/knowledge/meta.jpeg'
import animations from '../animations/animations'
import knowledge from '../../assets/about/knowledge.png'
import meta from '../../assets/tech/meta.png'
import coursera from '../../assets/tech/coursera.png'
import Load from './Load'
import cruzeiro from '../../assets/knowledge/cruzeiro-print.png'
import cruzeiroIcon from '../../assets/knowledge/cruzeiro-dosul.png'
import Load2 from './Load2'

function Knownledge() {
  const {container,galery,itemTech,hover} = animations()
  const containerTech = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .5,
        staggerChildren: 0.2
      }
    }
  }
  return (
    <motion.section 
    id='knowledge' 
    variants={container}      
    initial="hidden"
    animate="visible"
    exit={'exit'}>
      <motion.div className="top"
      variants={galery}>
        <img src={knowledge} className='tech'/>
        <h1>
          Knowledge
        </h1>
      </motion.div>

      <motion.div 
      className='cards' 
      variants={container} 
      initial="hidden"
      animate="visible"
      exit={'exit'}>
        <motion.div
        className='knowledge-card'
        variants={galery}>
          <div className="card-top">
            <img src={cruzeiro} className='cruzeiro-img'/>
            <aside>
              <motion.div 
              className='technologies-card'
              variants={containerTech}>
                <motion.a 
                href="https://www.cruzeirodosulvirtual.com.br/graduacao/sistemas-para-internet/"
                target='blank'
                variants={itemTech}>
                  <motion.img
                  src={cruzeiroIcon}
                  className='tech'
                  whileHover={hover}/>
                </motion.a>
              </motion.div>

              <div className='technologies-card' >
                <Load2/>
              </div>
            </aside>
          </div>
          <p>
            In 2022 I started a course called Internet Systems, on 'Cruzeiro do Sul', and learned the concepts of HTML and CSS, and it was love at first sight, soon after I learned JavaScript, and then I got into React.js, which is my favorite language.
          </p>
        </motion.div>

        <motion.div
        className='knowledge-card'
        variants={galery}>
          <div className="card-top">
            <img src={metaPrint} className='meta-img'/>
            <aside>
              <motion.div className='technologies technologies-card '
              variants={containerTech}>
                  <motion.a 
                  href="https://www.coursera.org/professional-certificates/meta-front-end-developer?"
                  target='blank'
                  variants={itemTech}>
                    <motion.img
                    src={coursera}
                    className='tech'
                    whileHover={hover}/>
                  </motion.a>
                  <motion.a 
                  href="https://about.meta.com/br/"
                  target='blank'
                  variants={itemTech}>
                    <motion.img
                    src={meta}
                    className='tech'
                    whileHover={hover}/>
                  </motion.a>
              </motion.div>
              <div className='technologies-card'>
                <Load/>
              </div>
            </aside>
          </div>
          <p>
            I started my knowledge of React.js on the Coursera platform, within Front End Developer Professional Certificate from Meta course. I'm loving the methodology of this course, and looking forward to getting my certificate.
          </p>
        </motion.div>


      </motion.div>
      
    </motion.section>
  )
}

export default Knownledge