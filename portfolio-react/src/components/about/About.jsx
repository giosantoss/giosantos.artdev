import React,{useState,useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useViewportScroll, useTransform , AnimatePresence, delay  } from "framer-motion";
import './about.css'
import Me from './Me'
import logo from '../../assets/about/gs-logo-white.png'
import firstLogo from '../../assets/about/gs-first.png'
import jogoDaVelha from '../../assets/about/jogodavelha.png'
import meta from '../../assets/about/meta.png'
import cruzeiro from '../../assets/about/sistemas_para_internet.png'
import { Link } from 'react-router-dom';
import contactIcon from '../../assets/contact-blue.png'
import G from '../../assets/about/g.png'
import S from '../../assets/about/s.png'
import determined from '../../assets/about/determined-icon.png'
import knowledge from '../../assets/about/knowledge.png'
import internship from '../../assets/about/internship.png'
import {IoIosArrowDown} from 'react-icons/io'

function About() {  
  const { scrollYProgress } = useViewportScroll()

  const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"]);
  const translateYimg = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"]);
  
  //animação de scale para telas normais
  const scale = useTransform(scrollYProgress, [0, 1], [1, -1.5]);
  //animação de opacity para telas normais
  const opacity = useTransform(scrollYProgress, [0, 1], [1, -4]);
  
  //refs para acionar animações de entrada de divs ao longo da pagina ao rolar
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.55, 
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.55,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.55,
  });

  const containerAnimate = {
    hidden: { opacity: 0, scale: 0.78 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration:.4,
        delayChildren: 0.5,
        staggerChildren: 0.15
      }
    },
    exit:{
      opacity:0,
      transition: {
          duration: 0.5,
          staggerChildren: 0.2
      }
    }
  }
    
  const itemAnimate = {
    hidden: { y: 150, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration:1,
    },
    exit: {
        y: "220%",
        opacity:0,
        scale:0,
        transition: {
            duration: 0.5,
            ease: "circIn"
        }
    }
  }

  const containerText = {
    hidden: {
      y: "20%"
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    },
    exit: {
        y: "20%",
        transition: {
            duration: 0.5,
            ease: "linear"
        }
    }
  }

  const word = {
    hidden: {
      y: "220%"
    },
    visible: {
        y: 0,
        transition: {
            type: "spring", 
            damping: 30
        }
    },
    exit: {
        y: "220%",
        transition: {
            duration: 0.5,
            ease: "circIn"
        }
    }
  }
  
  const float = {
    keyTimes: [0,0.5,1], scale: [1,1.05,1],y:[0,3,1,0,0], transition: {duration:1, ease: "easeInOut", repeat: Infinity} 
  }

  const float2 = {
    keyTimes: [0,0.5,1], scale: [1,1.05,1],y:[3,1,0,3], transition: {duration:1, ease: "easeInOut", repeat: Infinity} 
  }

  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    // Verifica se a página está no final
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const distanceEnd = 250

      // Verifica se o scroll chegou ao final da página
      if (windowHeight + scrollPosition >= documentHeight - distanceEnd) {
        setIsAtEnd(true);
      } else {
        setIsAtEnd(false);
      }
    };

    // Adiciona um ouvinte de evento de rolagem quando o componente monta
    window.addEventListener('scroll', handleScroll);

    // Remove o ouvinte de evento de rolagem quando o componente desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='about-content'> 

      <motion.section
      id='about'
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
      transition={{ duration:1 }}
      >

        <motion.div className='greeting'
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={containerText} 
        style={{
          opacity: opacity,
          y: translateY,
          scale:scale
        }}
        >

          <motion.div variants={word}>
            <motion.aside
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={containerText}>
              <motion.p variants={word}>
                Hi! My name is
              </motion.p>
              <motion.p variants={word} className='name'>
                <img src={G} className='letter'/>iovanni <img src={S} className='letter'/>antos
              </motion.p>
              <motion.p variants={word} className='vocation'>
                Front-End Developer
              </motion.p>
            </motion.aside>
          </motion.div>

          <motion.div variants={word}>
            <motion.aside
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={containerText}>
              <motion.p variants={word}>
                I'm <span className="vocation">Brazilian</span>,
              </motion.p>
              <motion.p variants={word}>
                and I live in João Pessoa.
              </motion.p>
            </motion.aside>
          </motion.div>
          
          
        </motion.div> 

        <motion.img src={logo} className='logo'
        initial={{ opacity: 0, scale:1.5 }}
        animate={{ opacity:1,scale:1 }}
        exit={{ opacity:0,scale:1.3 }}
        transition={{ duration:1 }}
        style={{
          opacity: opacity,
          y: translateYimg,
        }}/>


        <Me/>

        <AnimatePresence>
          {!isAtEnd && (
            <motion.div className='scroll'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={containerText}>
              <motion.div variants={word}>
              Scroll
              </motion.div>

              <motion.div className='scroll-arrows' variants={word}>
                <motion.span animate={float}><IoIosArrowDown/></motion.span>
                <motion.span animate={float2}><IoIosArrowDown/></motion.span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isAtEnd &&(
            <Link to={'/contact'} className="contact-stick">
              <motion.div
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={containerText}
              whileHover={{scale:1.2}}
              whileTap={{scale:1}}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <motion.button className='about-contact-btn' variants={word}>
                  <img src={contactIcon} className='about-contact-icon'/>
                  Contact Me
                </motion.button>
              </motion.div>
            </Link>
          )}
        </AnimatePresence>
      </motion.section>


      <div className='page' ref={ref}>

        <motion.div className='about-container'
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        exit={inView ? 'exit' : 'visible'}
        variants={containerAnimate}>

          <motion.div className="page-item"
          variants={itemAnimate}>

            <motion.div className='page-img-container'>
              <img src={firstLogo} alt="" className='page-img' />
              <label>First GS Logo (made in 2015)</label>
            </motion.div>
            
            <p className='page-description'>I'm passionate about design, and I've been playing with design programs like Corel Draw since I was 15 years old (2015), I made my first logo based on my initials.</p>
            
          </motion.div>

          <motion.div className="page-item"
          variants={itemAnimate}>

            <motion.div className='page-img-container'>
              <img src={jogoDaVelha} alt="" className='page-img' />
              <label>First Python Project (made in 2018)</label>
            </motion.div>
            
            <p className='page-description'>But at the beginning of my academic life (2018) I tried to follow the path of Computational Mathematics, in which I worked with the Python language, but it wasn't the what I expected. I then decided to try Physical Education (2020), but after 2 years I realized that my calling was to be a Front End developer.</p>
          </motion.div>
        
        </motion.div>
        
      </div>

      <div className="page" ref={ref2}>

        <motion.div className='about-container'
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        exit={inView2 ? 'exit' : 'visible'}
        variants={containerAnimate}>

          <motion.div className="page-item"
          variants={itemAnimate}>
            
            <p className='page-description'>In 2022 I started a course called Internet Systems, on 'Cruzeiro do Sul', and learned the concepts of HTML and CSS, and it was love at first sight, soon after I learned JavaScript, and then I got into React.js, which is my favorite language.</p>            
            
            <motion.div className='page-img-container'>
              <img src={cruzeiro} alt="" className='page-img' />
              <label>Internet Systems Course (since 2022)</label>
            </motion.div>
            
          </motion.div>

          <motion.div className="page-item"
          variants={itemAnimate}>

            
            <p className='page-description'>I started my knowledge of React.js on the Coursera platform, within Front End Developer Professional Certificate from Meta course</p>
            
            <motion.div className='page-img-container'>
              <img src={meta} alt="" className='page-img' />
              <label>Meta Course (since 2022)</label>
            </motion.div>
          </motion.div>
        
        </motion.div>
      </div>

      <div className="page" ref={ref3}>

        <motion.div className="about-container"
        initial="hidden"
        animate={inView3 ? 'visible' : 'hidden'}
        exit={inView3 ? 'exit' : 'visible'}
        variants={containerAnimate}>
          <motion.div className="page-item"
          variants={itemAnimate}>
            <img src={determined} className='end-page-img' />
            <p>I consider myself very <span className='vocation'>determined</span> in my goals, <span className='vocation'>communicative</span>, helpful, and I love <span className='vocation'>working in groups</span>.</p>
          </motion.div>
          <motion.div className="page-item"
          variants={itemAnimate}>
            <img src={knowledge} className='end-page-img' />
            <p>I have <span className='vocation'>thirst for knowledge</span>, because I believe that knowledge is exponential growth, and we should <span className='vocation'>never stop learning</span>.</p>
          </motion.div>
          <motion.div className="page-item"
          variants={itemAnimate}>
            <img src={internship} className='end-page-img' />
            <p>Today I'm 1 year away from graduating, and I am currently looking for an <span className='vocation'>internship</span> in this area, to <span className='vocation'>work remotely</span>.</p>
          </motion.div>
          <motion.div className="page-item"
          variants={itemAnimate}>
            <p>If you sympathize with my story, I would be happy to have a conversation.</p>    
            <Link to={'/contact'} >
              <motion.button className='about-contact-btn'
              whileHover={{scale:1.2}}
              whileTap={{scale:1}}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <img src={contactIcon} className='about-contact-icon'/>
                Contact Me
              </motion.button>
            </Link>          
            
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

export default About;