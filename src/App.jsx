import { Route, Routes,Link } from 'react-router-dom'
import { Suspense, lazy } from 'react';
// import AnimatedCursor from "react-animated-cursor"
// import { Cursor } from 'react-creative-cursor';
// import 'react-creative-cursor/dist/styles.css';

import './App.css'
const Hero = lazy(()=>import( './Components/Hero.jsx'));
const Skills =lazy(()=>import('./Components/Skills.jsx'));
const Projects =lazy(()=>import('./Components/Projects.jsx'));
const Aboutme =lazy(()=>import('./Components/Aboutme.jsx'));
const Contact =lazy(()=>import('./Components/Contact.jsx'));

function App() {

let routes =
<Routes>
  <Route path='/' Component ={Hero} />
  <Route path='/Skills' Component={Skills}  />
  <Route path='/Projects' Component={Projects } />
  <Route path='/About' Component={ Aboutme } />
<Route path='/Contact' Component={Contact } />
</Routes >
  return (
    <>
   {/* <AnimatedCursor  
      innerSize={20}
      outerSize={25}
      color='255, 204, 51'
      outerAlpha={0.2}
      innerScale={2}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type ="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
       */}

      {/* <Cursor isGelly={true} animationDuration={0.7} cursorBackgrounColor="#98FF98" exclusionBackgroundColor="#" cursorInnerColor="#"  /> */}

      <nav className="navbar navbar-expand-xl navbar-dark bg-dark " >

        <div className="container-fluid">

          <Link to=" " className="navbar-brand" href="#"><i className="bi bi-person-circle "></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarDark">
            <ul className="navbar-nav  mb-2 mb-xl-0 text-center  ">
              <li className="nav-item  navitems">
                <Link to=" " className="nav-link mx-5" aria-current="page" href="#"data-cursor-color="#61dbfb">Home</Link>
              </li>
              <li className="nav-item  mx-5">
                <Link to="/About " className="nav-link" href="#" data-cursor-magnetic data-cursor-color="#61dbfb">About</Link>
              </li>
              <li className="nav-item  mx-5">
                <Link to="/Skills" className="nav-link" href="#" tabIndex="-1" aria-disabled="true" data-cursor-magnetic data-cursor-color="#61dbfb"  >Skills</Link>
              </li>
              <li className="nav-item  mx-5">
                <Link to="/Projects " className="nav-link" href="#" tabIndex="-1" aria-disabled="true" data-cursor-color="#61dbfb">Projects</Link>
              </li>
              <li className="nav-item  mx-5" >
                <Link to="/Contact " className="nav-link" href="#" tabIndex="-1" aria-disabled="true"data-cursor-color="#61dbfb">Contact</Link>
              </li>
            </ul>
          </div>
        </div >
      </nav >

  <Suspense fallback={<div>loading</div>}>
    {routes}
  </Suspense>
          

    </>
  )
}

export default App
