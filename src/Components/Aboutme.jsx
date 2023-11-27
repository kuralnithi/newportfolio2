import React from 'react';
import pdf from '../assets/kuralcvguvi.pdf'

function Aboutme(props) {
    return (
        <div>

            <div className="container-fluid about-container aboutpage">
                <h1 className="about-heading" >About Me</h1>

                <p className="about-description " >
                    My name is Kural Nithi. I'm a MERN stack developer, I have a strong interest in web development and am looking for opportunities to showcase my skills and take them to the next level. I'm actively seeking a web developer job in an IT company, where I can create responsive, attractive, and interactive websites.
                </p>

                <div className="download-button-container">
                    <a href='https://dicegame-kuralnithi.netlify.app/dicegame/dicegame.html' class="btn btn-download" data-cursor-magnetic data-cursor-color="#61dbfb">Download Resume</a>
                </div>

            </div>

        </div>
    );
}

export default Aboutme;