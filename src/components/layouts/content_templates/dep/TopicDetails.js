import React, {Component} from 'react';
// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import profilePic from '../../public/img/profile1.1.jpg';
import housingArialPic from '../../public/img/neighborhood_arial1.jpeg';
import seedlingPic from '../../public/img/seedling.jpeg';
import atariBreakoutPic from '../../public/img/atari_breakout.jpg';
import CollapsableTimeline from '../../../timeline/CollapsableTimeline';
import ReactEmbedGist from 'react-embed-gist';
import LatexInMarkDown from '../../../projects/LatexInMarkdown';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Project1 = (props) => {
    //const id = props.match.params.id
    const timeline = [
    {
        date: 'January 2020',
        description: 'This is a description of the timeline',
        eventClass: '',
    },
    {
        date: 'February 2020',
        description: 'This is a description of the timeline',
        eventClass: '',
    },
    {
        date: 'March 2020',
        description: 'This is a description of the timeline',
        eventClass: '',
    },
    ]

    console.log('props here now:',
     props)
     const {project} = props
     if(project){
        return(
            <div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                <div className="text-center">
                    <div className="container" style={{"maxWidth": 600, "minWidth": 400}}>
                        <div className="row">
                            <div className="col">
                                <img src={profilePic} alt="not found" style={{"borderRadius": 90}}></img>
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
                                        "A Laboratory in the Clouds"
                                        </h4>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <i className="fab fa-github fa-2x mr-2"></i>
                                            <i className="fab fa-twitter fa-2x mr-2"></i>
                                            <i className="far fa-envelope fa-2x mr-2"></i>                                            {/* <i className="fab fa-youtube fa-2x mr-2"></i>
                                            <i className="fab fa-instagram fa-2x mr-2"></i> */}
                                            {/* <i className="fas fa-rss-square mr-2"></i> */}
                                            {/* <i className="fas fa-blog fa-2x mr-2"></i> */}
                                        </div>
                                        <div>
                                            <Link to="about"><i className="fas fa-info-circle fa-2x"></i></Link>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                    <h2 className="text-center mt-5">
                            {project.title}
                    </h2>
                    <hr></hr>
                    <div className="mw-75 row">
                        <div className="col-md">
                            Description / Introduction to project
                        </div>
                    </div>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
    
                    <ReactEmbedGist gist="AlephTaw/fb5ca2431fe05147f9b4a0afd7086d2e"/>
                    
                {/* </div> */}
                <div className="col-xs-12" style={{height: "300px"}}></div>
    
                <div className="col-xs-12" style={{height: "50px"}}></div>
                    <h2 className="text-center mt-5">
                            References
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
    

                <CollapsableTimeline timeline={timeline}/>
                <p>This is something</p>
                <LatexInMarkDown source={`**This is a bunch of text with latex in it see: $M^{2}*\\frac{4-t}{p+4}$**`}/>
                <p>End</p>
    
                {/* </div>
                </div>
                </div> */}
                {/* console.log("Project1_Props", props)} */}
    
    
            </div>
        )
    } else {
        return (
        <div className="container center">
            <p>project loading ...</p>
        </div>
        )
    }
};

const mapStatetoProps = (state, ownProps) => {
  console.log('this is the state ', state)
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  console.log('the correct project here?:  ', project)
  return {
    project,
    // auth: state.firebase.auth,
  }
}
export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Project1)