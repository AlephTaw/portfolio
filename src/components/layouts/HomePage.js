import React, {Component} from 'react';
// import { Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import ProjectCard from '../cards/ProjectCard';
import profilePic from '../../public/img/profile1.1.jpg'
import housingArialPic from '../../public/img/neighborhood_arial1.jpeg'
import seedlingPic from '../../public/img/seedling.jpeg'
import atariBreakoutPic from '../../public/img/atari_breakout.jpg'

class HomePage extends Component{
    render() {
        return(
            <div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                <div className="text-center">
                    <div class="container" style={{"max-width": 600, "min-width": 400}}>
                        <div className="row">
                            <div className="col">
                                <img src={profilePic} alt="image not found" style={{"border-radius": 90}}></img>
                            </div>
                            <div className="col my-auto">
                                <div className="row mb-2">
                                    <h3>
                                    Steven Wilcox
                                    </h3>
                                </div>

                                <div className="row mb-3">
                                    <div className="mb-2 text-left">
                                        <h4 className="font-italic text-muted">
                                        "Looking closely at what is common"
                                        </h4>
                                    </div>
                                    {/* <div class="d-flex justify-content-between">
                                        <i class="fab fa-github"></i>
                                        <i class="fab fa-github"></i>
                                        <i class="fab fa-github"></i>
                                    </div> */}
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <i className="fab fa-github fa-2x mr-2"></i>
                                            <i className="fab fa-twitter fa-2x mr-2"></i>
                                            {/* <i class="fab fa-youtube fa-2x mr-2"></i>
                                            <i class="fab fa-instagram fa-2x mr-2"></i> */}
                                            {/* <i class="fas fa-rss-square mr-2"></i> */}
                                            <i className="fas fa-blog fa-2x mr-2"></i>
                                        </div>
                                        <div>
                                            <i className="fas fa-info-circle fa-2x"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                {/* <div className="text-center"> */}
                    {/* <h1 className='home-page-header'>Home Page</h1>
                    <Button variant='outline-dark' href='/#/donate'>Donate</Button>
                    <button className='btn btn-outline-dark'>Without React</button> */}
                    
                    <div class="container" style={{"max-width": 850}}>
                        <h2 className="text-center">
                            Data Sets and Sandboxes
                        </h2>
                    <hr></hr>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <div clasName="container">
                        <div class="row">
                                <div class="col-md">
                                <ProjectCard title="Housing Prices" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail={housingArialPic}/>
                                </div>
                                <div class="col-md">
                                <ProjectCard title="Weed Detection" subtitle="Image Recognition | CNN | Keras | Kaggle" thumbnail={seedlingPic}/>
                                </div>
                                <div class="col-md">
                                <ProjectCard title="Atari" subtitle="Deep Q Learning and Actor Critic Methods | Deep RL | PyTorch | OpenAI Gym" thumbnail={atariBreakoutPic}/>
                                </div>
                        </div>
                    </div>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                            Topics in Focus
                    </h2>
                    <hr></hr>
                    <div class="mw-75 row">
                        <div class="col-md">
                        <ProjectCard title="Noisy Labels" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div class="col-md">
                        <ProjectCard title="Model Ensembles" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div class="col-md">
                        <ProjectCard title="Attention Is All You Need" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                    </div>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                            Architectures: Notebooks
                    </h2>
                    <hr></hr>
                    <div class="mw-75 row">
                        <div class="col-md">
                        <ProjectCard title="LeNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div class="col-md">
                        <ProjectCard title="AlexNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div class="col-md">
                        <ProjectCard title="ZFNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div class="col-md">
                        <ProjectCard title="GoogleNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div class="col-md">
                        <ProjectCard title="ResNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                    </div>
                    </div>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                            Learning Resource: Reviews
                    </h2>
                    <hr></hr>
                    <div class="mw-75 row">
                        <div class="col-md">
                            <ul>
                                <li>
                                    CS224N
                                </li>
                                <li>
                                    CS224N
                                </li>
                                <li>
                                    CS224N
                                </li>
                                <li>
                                    CS224N
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                {/* </div> */}
                <div className="col-xs-12" style={{height: "300px"}}></div>
            </div>
        )
    }
};

export default HomePage;