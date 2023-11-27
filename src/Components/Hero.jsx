import React, { useEffect, useRef } from 'react';
import pdf from '../assets/kuralcvguvi.pdf'
import Typed from 'typed.js'

function Hero(props) {
    
    const el = useRef(null);
    const el2 = useRef(null);
    const el3 = useRef(null);

useEffect(()=>{


  const typed = new Typed(el.current, {
  
    strings: ["Hi <br /> I am <br /> Kuralnithi","A <br /> MERN-Stack  <br /> Developer"],
    typeSpeed: 120,
    backSpeed: 50,
    loop: true


  });

    

},[])


    return (
        <div className='hero'>

            <div className="container-fluid textarea ">


                <div ref={el} className='typtxt typed text-center '></div>

                




                    <a href="https://dicegame-kuralnithi.netlify.app/dicegame/dicegame.html" download="KuralNithi_Resume.pdf" className="btn btn-download resume"  data-cursor-magnetic data-cursor-color="#61dbfb">Download Resume</a>
              

            </div>



        </div>
    );
}

export default Hero;