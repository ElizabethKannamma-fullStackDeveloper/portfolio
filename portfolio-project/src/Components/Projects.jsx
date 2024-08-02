import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
    return (
        <>
            <section>
                <div id='projects'>
                    <div className='main-text' id='project'>
                        <h2>Latest <span>Projects</span></h2>
                        <div className='project-content'>
                            <div className='row'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIlgJmK9GX7l2ik1N1YACnSUKfk5DQNaTNA&s" alt="image" />
                                <div className='layer'>
                                    <h5>KITCHEN RECIPE MANAGEMENT</h5>
                                    <p>Developed a recipe management web app with CRUD operations for ingredient</p>
                                    <div className='anchor'>
                                        <a target='_blank' href="https://65c200d593f7ee0008fd5995--zippy-sunflower-8dbb58.netlify.app/register"><LaunchIcon style={{ color: 'white' }} fontSize="large" /></a>
                                        <a target='_blank' href="https://github.com/thisiskannamma/kitchen-recipe-app.git"><GitHubIcon style={{ color: 'white' }} fontSize="large" /></a>
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/99/34/9157f8a1aa03575.jpg" alt="image" />
                                <div className='layer'>
                                    <h5>CONSTRUCTION MATERIAL APP</h5>
                                    <p>Developed a construction Material App for ordering construction material for building Projects like dam,house,bridges,etc with PAYMENT integration</p>
                                    <div className='anchor'>
                                        <a target='_blank' href="https://ephemeral-panda-4d1bc9.netlify.app/register"><LaunchIcon style={{ color: 'white' }} fontSize="large" /></a>
                                        <a target='_blank' href="https://github.com/thisiskannamma/E-commerce.git"><GitHubIcon style={{ color: 'white' }} fontSize="large" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <img src="https://americanlibrariesmagazine.org/wp-content/uploads/2015/01/a03.jpg" alt="image" />
                                <div className='layer'>
                                    <h5>BOOK MANAGEMENT SYSTEM</h5>
                                    <p></p>
                                    <div className='anchor'>
                                        <a target='_blank' href="https://luminous-pastelito-7a01c8.netlify.app/"><LaunchIcon style={{ color: 'white' }} fontSize="large" /></a>
                                        <a target='_blank' href="https://github.com/thisiskannamma/library-app.git"><GitHubIcon style={{ color: 'white' }} fontSize="large" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <img src="https://img.lovepik.com/background/20211021/large/lovepik-real-estate-black-gold-poster-background-material-image_400244017.jpg" alt="image" />
                                <div className='layer'>
                                    <h5>Real Estate Property App</h5>
                                    <p>Developed a recipe management web app with CRUD operations for ingredient</p>
                                    <div className='anchor'>
                                        <a target='_blank' href="https://glowing-squirrel-7b2303.netlify.app/"><LaunchIcon style={{ color: 'white' }} fontSize="large" /></a>
                                        <a target='_blank' href="https://github.com/thisiskannamma/real-estate.git"><GitHubIcon style={{ color: 'white' }} fontSize="large" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Projects