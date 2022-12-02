import React from 'react';
import { Link } from "react-router-dom";

import '../../App.css';
//import {Button} from '../other_components/Button';
import './HeroSection.css';
import "./fancytext.css"
import './robot.css'
import "./styles.css"
import './input.css'
import './robot'


function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <h1> resubot.me</h1>
      <div className = 'hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            Get Started
        </Button>
      </div>     */}
      <div id="wrapper">
            <svg id="Robot" width="342" height="533" viewBox="0 0 350 483" fill="none" xmlns="http://www.w3.org/2000/svg"
                data-click="0">
                <g data-configuration="0">
                    <path id="RightLeg" fill-rule="evenodd" clip-rule="evenodd"
                        d="M231 410H230.977C230.992 409.335 231 408.668 231 408C231 361.056 192.944 323 146 323V319C178.454 319 208.434 308.411 232.675 290.5C268.662 317.091 292 359.82 292 408C292 408.668 291.996 409.334 291.987 410H292V483H231V410Z"
                        fill="#E0E2DB" />
                    <rect id="LeftLeg" y="179" width="60" height="304" fill="#E0E2DB" />
                    <g id="Top">
                        <path id="Head" fill-rule="evenodd" clip-rule="evenodd"
                            d="M146 323C226.634 323 292 257.634 292 177C292 96.3664 226.634 31 146 31C65.3664 31 0 96.3664 0 177C0 257.634 65.3664 323 146 323ZM146 262C192.944 262 231 223.944 231 177C231 130.056 192.944 92 146 92C99.0558 92 61 130.056 61 177C61 223.944 99.0558 262 146 262Z"
                            fill="#E0E2DB" />
                        <g id="Antenna">
                            <rect id="Shaft" x="48.2178" y="11.7902" width="59.0212" height="18.4441"
                                transform="rotate(60 48.2178 11.7902)" />
                            <circle id="Bob" cx="40.5" cy="17.5" r="17.5" />
                        </g>
                        <g id="Eyes">
                            <g id="EyeBall">
                                <rect id="LeftEye" x="117" y="125" width="60" height="104" rx="30" />
                                <rect id="RightEye" x="192" y="125" width="60" height="104" rx="30" />
                            </g>
                            <g id="Lids">
                                <rect id="LeftEyeLid" x="117" y="125" width="60" height="104" rx="30" />
                                <rect id="RightEyeLid" x="192" y="125" width="60" height="104" rx="30" />
                            </g>
                        </g>
                    </g>
                </g>
                
            </svg>
            
            <div id="fancytext">
            <div id= "fancy_split">
              
                <h3 class="static-txt">Helping you get better</h3>
                <div class="dynamic-txt-spacing">
                  <ul class="dynamic-txt">
                      <li><span>resumes</span></li> 
                      <li><span>interviews</span></li> 
                      <li><span>job offers</span></li> 
                      <li><span>careers</span></li> 
                      <li><span>connections</span></li> 
                  </ul>
                </div>
                
                
              </div>
              <Link to='/resumeChecker' style={{textDecoration: 'none'}}>
                  <button id="continue_button">Get Started</button>
              </Link>
              
          </div>  

    </div>
    
    
    
   
  </div>
  )
}

export default HeroSection;
