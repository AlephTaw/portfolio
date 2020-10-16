import React, {Component} from 'react';
// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import profilePic from '../../public/img/profile1.1.jpg';
import housingArialPic from '../../public/img/neighborhood_arial1.jpeg';
import seedlingPic from '../../public/img/seedling.jpeg';
import atariBreakoutPic from '../../public/img/atari_breakout.jpg';
import CollapsableTimeline from '../../../timeline/CollapsableTimeline';
import ReactEmbedGist from 'react-embed-gist';
import EmbeddedGist from '../../../Gists/EmbeddedGist'
import LatexInMarkDown from '../../../projects/LatexInMarkdown';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import projectAvatar from '../../public/img/seedling.jpeg'
const TestTopicDetails = (props) => {
  return (

    <>
             <div className="col-xs-12" style={{height: "100px"}}></div>
                <div className="text-center">
                    <div className="container" style={{"maxWidth": 600, "minWidth": 400}}>
                        <h4 className="float-center" style={{"marginBottom": 30}}>
                            Weed Seedlings
                        </h4>
                        {/* <h4>
                              Abstract
                            </h4> */}
                        <p>
                        The following is a selection of projects categorized as (general) projects, pipelines, or sandboxes. Each entry utilizes the semantic tagging scheme below.
                        </p>
                        <hr></hr>
                        <p>Topic • Data Source • Project Type • Libraries</p>
                    </div>
                </div>

                <div className="col-xs-12" style={{height: "30px"}}></div>

                {/* <div className="row text-center">
                  <div className="col">
                    <svg height="100" width="100">
                      <circle cx="50" cy="5" r="2" stroke="none" fill="grey" />
                      <circle cx="50" cy="50" r="2" stroke="none" fill="grey" />
                      <circle cx="50" cy="95" r="2" stroke="none" fill="grey" />
                    </svg>
                  </div>
                </div> */}

                <div className="col-xs-12" style={{height: "30px"}}></div>

                <div className="row text-center">
                <div className="col">
                  <img src={projectAvatar} style={{"borderRadius": "100%", "width": 110, "height": 110}}></img>
                </div>
                </div>

                <div className="col-xs-12" style={{height: "50px"}}></div>

                <div className="container" style={{"maxWidth": 1000, "minWidth": 1000}}>
                    <div className="text-center">
                            <h4>
                              Introduction
                            </h4>
                            <p>
                            The following is a selection of projects categorized as (general) projects, pipelines, or sandboxes. Each entry utilizes the semantic tagging scheme below.
                            <LatexInMarkDown source={`**This is a bunch of text with latex in it see: $M^{2}*\\frac{4-t}{p+4}$**`}/>
                            </p>
                        </div>

                  <div className="col-xs-12" style={{height: "50px"}}></div>

                  <script src="https://gist.github.com/AlephTaw/fb5ca2431fe05147f9b4a0afd7086d2e.js"></script>

                  <div>
                  {/* <EmbeddedGist id='5995ea726914f280afb3' file='Chef-Dockerfile' /> */}
                  <EmbeddedGist gist='AlephTaw/fb5ca2431fe05147f9b4a0afd7086d2e' />
                  
                        {/* <ReactEmbedGist titleClass="fdsfd" gist="AlephTaw/fb5ca2431fe05147f9b4a0afd7086d2e"/> */}
                      </div>


                      <div className="col-xs-12" style={{height: "50px"}}></div>


                        <div className="text-center">
                            <h4>
                            Conclusions and Further Work
                            </h4>
                            <p>
                            The following is a selection of projects categorized as (general) projects, pipelines, or sandboxes. Each entry utilizes the semantic tagging scheme below.
                            <LatexInMarkDown source={`**This is a bunch of text with latex in it see: $M^{2}*\\frac{4-t}{p+4}$**`}/>
                            </p>
                        </div>
                    </div>    
                        <div className="col-xs-12" style={{height: "150px"}}></div>

                        <div className="text-center">
                        <p>
                        View the source code here:
                        </p>
                        <a style={{"color": "black"}} href="https://github.com/AlephTaw"><i className="fab fa-github fa-2x" style={{"marginRight": "4px", "fontSize": "32px"}}></i></a>
                        </div>
                       

                    <div className="col-xs-12" style={{height: "150px"}}></div>
          </>
        )
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
)(TestTopicDetails)