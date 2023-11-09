
const animations = () =>{


  const fadeIn = {
      
      hidden: { opacity: 0, y:20},
      visible: { opacity: 1 , y:0},
      transition: { duration: 1},
          
  }

  const containerSpring = {
    hidden: { opacity: 0,scale:0},
    visible: {
      scale:1,
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
        type: "spring", stiffness: 100, damping: 15 
      }
    },
    exit: { 
      transition: {
        duration:1.5, 
        staggerChildren: 0.15 ,
        ease:'circIn',
      }
    },
  };

  const container = {
    hidden: { opacity: 0,scale:0},
    visible: {
      scale:1,
      opacity: 1,
      transition: {
        duration:1,
        delayChildren: 0.3,
        staggerChildren: 0.15,
      }
    },
    exit: { 
      transition: {
        duration:1.5, 
        staggerChildren: 0.15 ,
        ease:'circIn',
      }
    },
  };
  
  const item = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
    transition: {
        y: {ease:'linear'},
        opacity: { duration: 1.5 },
    },
  };

  const galery = {
    hidden:{y:'-100%',opacity:0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            opacity: { duration: .5 },
            type: "spring", stiffness: 100, damping: 15 
        },
      },
    exit: { 
      opacity: 0, 
      y: '100%',
      transition: {
          opacity: { duration: .3 },
          ease:'circIn',
      },
    },
  }

  const containerNav = {
    initial: { opacity: 0},
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.15,
      }
    },
    exit: { transition: {duration:1, staggerChildren: 0.15, delayChildren: 0.3 }  },
  };

  const itemNav = {
    initial: { x: '200%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      type: "spring", stiffness: 100, damping: 16 
    },
    exit: {
      opacity:0,
      x:'-150%'
    },
    
  };

  const itemNavRight = {
    initial: { x: '-200%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      type: "spring", stiffness: 100, damping: 16 
    },
    exit: {
      opacity:0,
      x:'150%',
      ease:'linear'
    }
  }

  const tap = {
    scale:0.7,
    transition:{ type: "spring", stiffness: 400, damping: 17 }
  }

  const iconHover = {
    animate: { scale:1.1 },
    transition:{ type: "spring", stiffness: 400, damping: 17 }
  }

  const containerSkills = {
    initial: { opacity: 0},
    animate: {
      opacity: 1,
      transition: {
        delayChildren: .5,
        staggerChildren: 0.5,
      }
    },
    exit: { transition: {duration:1, staggerChildren: 0.15, delayChildren: 0.3 }  },
  };

  const itemSkills = {
    initial: { x: '200%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      type: "spring", stiffness: 100, damping: 16 
    },
    exit: {
      opacity:0,
      x:'-150%'
    },
    
  };

  const containerTech = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
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
    
  const itemTech = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
    exit: { 
      opacity: 0, 
      y: '100%',
      transition: {
          ease:'circIn',
      },
    },
  }

  const hover = {
    scale:1.15,
    transition:{ type: "spring", stiffness: 500, damping: 20 }
  }

  return {
    fadeIn
    ,item
    ,container
    ,galery
    ,containerNav
    ,itemNav
    ,itemNavRight
    ,tap
    ,iconHover
    ,containerSkills
    ,itemSkills
    ,containerTech
    ,itemTech
    ,hover
    ,containerSpring
  }
}

export default animations