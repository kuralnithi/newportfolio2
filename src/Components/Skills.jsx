import React, {useEffect } from 'react';
// import { Cursor } from 'react-creative-cursor';
import jss from '../../public/skill-logo/js.png'
import css from '../../public/skill-logo/css.png'
import htmll from '../../public/skill-logo/html.png'
import boot from '../../public/skill-logo/bootstrap.png'
import reactl from '../../public/skill-logo/react.png'
import mongodb from '../../public/skill-logo/mongodb.png'
import node from '../../public/skill-logo/node.png'
import express from '../../public/skill-logo/express.png'
import mysql from '../../public/skill-logo/mysql-logo.png'
import aws from '../../public/skill-logo/aws.png'

function Skills(props) {
   



    return (

    
    
    
        <div className='container-fluid skillpage text-center'>
            
            <div className="container-fluid text-center ">
                <h1 className='p-5'>My Skills</h1>
                <ul className="list-group">
               
                    <li className="list-group-item skill-list " data-cursor-magnetic  data-cursor-background-image={htmll} data-cursor-size="200px">HTML</li>
                    <li className="list-group-item skill-list"data-cursor-magnetic data-cursor-background-image={css} data-cursor-size="200px" >CSS</li>
                    <li className="list-group-item skill-list"data-cursor-magnetic data-cursor-background-image={jss} data-cursor-size="200px">JavaScript</li>
                    <li className="list-group-item skill-list"data-cursor-magnetic data-cursor-background-image={boot} data-cursor-size="200px">Bootstrap</li>
                    <li className="list-group-item skill-list"data-cursor-magnetic data-cursor-background-image={reactl} data-cursor-size="200px">React</li>
                    <li className="list-group-item skill-list"data-cursor-magnetic data-cursor-background-image={node} data-cursor-size="200px">Node.js</li>
                    <li className="list-group-item skill-list"data-cursor-magnetic data-cursor-background-image={express} data-cursor-size="200px">Express</li>
                    <li className="list-group-item skill-list"data-cursor-magnetic data-cursor-background-image={mongodb} data-cursor-size="200px">MongoDB</li>
                    <li className="list-group-item skill-list"data-cursor-magnetic data-cursor-background-image={mysql} data-cursor-size="200px">Mysql</li>
                    <li className="list-group-item skill-list"data-cursor-magnetic data-cursor-background-image={aws} data-cursor-size="200px">AWS</li>
               
                </ul>
            </div>
            


            
        </div>
    
    
    );


    
}

export default Skills;

