import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faHtml5 ,faCss3Alt,faJs,faNodeJs} from '@fortawesome/free-brands-svg-icons'
function Skills() {
    return (
        <>
            <h1 className='sub-title'>My <span>Skills</span></h1>

            <section>
                <div className='container1' id='skills'>
                    <h1 className='heading1'>Technical Skills</h1>
                    <div className='Technical-bars'>
                        <div className='bar'><FontAwesomeIcon icon={faHtml5} />
                            <div className='info'>
                                <span>HTML</span>
                            </div>
                            <div className='progress-line html'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'><FontAwesomeIcon icon={faCss3Alt} />
                            <div className='info'>
                                <span>CSS</span>
                            </div>
                            <div className='progress-line css'>
                                <span></span>
                            </div>
                        </div> <div className='bar'><FontAwesomeIcon icon={faJs} />
                            <div className='info'>
                                <span>Javascript</span>
                            </div>
                            <div className='progress-line javascript'>
                                <span></span>
                            </div>
                        </div> <div className='bar'><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="25px"alt="MongoDB" />
                            <div className='info'>
                                <span>MongoDB</span>
                            </div>
                            <div className='progress-line MongoDB'>
                                <span></span>
                            </div>
                        </div> <div className='bar'><img src="https://w7.pngwing.com/pngs/846/87/png-transparent-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-logo-thumbnail.png" width="25px"alt="ExpressJS" />
                            <div className='info'>
                                <span>Express</span>
                            </div>
                            <div className='progress-line express'>
                                <span></span>
                            </div>
                        </div> <div className='bar'><FontAwesomeIcon icon={faReact} />
                            <div className='info'>
                                <span>Reactjs</span>
                            </div>
                            <div className='progress-line React'>
                                <span></span>
                            </div>
                        </div> <div className='bar'><FontAwesomeIcon icon={faNodeJs} />
                            <div className='info'>
                                <span>Nodejs</span>
                            </div>
                            <div className='progress-line node'>
                                <span></span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills