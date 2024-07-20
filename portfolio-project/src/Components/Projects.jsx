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
                                        <a target='_blank' href=""><GitHubIcon style={{ color: 'white' }} fontSize="large" /></a>
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/99/34/9157f8a1aa03575.jpg" alt="image" />
                                <div className='layer'>
                                    <h5>Construction Material App</h5>
                                    <p>Developed a construction Material App for ordering construction material for building Projects like dam,house,bridges,etc</p>
                                    <div className='anchor'>
                                        <a target='_blank' href="https://669b663965092496d54a72f8--candid-biscochitos-ec0df5.netlify.app/register"><LaunchIcon style={{ color: 'white' }} fontSize="large" /></a>
                                        <a target='_blank' href=""><GitHubIcon style={{ color: 'white' }} fontSize="large" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwqQztk9aDYa9YWVHS0rmrTHqrKaUi3mVmg&s" alt="image" />
                                <div className='layer'>
                                    <h5>UI/UX Design</h5>
                                    <p>Developed a recipe management web app with CRUD operations for ingredient</p>
                                    <div className='anchor'>
                                        <a target='_blank' href="https://65c200d593f7ee0008fd5995--zippy-sunflower-8dbb58.netlify.app/register"><LaunchIcon style={{ color: 'white' }} fontSize="large" /></a>
                                        <a target='_blank' href="https://65c200d593f7ee0008fd5995--zippy-sunflower-8dbb58.netlify.app/register"><GitHubIcon style={{ color: 'white' }} fontSize="large" /></a>
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