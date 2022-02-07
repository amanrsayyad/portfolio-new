import React from 'react';
// import { SocialData } from '../../data/socail';
import linkedin from '../../../Assets/linkdin.png';
import github from '../../../Assets/github.png';
import twitter from '../../../Assets/twitter.png';
import './social.css';

function Socail() {


    return (
        <div className='social-contact'>
            <a href="https://www.linkedin.com/in/aman-sayyad/" target="_blank" rel="norefrer">
                <div className="socail-icon-div">
                    <img src={linkedin} alt="" className='socail-icon' />
                </div>
            </a>
            <a href="https://github.com/amanrsayyad" target="_blank" rel="norefrer">
                <div className="socail-icon-div">
                    <img src={github} alt="" className='socail-icon'/>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/aman-sayyad/" target="_blank" rel="norefrer">
                <div className="socail-icon-div">
                    <img src={twitter} alt="" className='socail-icon' />
                </div>
            </a>
        </div>
    );
}

export default Socail;
