import React,{useRef, useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './contact.css';
import { motion,AnimatePresence } from 'framer-motion';
import animations from '../animations/animations';
import send from '../../assets/send.png'
import whats from '../../assets/whatsapp.png'
import contactIcon from '../../assets/contact-blue.png'
import {IoIosArrowDown} from 'react-icons/io'

const ContactForm = () => {
    const {containerSpring,galery,hover,containerTech,itemTech} = animations()
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [sent,setSent] = useState(false)
    const float = {
        keyTimes: [0,0.5,1], scale: [1,1.05,1],y:[0,3,1,0,0], transition: {duration:1, ease: "easeInOut", repeat: Infinity} 
      }
    
      const float2 = {
        keyTimes: [0,0.5,1], scale: [1,1.05,1],y:[3,1,0,3], transition: {duration:1, ease: "easeInOut", repeat: Infinity} 
      }

    const onSubmit = async (data) => {
        try {
            const serviceID = 'service_0ph2hir';
            const templateID = 'template_ut3b7cd';
            const userID = '0u5jEFvVePa9Ufu40';

            const emailParams = {
                from_name: data.name,
                reply_to: data.email,
                message: data.message,
                to_email: 'giosantos.artdev@gmail.com',
            };

            await emailjs.send(serviceID, templateID, emailParams, userID);

            alert('Message sent successfully');
            setSent(true)
        } catch (error) {
            console.error('Error sending the message:', error);
        }
    };

    const containerContact = {
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
        <motion.section variants={containerContact} id='contact'
        initial='hidden'
        animate='visible'
        exit={'exit'}>
            <motion.div variants={galery} className="top">
                <img src={contactIcon} className='whats-icon' />
                <h2>Contact Me</h2>
            </motion.div>

            <motion.form 
            onSubmit={handleSubmit(onSubmit)}
            variants={containerSpring}
            initial='hidden'
            animate='visible'
            exit={{ scale:0, transition: { staggerChildren: 0.15, ease:'circIn'}}}
            transition={{type: "spring", stiffness: 100, damping: 15 }}>
                <motion.div className='field'
                variants={galery}>
                    <div>
                        <label>Name:</label>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Required field' }}
                            render={({ field }) => <input {...field} />}
                        />
                    </div>
                    <AnimatePresence>
                        {errors.name && (
                            <motion.aside className='error'
                            variants={galery}
                            exit={galery.exit}>
                                <p>{errors.name.message}</p>
                            </motion.aside>
                        )}
                    </AnimatePresence>
                </motion.div>
                <motion.div className='field'
                variants={galery}>
                    <div>
                        <label>E-mail:</label>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                            required: 'Required field',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid E-mail',
                            },
                            }}
                            render={({ field }) => <input {...field} />}
                        />
                    </div>
                    <AnimatePresence>
                        {errors.email && (
                            <motion.aside className='error'
                            variants={galery}
                            exit={galery.exit}>
                                <p>{errors.email.message}</p>
                            </motion.aside>
                        )}
                    </AnimatePresence>
                </motion.div>
                <motion.div className='field'
                variants={galery}>
                    <div>
                        <label>Message:</label>
                        <Controller
                            name="message"
                            control={control}
                            rules={{ required: 'Required field', maxLength: { value: 500, message: 'The message is too long' } }}
                            render={({ field }) => <textarea {...field} />}
                        />
                    </div>
                    <AnimatePresence>
                        {errors.message && (
                            <motion.aside className='error'
                            variants={galery}
                            exit={galery.exit}>
                                <p>{errors.message.message}</p>
                            </motion.aside>
                        )}
                    </AnimatePresence>
                </motion.div>
                <motion.button type='submit' className='about-contact-btn'
                whileHover={hover}>
                    <img src={send} className='send-icon'/>
                    Send
                </motion.button>

            </motion.form>

            <motion.div variants={containerSpring} className="whats">
                <motion.p variants={itemTech}>If you want a dynamic conversation,</motion.p> 

                <motion.p variants={itemTech}>
                    send it to my WhatsApp
                    <motion.div className='scroll-arrows' variants={galery}>
                        <motion.span animate={float}><IoIosArrowDown/></motion.span>
                        <motion.span animate={float2}><IoIosArrowDown/></motion.span>
                    </motion.div>
                </motion.p>
                
                <motion.a variants={itemTech}
                className='about-contact-btn' 
                href="https://api.whatsapp.com/send?phone=5583987877845&text="
                target='blank'
                whileHover={hover}>
                    <img src={whats} className='whats-icon'/>
                    WhatsApp
                </motion.a>
            </motion.div>
        </motion.section>
    );
};

export default ContactForm;
