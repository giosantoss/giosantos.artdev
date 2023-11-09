import React,{useState} from 'react'
import './skills.css'
import vscode from '../../assets/tech/vscode.png'
import vscodePrint from '../../assets/skills/vscode-print.png'
import coreldraw from '../../assets/tech/coreldraw.png'
import corelPrint1 from '../../assets/skills/corel-print.png'
import corelPrint2 from '../../assets/skills/corel2-print.png'
import photoshop from '../../assets/tech/photoshop.png'
import photoPrint1 from '../../assets/skills/photoshop-print.png'
import photoPrint2 from '../../assets/skills/photoshop2-print.png'
import skillsblue from '../../assets/skills-blue.png'
import css from '../../assets/tech/skills-css.png'
import cssPrint from '../../assets/skills/css-print.png'
import html from '../../assets/tech/skills-html.png'
import htmlPrint from '../../assets/skills/html-print.png'
import reactIcon from '../../assets/tech/skills-react.png'
import reactPrint from '../../assets/skills/react-print.png'
import reactNative from '../../assets/tech/skills-react-native.png'
import figma from '../../assets/tech/figma.png'
import figmaPrint from '../../assets/skills/figma-print.png'
import folders from '../../assets/skills/folders.png'
import { motion,AnimatePresence } from 'framer-motion'
import animations from '../animations/animations'
import itrips from '../../assets/skills/itrip-videoimg.png'
import itripsVideo from '../../assets/projects/itrip-video.mp4'
import {FaRegPlayCircle} from 'react-icons/fa'
import {TbArrowBack} from 'react-icons/tb'
import { hover } from '@testing-library/user-event/dist/hover'

function Skills() {
  const {fadeIn,containerSpring,hover,galery,tap,containerSkills,itemSkills} = animations()
  const [selectedId,setSelectedId] = useState(null)
  const [active,setActive] = useState(null)
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [itrip,setItrip] = useState(null)
  const handleElement = (element) => {

    if (element === selectedId) {
      setSelectedId(null);
      setActive(null);
    } else{
      setSelectedId(element);
      setActive(element)
    }   
  };

  let content;

  switch (selectedId) {
    case 1:
      content = (
        <motion.div className='container'
        variants={containerSkills}
        initial="initial"
        animate="animate"
        exit={'exit'}>
          <motion.div
          variants={itemSkills}
          transition={itemSkills.transition}>
            <h2>HTML </h2>
            <p className='desc'>I have a good command of the concepts of HTML hierarchy, with solid and logical structures, to improve SEO</p>
          </motion.div>
          <motion.img src={htmlPrint} className='print'
          variants={itemSkills}
          transition={itemSkills.transition}/>
        </motion.div>
      );
      break;
    case 2:
      content = (
        <motion.div className='container'
        variants={containerSkills}
        initial="initial"
        animate="animate"
        exit={'exit'}>
          <motion.div
            variants={itemSkills}
            transition={itemSkills.transition}>
            <h1>React </h1>
            <p className='desc'>
              The react library implemented the concept of componentizing the code, thereby bringing numerous improvements and facilities. I love working with react.
              <p className='desc'>
                <span className="desc-topic">Example below:</span> Header that contains a nav inside, and a navMobile that only appears on mobile devices.
              </p>
              <p className='desc'>
                <span className="desc-topic">Principles used:</span> React Router DOM, Components, Map, useState Hook, Short-Circuit Evaluation, Framer Motion.
              </p>
            </p>
          </motion.div>
          <motion.img src={reactPrint} className='print' 
          variants={itemSkills}
          transition={itemSkills.transition}/>
        </motion.div>
      );
      break;
    case 3:
      content = (
        <motion.div className='container'
        variants={containerSkills}
        initial="initial"
        animate="animate"
        exit={'exit'}>
          <motion.div
          variants={itemSkills}
          transition={itemSkills.transition}>
            <h1>CSS </h1>
            <div className="card-description">
              <p className='desc'>
                Most of the CSS concepts I master well, as shown below.
              </p>
              <p className='desc'>
                <span className='desc-topic'>Principles used:</span>
                Selectors, classes, pseudo-classes, media queries, among many others.
              </p>
            </div>
          </motion.div>
          <motion.img src={cssPrint} className='print' 
          variants={itemSkills}
          transition={itemSkills.transition}/>
        </motion.div>
      );
      break;
    case 4:
      content = (
        <motion.div className='container'
        variants={containerSkills}
        initial="initial"
        animate="animate"
        exit={'exit'}>
          <h2>PhotoShop </h2>
          
          <motion.div className="card-item"
          variants={itemSkills}
          transition={itemSkills.transition}>
            <img src={photoPrint1} className='print ajust-print' />
            <div className="card-description">
              <p className='desc'>
                I developed each project mockup and the background of the about section in PhotoShop, using the concepts of mask selection, 3D reflection effects, gradients, among others. 
              </p>
              <p className='desc'>
                <span className='desc-topic'>Principle used:</span> image overlay with multiply factor, shading, masking and background.
              </p>
            </div>
          </motion.div>
          <motion.div className="card-item"
          variants={itemSkills}
          transition={itemSkills.transition}>
            <img src={photoPrint2} className='print ajust-print' />
            <div className="card-description">
              <p className='desc'>
                To create the about section, I cropped my photo so I could make an overlay along with the logo. It was a good solution to improve my website and I was very satisfied with the result.
              </p>
              <p className='desc'>
                <span className='desc-topic'>Principle used:</span> masking stroke, overlay.
              </p>
            </div>
          </motion.div>
        </motion.div>
      );
      break;
    case 5:
      content = (
        <motion.div className='container'
        variants={containerSkills}
        initial="initial"
        animate="animate"
        exit={'exit'}>
          <h2>VSCode</h2>
          <motion.img src={vscodePrint} className='print'
          variants={itemSkills}
          transition={itemSkills.transition}/>
          <motion.div className='vscode-desc'
          variants={itemSkills}
          transition={itemSkills.transition}> <img src={folders} className='' />
            <p className='desc'>Hierarchy is a very important concept, and as you can see, I use this principle even in the distribution of folders and files, as the organization of your code starts here.</p>
          </motion.div>
        </motion.div>
      );
      break;
    case 6:
      content = (
        <motion.div className='container'
        variants={containerSkills}
        initial="initial"
        animate="animate"
        exit={'exit'}>
          <h2>Figma</h2>
          <motion.div
          variants={itemSkills}
          transition={itemSkills.transition}
          className="card-description">
            <p className='desc'> Figma is a great tool, which allows the designer and developer to visualize the project before building the Front End.</p>
            <p className='desc'><span className='desc-topic'>Principles used:</span> Visual Hierarchy, Colors and Typography, Design Harmony.
            </p>
          </motion.div>

          <motion.img src={figmaPrint} className='print' 
          variants={itemSkills}
          transition={itemSkills.transition}/>

        </motion.div>
      );
      break;
      case 7:
        content = (
          <motion.div className='container'
          variants={containerSkills}
          initial="initial"
          animate="animate"
          exit={'exit'}>
            <h2>React Native</h2>
            <motion.div
            variants={itemSkills}
            transition={itemSkills.transition}
            className="card-description">
              <p className='desc'>React Native brings the concept of componentization from React to mobile, with semantic changes. It was a challenge to produce an app, but I enjoyed the journey and got a good result.</p>
              <p className='desc'><span className='desc-topic'>Principles used:</span> Components, Map, useState Hook.
              </p>
            </motion.div>

            <motion.img src={itrips} className='print' 
            variants={itemSkills}
            transition={itemSkills.transition}
            onClick={()=>setItrip(1)} />

            <AnimatePresence>
                {itrip !== null &&(
                    <motion.div className='itrip-container'
                    key={itrip}
                    layoutId={itrip}
                    initial={{ scale:0 }}
                    animate={{ scale:1 }}
                    exit={{ opacity: 0, scale:0 }}>
                      <motion.button 
                      className='itrip-return' 
                      onClick={() => setItrip(null)}
                      whileHover={{scale:1.5}}>
                          <TbArrowBack/>
                      </motion.button>
                      <video controls width="640" height="360">
                          <source src={itripsVideo} type="video/mp4"/>
                          Seu navegador não suporta a exibição de vídeos.
                      </video>
                    </motion.div>
                )}
            </AnimatePresence>
          </motion.div>
        );
        break;
        case 8:
          content = (
            <motion.div className='container'
            variants={containerSkills}
            initial="initial"
            animate="animate"
            exit={'exit'}>
              <h2>Corel Draw</h2>
              <motion.div className="card-item"
              variants={itemSkills}
              transition={itemSkills.transition}>
                <img src={corelPrint1} className='print ajust-print'/>
                <div className="card-description">
                  <p className='desc'>
                    I interpreted my logo, always using Corel Draw, which is one of the best programs for vectorization. I wanted a more modern, more legible touch, with some rounded lines.
                  </p>
                  <p className='desc'><span className='desc-topic'>Principles used:</span> Image vectorization, shading, gradient.
                  </p>
                </div>
              </motion.div>
              
              <motion.div className="card-item"
              variants={itemSkills}
              transition={itemSkills.transition}>  
                <img src={corelPrint2} className='print ajust-print' />
                <div className="card-description">
                  <p className='desc'>
                    Each icon on this site was handmade by me, using image vectorization processes and combining characteristic elements.
                  </p>
                  <p className='desc'><span className='desc-topic'>Principles used:</span> Image vectorization, shading, gradient.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
          break;
    default:
      content = null;
  }

  const float = {
    keyTimes: [0,0.5,1], scale: [1,1.06,1],y:[0,1.8,0], transition: {duration:3, ease: "easeInOut", repeat: Infinity} 
  }

  const asideAnm = {
    initial: {opacity:0,height:0,scale:0},
    animate: {opacity:1,height:'auto',scale:1},
    transition: {type: "spring", stiffness: 150, damping: 20},
    exit: {opacity: 0,width:0,scale:0}
  }

  return (
      <motion.section variants={fadeIn} id='skills' >

        <motion.div  
        layoutId={selectedId}
        className="triangle"
        variants={containerSpring}
        initial={containerSpring.hidden}
        animate={containerSpring.visible}
        transition={{type: "spring", stiffness: 100, damping: 15 }}
        exit={{ scale:0, transition: { staggerChildren: 0.15, ease:'circIn'}}}>
          <motion.div 
          className="top" 
          variants={galery}
          >
            <motion.div onClick={()=> handleElement(1)}
            className={active === 1 ? 'active-icon' : (active > 1 ? (isHovered && active !== 1 ? 'noblur' : 'blur-icon') : '')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} 
            animate={active === 1 ? '' : (isHovered ? '' : float)}
            >
              <motion.img
              whileHover={{scale:1.1}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              whileTap={tap}
              src={html}
              className='skills-img'
              />
            </motion.div>

            <motion.div onClick={()=> handleElement(2)}
            className={active === 2 ? 'active-icon' : (active === 1 || active === 3 || active === 4 || active === 5 || active === 6 || active === 7 || active === 8 ? (isHovered2 && active !== 2 ? 'noblur' : 'blur-icon') : '')}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            animate={active === 2 ? '' : (isHovered2 ? '' : float)}
            >
              <motion.img
              whileHover={{scale:1.1}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              whileTap={tap}
              src={reactIcon}
              className='skills-img'
              />
            </motion.div>

            <motion.div onClick={()=> handleElement(3)}
            className={active === 3 ? 'active-icon' : (active === 1 || active === 2 || active === 4 || active === 5 || active === 6 || active === 7 || active === 8 ? (isHovered3 && active !== 3 ? 'noblur' : 'blur-icon') : '')}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            animate={active === 3 ? '' : (isHovered3 ? '' : float)}
            >
              <motion.img
              whileHover={{scale:1.1}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              whileTap={tap}
              src={css}
              className='skills-img'
              />
            </motion.div>
            
          </motion.div>

          <motion.div className="mid" variants={galery}>
            <motion.div onClick={()=> handleElement(4)}
            className={active === 4 ? 'active-icon' : (active === 1 || active === 2 || active === 3 || active === 5 || active === 6 || active === 7 || active === 8 ? (isHovered4 && active !== 4 ? 'noblur' : 'blur-icon') : '')}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
            animate={active === 4 ? '' : (isHovered4 ? '' : float)}>
              <motion.img
              src={photoshop}
              className='skills-img'
              whileHover={{scale:1.1}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              whileTap={tap}
              
              />
            </motion.div>

            <motion.img 
            src={skillsblue} 
            className='skills-img center-icon'
            />

            <motion.div onClick={()=> handleElement(5)}
            className={active === 5 ? 'active-icon' : (active === 1 || active === 2 || active === 3 || active === 4 || active === 6 || active === 7 || active === 8 ? (isHovered5 && active !== 5 ? 'noblur' : 'blur-icon') : '')}
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
            animate={active === 5 ? '' : (isHovered5 ? '' : float)}>
              <motion.img
              src={vscode}
              className='skills-img'
              whileHover={{scale:1.1}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              whileTap={tap}
              />
            </motion.div>
          </motion.div>

          <motion.div className="base" variants={galery}>
            <motion.div onClick={()=> handleElement(6)}
            className={active === 6 ? 'active-icon' : (active === 1 || active === 2 || active === 3 || active === 4 || active === 5 || active === 7 || active === 8 ? (isHovered6 && active !== 6 ? 'noblur' : 'blur-icon') : '')}
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
            animate={active === 6 ? '' : (isHovered6 ? '' : float)}>
              <motion.img
              src={figma}
              className='skills-img'
              whileHover={{scale:1.1}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              whileTap={tap}
              
              />
            </motion.div>

            <motion.div onClick={()=> handleElement(7)}
            className={active === 7 ? 'active-icon' : (active === 1 || active === 2 || active === 3 || active === 4 || active === 5 || active === 6 || active === 8 ? (isHovered7 && active !== 7 ? 'noblur' : 'blur-icon') : '')}
            onMouseEnter={() => setIsHovered7(true)}
            onMouseLeave={() => setIsHovered7(false)}
            animate={active === 7 ? '' : (isHovered7 ? '' : float)}>
              <motion.img
              src={reactNative}
              className='skills-img'
              whileHover={{scale:1.1}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              whileTap={tap}
              />
            </motion.div>

            <motion.div onClick={()=> handleElement(8)}
            className={active === 8 ? 'active-icon' : (active === 1 || active === 2 || active === 3 || active === 4 || active === 5 || active === 6 || active === 7 ? (isHovered8 && active !== 8 ? 'noblur' : 'blur-icon') : '')}
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
            animate={active === 8 ? '' : (isHovered8 ? '' : float)}>
              <motion.img
              src={coreldraw}
              className='skills-img'
              whileHover={{scale:1.1}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              whileTap={tap}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {selectedId !== null && (
            <motion.aside
            key={selectedId}
            layoutId={selectedId}
            variants={asideAnm}
            initial={"initial"}
            animate={"animate"}
            exit={asideAnm.exit}
            transition={asideAnm.transition}
            className='aside-card'
            >
              {content}
            </motion.aside>
          )}
        </AnimatePresence>
        

      </motion.section>
  )
}

export default Skills