import React from 'react'
import Typical from 'react-typical'

import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container" >
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://web.facebook.com/lourenco.sofeca/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='https://www.instagram.com/sofecia/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='https://twitter.com/LourensoSofecia'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'> <span className='corLaranja'>Lourenço Sofécia </span></span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop= {Infinity}
                                    steps={[
                                        "Ethusiastic Dev ", 
                                        1000,
                                        "Full Stack Developer ", 
                                        1000,
                                        "Mern Stack Dev ", 
                                        1000,
                                        "Cross Platform V ", 
                                        1000,
                                        "React/ React Native Dev", 
                                        1000,
                                    ]}
                                    
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end 
                                operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me {" "}
                        </button>
                        <a href='Lourenço Sofécia-Currículo.docx' download="Lourenço Lourenço Sofécia-Currículo.docx">
                            <button className='btn highlighted-btn'>
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>

            
        </div>
    );
  }