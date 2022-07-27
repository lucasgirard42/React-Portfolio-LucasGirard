import { useEffect, useState, useRef } from 'react';
import { config, useSpring, animated } from 'react-spring';
import { Autoplay } from 'swiper';
import './Navbar.css';



function Navbar() {

    const n = useRef(0)
    const props = useSpring({
        from: {y: -100},
       config: {duration: 800},
       loop:{ y:0},
    })
    return <animated.div style={{
        position:'fixed',
        width: '100%',
        
        ...props}} >
        
        <div className='navigation'>
            <div className='grid-item1'>
                <p>LUCAS GIRARD</p>
            </div>
            <div className='grid-item2'>
                <ul>
                    <li><a>A propos</a></li>
                    <li><a>Mes services</a></li>
                    <li><a>Projets</a></li>
                    <li><a>Contact</a> </li>
                </ul>
            </div>
        </div>
        </animated.div>
    
}


  

  
  

export default Navbar;


{/* 
*/}