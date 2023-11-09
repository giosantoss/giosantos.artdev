import {React,useState,useEffect} from 'react'
import { useLocation ,Link } from 'react-router-dom'
import './nav.css'
import { motion } from 'framer-motion';
import animations from '../animations/animations';
import projectsIcon from '../../assets/icons/projects-nav.png'
import aboutIcon from '../../assets/icons/about-nav.png'
import skillsIcon from '../../assets/icons/skills-nav.png'
import experienceIcon from '../../assets/icons/experience-nav.png'
import knowledgeIcon from '../../assets/icons/knowledge-nav.png'
import contactIcon from '../../assets/icons/contact-nav.png'
import home from '../../assets/icons/home.png'
import { useProjects } from '../projects/ProjectsContext';

function Nav() {
  const {setSelectedId,setIsOpen,isOpen} = useProjects();
  const { tap } = animations();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleClicks = ()=>{
    setSelectedId(null)
    if(isOpen){
      setIsOpen(!isOpen)
    }
  }

  const container = {
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.15
      }
    },
    exit: { transition: {duration:1, staggerChildren: 0.15, delayChildren: 0.3 }  },
  };
  
  const item = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    transition: {
      duration: 0.2
    },
    exit:  { y: '100%', opacity: 0 },
  };

  const itemMobile = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
    transition: {
      duration: 0.2
    },
    exit:  { x: '100%', opacity: 0 },
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const contents = [
    { id: 1, path: '/', icon: home },
    { id: 2, path: '/projects', name: 'Projects', icon: projectsIcon },
    { id: 3, path: '/about', name: 'About', icon: aboutIcon },
    { id: 4, path: '/skills', name: 'Skills', icon: skillsIcon },
    { id: 5, path: '/experience', name: 'Experience', icon: experienceIcon },
    { id: 6, path: '/knowledge', name: 'Knowledge', icon: knowledgeIcon },
    { id: 7, path: '/contact', name: 'Contact', icon: contactIcon },
  ]

  return (
    <motion.nav id='nav' variants={container} initial="hidden" animate="visible" exit="hidden">

      {contents.map(content =>(
        <motion.div 
        variants={isOpen ? itemMobile : item} 
        exit={isOpen ? itemMobile : item.exit} className='navigate' 
        onClick={handleClicks}
        >
          {active !== content.path &&(
            <p className='description'>{content.name}</p>
          )}
          
          <Link
          key={content.id}
          to={content.path}
          onClick={() => setActive(content.path)}
          className={active === content.path ? 'active nav-item' : 'nav-item'}
          >
            <motion.div
            whileHover={active !== content.path ? {scale:1.4} : {scale:1.05}}
            whileTap={tap}
            style={{display:'flex',gap:'5px'}}
            >
              <motion.img src={content.icon} className='nav-icon' alt="" />
              
              {active === content.path ?(
                <motion.div 
                className={active === content.path ? 'nav-name' : 'nav-name-none'}
                initial={{opacity:0,y:-10,scale:0}}
                animate={{opacity:1,y:0,scale:1}}>
                  {content.name}
                </motion.div>
              ):(
                <motion.div
                className={active === content.path ? 'nav-name' : 'nav-name-none'}
                initial={{opacity:1,scale:1}}
                animate={
                  isOpen ? ({opacity:1,width:1,scale:1})
                  : ({opacity:0,width:0,scale:0})
                  }>

                  {content.name}
                </motion.div>
              )}
            </motion.div>  
          </Link>
        </motion.div>
      ))}
      
    </motion.nav>

    
  );
}

export default Nav