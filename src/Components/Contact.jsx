import React from 'react';
import { Cursor } from 'react-creative-cursor';

function Contact(props) {

        
     
    return (
        <div>
            

            <div className="container-fluid   contact-container contactpage" >

                <h1 className="contact-heading" >Contact Me</h1>

                <div className="contact-info">
                    <p ><strong >Name:</strong> Kuralnithi</p>
                    <p ><strong >GitHub:</strong> <a href="https://github.com/kuralnithi" className="contact-link" target="_blank" data-cursor-color="#61dbfb" >https://github.com/kuralnithi</a></p>
                    <p ><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kural-nithi-0b967122b/" className="contact-link" target="_blank" data-cursor-color="#61dbfb">https://www.linkedin.com/in/kural-nithi-0b967122b/</a></p>
                    <p ><strong>Email:</strong> kuralnithi1999@gmail.com</p>
                    <p ><strong>Mobile:</strong> 9080425631</p>
               
                </div>
            </div>
        </div>
    );
}

export default Contact;