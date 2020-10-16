import React, {Component} from 'react';
// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ProjectSummary from '../projects/ProjectSummary';

import profilePic from '../../public/img/profile.jpg';
import housingArialPic from '../../public/img/neighborhood_arial1.jpeg';
import seedlingPic from '../../public/img/seedling.jpeg';
import atariBreakoutPic from '../../public/img/atari_breakout.jpg';

import ReactEmbedGist from 'react-embed-gist';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { useFirebase } from 'react-redux-firebase'
import 'firebase/storage'

import { compose } from 'redux';

const post = {
    id: "k6aeCAbjNBppObr05Ev3",
    template: "generic_post",
    title: "Weed Detection",
    subtitle: "Image Recognition | CNN | Keras | Kaggle",
    createdAt: Date.now(),
    thumbnail: "seedling.jpeg",
    subject: "dataset",
    body: {
      //This is a block
      0: {
        type: "textBlock",
        body: "Here is a bunch of stuff that you have to say."
      },
      1: {
        type: "notebook",
        body: "Here is notebook with some analysis."
      },
      2: {
        type: "image",
        body: "Here is a Gif / live demo."
      },
      3: {
        type: "textBlock",
        body: "Conclusions and links to github."
      },
      4: {
        type: "references",
        body: "Here are the sources that I used."
      },
      4: {
        type: "timeline",
        body: "This my progress."
      },
    }
  }

class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log('props: ', this.props)
        // let storage = this.props.firebase.storage(); // see react-redux-firebase docs
        let projects = this.props.projects
        let topics = this.props.topics
        return(
            <div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                <div className="text-center">
                    <div className="container" style={{"maxWidth": 600, "minWidth": 400}}>
                        <div className="row">
                            <div className="col"  style={{"marginLeft": "0px", "paddingLeft": "0px"}}>
                                <img src={profilePic} alt="not found" style={{"borderRadius": 100, "width": "145px", "height": "145px", "marginLeft": "80px", "display": "block"}}></img>
                            </div>
                            <div className="col my-auto" style={{"marginRight": "40px", "paddingLeft": "0px", "display": "block"}}>
                                <div className="row mb-2">
                                    <h4>
                                    Steven Wilcox
                                    </h4>
                                </div>

                                <div className="row mb-3">
                                    <div className="mb-2 text-left">
                                        <h5>
                                        "A Laboratory in the Clouds"
                                        </h5>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <a style={{"color": "black"}} href="https://github.com/AlephTaw"><i className="fab fa-github fa-2x" style={{"fontSize": "32px", "marginRight": "32px"}}></i></a>
                                            {/* <i className="fab fa-twitter fa-2x mr-2"></i> */}
                                            
                                            <Link style={{"color": "black"}} to="about"><i class="fas fa-hourglass-half fa-2x" style={{"fontSize": "29px", "marginRight": "32px"}}></i></Link>
                                            {/* <Link style={{"color": "black"}} to="about"><i class="far fa-calendar-alt fa-2x mr-3"></i></Link> */}
                                            {/* <Link style={{"color": "black"}} to="about"><i className="far fa-envelope fa-2x mr-2"></i></Link> */}
                                            {/* <i className="fab fa-youtube fa-2x mr-2"></i>
                                            <i className="fab fa-instagram fa-2x mr-2"></i> */}
                                            {/* <i className="fas fa-rss-square mr-2"></i> */}
                                            {/* <i className="fas fa-blog fa-2x mr-2"></i> */}
                                        </div>
                                        <div>
                                            <Link to="about"><i className="fas fa-info-circle fa-2x" style={{"fontSize": "32px", "marginRight": "34px"}}></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>
                <div className="col-xs-12" style={{height: "100px"}}></div>

                {/* <div className="text-center"> */}
                    {/* <h1 className='home-page-header'>Home Page</h1>
                    <Button variant='outline-dark' href='/#/donate'>Donate</Button>
                    <button className='btn btn-outline-dark'>Without React</button> */}
                                  <div className="col-xs-12" style={{height: "50px"}}></div>
                    <div className="container">
                        <div className="row"></div>
                        </div>
                    <div className="container" style={{"maxWidth": 850}}>
                        <h2 className="text-center">
                            Projects, Pipelines, and Sandboxes
                        </h2>
                    <hr></hr>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <div className="container">
                        <div className="row">
                            {projects && projects.map((project) => {
                                return(
                                    <div className="col-md" key={project.id}>
                                        <Link to={`project/${project.id}`} style={{"color": "inherit"}}>
                                            <ProjectSummary project={project}/>
                                        </Link>
                                    </div>
                                )
                            })}
                            <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "Custom", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link>
                            {/* <RenderCards projects={projects} storage={storage}/> */}

                                {/* <div className="col-md">
                                <Link to='project/3' style={{"color": "inherit"}}>
                                    <ProjectSummary title="Housing Prices" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail={housingArialPic}/>
                                </Link>
                                </div>
                                <div className="col-md">
                                <Link to={'project/1' + project.id} style={{"color": "inherit"}}>
                                    <ProjectSummary id={"oJoMkgmHIaYl2To3HWBa"} title="Weed Detection" subtitle="Image Recognition | CNN | Keras | Kaggle" thumbnail={seedlingPic}/>
                                </Link>
                                </div>
                                <div className="col-md">
                                <ProjectSummary title="Atari" subtitle="Deep Q Learning and Actor Critic Methods | Deep RL | PyTorch | OpenAI Gym" thumbnail={atariBreakoutPic}/>
                                </div> */}
                        </div>
                    </div>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                            Topics and Theory
                    </h2>
                    <hr></hr>
                    <div className="mw-75 row">
                    {topics && topics.map((topic) => {
                                return(
                                    <div className="col-md" key={topic.id}>
                                        <Link to={`topics/${topic.id}`} style={{"color": "inherit"}}>
                                            <ProjectSummary project={topic}/>
                                        </Link>
                                    </div>
                                )
                            })}
                        {/* <div className="col-md">
                        <ProjectSummary title="Noisy Labels" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary title="Model Ensembles" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary title="Attention" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary title="Topological Data Science" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary title="Adversarial Examples" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary title="Generative Models" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div> */}
                    </div>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                        Courses and Resources
                            {/* Modes, Mechanisms, and More */}
                    </h2>
                    <hr></hr>
                    <div className="mw-75 row">
                        <div className="col">
                        <ul className="text-center" style={{"listStyleType": "none"}}>
                                <li>
                                    <a href="https://arxiv.org/">All You Need is Good Init</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/">All You Need is Attention</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/">Spatial Transformer Networks</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/">ResNet</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/">AlexNet</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/">ZFNet</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/">Deep Learning Review</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/">Clustering Review</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/">Neural Networks Universal Approximators</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/">Human Level Performance on Deep Neural Networks</a>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="col-md">
                        <ProjectSummary title="RL" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary title="Inverse RL" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary title="Supervised" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary title="Unsupervised" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div> */}
                    </div>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                            Deep Learning Architectures (Notebooks)
                    </h2>
                    <hr></hr>
                    <div className="mw-75 row">
                    <Link to='project/3' style={{"color": "inherit"}}>
                        <ProjectSummary project = {{title: "Convolutional Neural Networks", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                    </Link>
                    <Link to='project/3' style={{"color": "inherit"}}>
                        <ProjectSummary project = {{title: "Recurrent Neural Networks", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                    </Link>
                    <Link to='project/3' style={{"color": "inherit"}}>
                        <ProjectSummary project = {{title: "Variational Auto Encoders", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                    </Link>
                    <Link to='project/3' style={{"color": "inherit"}}>
                        <ProjectSummary project = {{title: "Generative Adversarial Networks (GANs)", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                    </Link>
                        {/* <div className="col-md">
                        <ProjectSummary project = "1" title="LeNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary project = "2" title="AlexNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary project = "3" title="ZFNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary project = "4" title="GoogleNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div>
                        <div className="col-md">
                        <ProjectSummary project = "5" title="ResNet" subtitle="Exploritory Analysis | Regression | SciKit-Learn | Kaggle" thumbnail="https://via.placeholder.com/180x180.png"/>
                        </div> */}
                    </div>

                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                            Resources
                    </h2>
                    <hr></hr>
                    <div className="mw-75 row">
                        <div className="col-md">
                            <div className="text-center">
                                <h4>
                                    Courses
                                </h4>
                            </div>
                            <ul className="text-center" style={{"listStyleType": "none"}}>
                                <li>
                                    <a href="http://cs229.stanford.edu/">CS229: Machine Learning</a>
                                </li>
                                <li>
                                    <a href="https://cs230.stanford.edu/">CS230: Deep Learning</a>
                                </li>
                                <li>
                                    <a href="http://cs231n.stanford.edu/">CS231N: Convolutional Nueral Networks for Visual Recognition</a>
                                </li>
                                <li>
                                    <a href="http://web.stanford.edu/class/cs224n/"> CS224n: Natural Language Processing with Deep Learning</a>
                                </li>
                            </ul>
                            <div className="text-center">
                                <h4>
                                    Publications
                                </h4>
                            </div>
                            <ul className="text-center" style={{"listStyleType": "none"}}>
                                <li>
                                    <a href="https://arxiv.org/">arXiv.org: e-Print archive</a>
                                </li>
                                <li>
                                    <a href="https://paperswithcode.com/">Papers with Code: Benchmarks, Benchmarking and More</a>
                                </li>
                            </ul>
                            <div className="text-center">
                                <h4>
                                    News:
                                </h4>
                            </div>
                            <ul className="text-center" style={{"listStyleType": "none"}}>
                                <li>
                                    <a href="https://openai.com">OpenAI</a>
                                </li>
                                <li>
                                    <a href="https://deepmind.com/">Deep Mind</a>
                                </li>
                                <li>
                                    <a href="https://ai.facebook.com/">Facebook AI</a>
                                </li>
                                <li>
                                    <a href="https://ai.google/">Google AI</a>
                                </li>
                                <li>
                                    <a href="https://bair.berkeley.edu/blog/?refresh=1">Berkeley Artificial Intelligence Research (BAIR)</a>
                                </li>
                                <li>
                                <a href="https://blog.ml.cmu.edu/">Carnegie Mellon University AI Blog</a>
                                </li>
                                <li>
                                <a href="https://news.mit.edu/topic/machine-learning">MIT News: Machine Learning</a>
                                </li>
                                <li>
                                <a href="http://ai.stanford.edu/blog/">Stanford AI Blog</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Towards Data Science</a>
                                </li>
                            </ul>
                            <div className="text-center">
                                <h4>
                                    Communities and Forums:
                                </h4>
                            </div>
                            <ul className="text-center" style={{"listStyleType": "none"}}>
                                <li>
                                    <a href="https://openai.com">Data Tau</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Reddit AI</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">AI Discord</a>
                                </li>
                            </ul>
                            <div className="text-center">
                                <h4>
                                    Additional Media:
                                </h4>
                            </div>
                            <ul className="text-center" style={{"listStyleType": "none"}}>
                                <li>
                                    <a href="https://openai.com">Lex Fridman Podcast: ( Formerly The AI Podcast )</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Data Tau</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Towards Data Science</a>
                                </li>
                            </ul>
                            <div className="text-center">
                                <h4>
                                    Selected Prominant Researchers:
                                </h4>
                            </div>
                            <ul className="text-center" style={{"listStyleType": "none"}}>
                                <li>
                                    <a href="https://openai.com">Yann LeCun</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Geoffrey Hinton</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Vladimir Vapnik</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Andrej Karpathy</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Data Tau</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Towards Data Science</a>
                                </li>
                            </ul>

                            <div className="text-center">
                                <h4>
                                    Events and Conferences:
                                </h4>
                            </div>
                            <ul className="text-center" style={{"listStyleType": "none"}}>
                                <li>
                                    <a href="https://openai.com">Yann LeCun</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Geoffrey Hinton</a>
                                </li>
                                <li>
                                    <a href="https://openai.com">Olah (and distill)
                                    NIPS
                                    ICML</a>
                                </li>


                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                            Notebook Tutorials
                    </h2>
                    <hr></hr>
                    <div className="container">
                        <div className="row">
                            <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "Pandas, Numpy, Scipy", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link>
                            <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "Scikit-Learn", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link>
                            <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "Visualization with Pandas, Matplotlib, Seaborn, Altair", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link>
                            <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "React with D3js", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link>
                            <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "Tensorflow, Keras", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link>
                            <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "PyTorch", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link>
                            <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "PySpark, MLlib", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link>
                            {/* <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "Fast AI", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link> */}
                            <Link to='project/3' style={{"color": "inherit"}}>
                                <ProjectSummary project = {{title: "Flask and FastAPI", subtitle: "Subtitle", thumbnail: "180x180.png"}} />
                            </Link>
                        </div>
                    </div>

                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                            Blogs, News, and Message Boards
                    </h2>
                    <hr></hr>
                    <div className="mw-75 row">
                        <div className="col-md">
                            <ul className="text-center" style={{"listStyleType": "none"}}>
                                <li>
                                    Facebook AI
                                </li>
                                <li>
                                    Google AI
                                </li>
                                <li>
                                    CMU
                                </li>
                                <li>
                                    Berkeley
                                </li>
                                <li>
                                    MIT
                                </li>
                                <li>
                                    Stanford
                                </li>
                                <li>
                                    Karpathy
                                </li>
                                <li>
                                    Olah
                                </li>
                                <li>
                                    DataTau
                                </li>
                                <li>
                                    Towards Data Science
                                </li>
                                <li>
                                    Lex Fridman Podcast (formerly AI Podcast)
                                </li>
                                <li>
                                    NIPS
                                </li>
                                <li>
                                    ICML
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    </div>

                    <div>

                    {/* <ReactEmbedGist gist="AlephTaw/fb5ca2431fe05147f9b4a0afd7086d2e"/> */}
                    {/* <iframe src="https://gist.github.com/AlephTaw/fb5ca2431fe05147f9b4a0afd7086d2e" width="100%" height="300" style={{"border":"1px solid black"}}></iframe> */}
                    {/* <CollabGist embed={<script src="https://gist.github.com/AlephTaw/fb5ca2431fe05147f9b4a0afd7086d2e.js"></script>}/> */}
                    </div>
                    
                {/* </div> */}
                <div className="col-xs-12" style={{height: "300px"}}></div>

            </div>
        )
    }
};

const mapStatetoProps = (state) => {
    console.log('HomePage State ', state)
    return {
      projects: state.firestore.ordered.projects,
      topics: state.firestore.ordered.topics,
      // auth: state.firebase.auth,
    }
  }
  export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'topics', orderBy: ['createdAt', 'desc']},
    ]),
  )(HomePage)