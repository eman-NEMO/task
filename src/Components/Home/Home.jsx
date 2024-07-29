import React from 'react'
import { motion } from 'framer-motion';
export default function Home() {
    const socialMedia = [
        { name: 'facebook', iconClass: 'fa-facebook-f' },
        { name: 'twitter', iconClass: 'fa-twitter' },
        { name: 'instagram', iconClass: 'fa-instagram' },
        { name: 'linkedin', iconClass: 'fa-linkedin' }
    ];
    const variants = {
        fromTop: {
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 }
        },
       
        fromIts: {
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 }
        },
        fromLeft: {
            hidden: { opacity: 0, x: -350 },
            visible: { opacity: 1, x: 0 }
        },
       
    };
    const pageTransition = {
        in: {
          opacity: 1,
          x: 0
        },
        out: {
          opacity: 0,
        }
      };
      
    return (<>
     <motion.div
    className='container '
    initial="out"
    animate="in"
    exit="out"
    variants={pageTransition} 
    transition={{ type: "tween", duration: .7 ,delay:.3 }}
  >
        <div className='Home_content' id='Home'>
        <motion.div variants={variants.fromTop} initial="hidden" animate="visible" transition={{ delay: .5 ,duration:.5 }}>
            <div className='text text-center'>
                <p>BECOME A PART OF THE
                    <span className="fade-text">  AMAZING </span>
                </p>
                <p>GALAXY WORLD</p>
            </div>
            </motion.div>
            <motion.div variants={variants.fromLeft} initial="hidden" animate="visible" transition={{ delay: .9 ,duration:.6 }}>
            <div className='text-center '>
                <p className='description'>
                    Welcome to Explore the Cosmos, your ultimate destination for all things space! Whether you're an avid astronomer, a curious student, or simply fascinated by the wonders of the universe, our website offers a wealth of information and resources to fuel your passion for space exploration
                </p>
            </div>
            </motion.div>
            <motion.div variants={variants.fromLeft} initial="hidden" animate="visible" transition={{ delay: 1.2 ,duration:.7 }}>
            <div className='d-flex justify-content-center mt-5'>
                <button className='btn  rounded-4'> Begin Your Journey</button>

            </div>
            </motion.div>
            <motion.div variants={variants.fromIts} initial="hidden" animate="visible" transition={{ delay: 1.7 ,duration:.8 }}>
            <div className="social mt-5 d-flex justify-content-center mb-5">
            {socialMedia.map((platform, index) => (
                <div
                    key={index}
                    className="social_icon rounded-circle d-flex justify-content-center align-items-center"
                >
                    <i className={`fa-brands ${platform.iconClass} text-center`}></i>
                </div>
            ))}
        </div>
        </motion.div>
        </div>
        </motion.div>
    </>
    )
}
