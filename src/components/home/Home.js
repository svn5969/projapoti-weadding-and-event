import React from 'react';
import Particles from 'react-particles-js';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Header from './Header/Header';

import './Home.css'
const Home = () => {
    return (
        <div id="home">
           
        <div className="home" id="tsparticles">
            
            <Particles
                // params={{
                //     particles: {
                //         number: {
                //             value: 50,
                //             density: {
                //                 enable: true,
                //                 value_area: 700
                //             }
                //         },
                //         shape: {
                //             type: "snow",
                //             stroke: {
                //                 width: 6,
                //                 color: "#f9ab00"
                //             }
                //         }
                //     }
                // }}
                // params={{
                //   background: {
                //     color: {
                //       value: "#000"
                //     }
                //   },
                //   particles: {
                //     number: {
                //       value: 160,
                //       density: {
                //         enable: false
                //       }
                //     },
                //     size: {
                //       value: 10,
                //       random: true
                //     },
                //     move: {
                //       direction: "bottom",
                //       outMode: "out"
                //     },
                //     links: {
                //       enable: false
                //     }
                //   },
                //   interactivity: {
                //     events: {
                //       onClick: {
                //         enable: true,
                //         mode: "remove"
                //       }
                //     },
                //     modes: {
                //       remove: {
                //         quantity: 10
                //       }
                //     }
                //   }
                // }}
                
                params={{
                //   background: {
                //     color: {
                //       value: "#0d47a1",
                //     },
                //   },
                  fpsLimit: 60,
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                      },
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#EDF416",
                    },
                    links: {
                      color: "#F41694",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outMode: "bounce",
                      random: false,
                      speed: 3,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        value_area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 5,
                    },
                  },
                  detectRetina: true,
                }}

            ></Particles>
           <Navbar></Navbar>
           </div>
          <Header></Header>
         
          <Projects></Projects>
          
       
       <Footer></Footer>
    </div>
              
    );
};

export default Home;