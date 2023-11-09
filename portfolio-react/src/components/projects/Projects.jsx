import React,{useState,useEffect} from 'react'
import animations from '../animations/animations'
import './projects.css'
import { motion,AnimatePresence } from 'framer-motion'
import fifth from '../../assets/projects/fifth-mockup.png'
import dashboard from '../../assets/projects/dashboard-mockup.png'
import ilovejp from '../../assets/projects/ilovejp-mockup.png'
import faccia from '../../assets/projects/faccia-mockup.png'
import genedilson from '../../assets/projects/genedilson-mockup.png'
import itrips from '../../assets/projects/itrips-mockup.png'
import itripsVideo from '../../assets/projects/itrip-video.mp4'
import projectsIcon from '../../assets/projects-blue.png'
import {FaRegFileCode} from 'react-icons/fa6'
import reactIcon from '../../assets/tech/react.png'
import reactNativeIcon from '../../assets/tech/react-native.png'
import css from '../../assets/tech/css.png'
import wordpress from '../../assets/tech/wordpress.png'
import {FaGithubSquare} from 'react-icons/fa'
import {DiGithubFull} from 'react-icons/di'
import {HiExternalLink} from 'react-icons/hi'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import {MdSpaceDashboard} from 'react-icons/md'
import {FaHamburger} from 'react-icons/fa'
import {MdTravelExplore} from 'react-icons/md'
import {FaTooth} from 'react-icons/fa'
import {BiSolidPlaneAlt} from 'react-icons/bi'
import {FaPenAlt} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'
import Carousel from '../carousel/Carousel'
import { useProjects } from './ProjectsContext'
import VanillaTilt from 'vanilla-tilt'
import { Link } from 'react-router-dom'
import {BiLinkAlt} from 'react-icons/bi'
import {FaRegPlayCircle} from 'react-icons/fa'
import {TbArrowBack} from 'react-icons/tb'

function Projects() {
    const {containerSpring,container,galery,containerTech,itemTech,tap} = animations()
    const {selectedId,setSelectedId,active,setActive} = useProjects();
    const [itrip,setItrip] = useState(null)

    const hover = {
        scale:1.15,
        transition:{ type: "spring", stiffness: 500, damping: 20 }
    }

    const items = [
        { id: 1,
        img: fifth,
        contentDescription:'The Fifth Burger project, is a web application entirely made in React to meet the demand of a delivery hamburger shop, its concept consists of adding items to the bag in object format, and transformed into a string to be redirected to the stores WhatsApp.',
        title: <div className='title-icon'><FaHamburger size={17}/> Fifth Burger</div>,
        technologies:
        <motion.div variants={containerTech} className='technologies'>
            <Link to={'/skills'}>
                <motion.img whileHover={hover} variants={itemTech} src={reactIcon} className='tech' onClick={()=> setSelectedId(null)}/>
            </Link> 
            <Link to={'/skills'}><motion.img whileHover={hover} onClick={()=> setSelectedId(null)} variants={itemTech} src={css} className='tech'/></Link>
        </motion.div>,
        link: 'https://mellifluous-souffle-d94d4c.netlify.app/'
        },

        { id: 2,
        img: dashboard,
        contentDescription:'The Dashboard project was created with the aim of practicing alternating themes, light and dark. It was entirely done in React, using the useState hook, and CSS for styling. (Project information and actions are entirely illustrative)',
        title: <div className="title-icon"><MdSpaceDashboard/>Dashboard</div>,
        technologies:
        <motion.div variants={containerTech} className='technologies'>
            <Link to={'/skills'}><motion.img whileHover={hover} onClick={()=> setSelectedId(null)} variants={itemTech} src={reactIcon} className='tech'/></Link> 
            <Link to={'/skills'}><motion.img whileHover={hover} onClick={()=> setSelectedId(null)} variants={itemTech} src={css} className='tech'/></Link>
        </motion.div>,
        link: 'https://curious-praline-7b0317.netlify.app/' },

        { id: 3,
        img: ilovejp,
        contentDescription:'The I Love JP project was created with the aim of promoting tourism in my hometown, pointing out the main tourist attractions and best destinations. It was one of my first projects using React and CSS.',
        title: <div className="title-icon"><MdTravelExplore/>I Love JP</div>,
        technologies:
        <motion.div variants={containerTech} className='technologies'>
            <Link to={'/skills'}><motion.img whileHover={hover} onClick={()=> setSelectedId(null)} variants={itemTech} src={reactIcon} className='tech'/></Link> 
            <Link to={'/skills'}><motion.img whileHover={hover} onClick={()=> setSelectedId(null)} variants={itemTech} src={css} className='tech'/></Link>
        </motion.div>,
        link: 'https://adorable-melomakarona-7fae78.netlify.app/' },

        { id: 4,
        img: faccia,
        contentDescription:'The Faccia Odontologia project was my first on-demand project, all done in React. It was created with the aim of promoting the Faccia dental clinic as a landing page, welcoming the user and redirecting them to WhatsApp.',
        title: <div className="title-icon"><FaTooth size={14}/>Faccia Odontologia</div>,
        technologies:
        <motion.div variants={containerTech} className='technologies'>
            <Link to={'/skills'}><motion.img whileHover={hover} onClick={()=> setSelectedId(null)} variants={itemTech} src={reactIcon} className='tech'/></Link> 
            <Link to={'/skills'}><motion.img whileHover={hover} onClick={()=> setSelectedId(null)} variants={itemTech} src={css} className='tech'/></Link>
        </motion.div>,
        link: 'https://facciaodontologiajp.com.br/' },

        { id: 5,
        img: itrips,
        contentDescription:'The iTrips project was my first project in React Native, I did it with the intention of helping me organize my trip. It includes all flight times, all rentals, such as car and accommodation, and tours around the place.',
        title: <div className="title-icon"><BiSolidPlaneAlt/>I Trips</div>,
        technologies: 
        <motion.div variants={containerTech} className='technologies'>
            <Link to={'/skills'}><motion.img whileHover={hover} onClick={()=> setSelectedId(null)} variants={itemTech} src={reactNativeIcon} className='tech'/></Link>
        </motion.div>,
        link: '' },

        { id: 6,
        img: genedilson,
        contentDescription:'The Genedilson project was another on-demand project, my first WordPress project. The client wanted a blog that he could add and edit with posts himself, and WordPress was a great solution.',
        title: <div className="title-icon"><FaPenAlt size={15}/>Genedilson</div>,
        technologies:
        <motion.div variants={containerTech} className='technologies'>
            <Link to={'/skills'}><motion.img whileHover={hover} onClick={()=> setSelectedId(null)} variants={itemTech} src={wordpress} className='tech'/></Link>
        </motion.div>,
        link: 'https://genedilsonfm.com.br/' }
    ];

    const handleNext = (item)=>{
        setSelectedId(item.id+1)
        setActive(item.id)
    }

    const handlePrev = (item)=>{
        setSelectedId(item.id-1)
        setActive(item.id-2)
    }

    useEffect(()=>{
        VanillaTilt.init(document.querySelectorAll('.galery-card'),{
            max: 5,
            speed: 10,
            glare: true,
            'max-glare': 0.1
        })
    })

    return (
        <motion.div>
            <motion.section variants={container} id='galery'
            initial="hidden"
            animate="visible"
            exit={'exit'}>
                
                <motion.h1
                style={{fontSize:'2rem'}}
                className='title'
                variants={galery}>
                    <img src={projectsIcon} className='icon'alt="" />
                        My Projects
                </motion.h1>
                

                <motion.div 
                className="galery"
                variants={container}
                initial="hidden"
                animate="visible"
                exit={'exit'}>
                    <Carousel>
                            {items.map(item => (

                                <motion.div
                                layoutId={item.id}
                                onClick={() => setSelectedId(item.id)}
                                style={{ cursor: 'pointer' }}
                                className='galery-card'
                                variants={galery}
                                >
                                    <motion.img
                                    key={item.id}
                                    whileHover={{scale:1.04}}
                                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                                    className='galery-img'
                                    src={item.img}/>
                                    <h3>{item.title}</h3>
                                </motion.div>
                                
                            ))}
                    </Carousel>
                    <div className="carousel-btn next"></div>
                </motion.div>

            </motion.section>

            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        key={selectedId}
                        layoutId={selectedId}
                        initial={{ scale:0 }}
                        animate={{ scale:1 }}
                        exit={{ opacity: 0 }}
                    >
                        {items.map(item => {
                            if (item.id === selectedId) {
                                return (
                                    <div key={item.id} className='project-card-container' onClick={() => setSelectedId(null)}>
                                        <motion.div className='project-card'
                                        initial={{ scale:.55 }}
                                        animate={{ scale:1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={(e) => e.stopPropagation()}>
                                            <motion.div
                                            variants={containerSpring}
                                            initial="hidden"
                                            animate="visible"
                                            exit={'exit'}>
                                                <motion.button className='close-btn' onClick={() => setSelectedId(null)}
                                                whileHover={{scale:1.5}}
                                                >
                                                    <IoClose/>
                                                </motion.button>
                                                
                                                {item.id < items.length &&(
                                                    <motion.button className='arrow-btn next-btn' onClick={()=> handleNext(item)}
                                                    whileHover={{scale:1.5}}
                                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                                                        <IoIosArrowForward/>
                                                    </motion.button>
                                                )}
                                                
                                                {item.id > 1 &&(
                                                    <motion.button className='arrow-btn prev-btn' onClick={()=> handlePrev(item)}
                                                    whileHover={{scale:1.5}}
                                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                                                        <IoIosArrowBack/>
                                                    </motion.button>
                                                )}
                                                
                                                
                                                <motion.div className='project-card-content'>
                                                    <img src={item.img} className="project-card-img"/>
                                                    <div className='project-card-info'>
                                                        <motion.div>
                                                            <motion.h2>{item.title}</motion.h2>
                                                            <motion.p className='project-description'>{item.contentDescription}</motion.p>
                                                        </motion.div>

                                                        <div style={{display:'flex',gap:'1rem'}}>
                                                            <motion.div className='technologies-card'
                                                            variants={containerTech}
                                                            initial="hidden"
                                                            animate="visible">
                                                                <motion.div style={{display:'flex',flexDirection:'column',gap:'.5rem'}} variants={itemTech}>
                                                                    <motion.h3 style={{display:'flex',alignItems:'center',gap:'8px'}}>
                                                                        <FaRegFileCode size={20}/>Technologies
                                                                    </motion.h3>
                                                                    {item.technologies}
                                                                </motion.div>
                                                            </motion.div>
                                                        </div>

                                                        {item.link !== '' ? (
                                                            <motion.a
                                                            href={item.link}
                                                            target='#blank'
                                                            variants={galery}
                                                            className='site-link'
                                                            whileHover={hover}>
                                                                Check Out
                                                                <BiLinkAlt size={22} color='#3C91F7'/>
                                                            </motion.a>
                                                        ):(
                                                            <motion.div
                                                            variants={galery}
                                                            className='site-link'
                                                            whileHover={hover}
                                                            onClick={()=>setItrip(1)}>
                                                                Check Out
                                                                <FaRegPlayCircle color='#3C91F7'/>
                                                            </motion.div>
                                                        )}
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

                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Projects