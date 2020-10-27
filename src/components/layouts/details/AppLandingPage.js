import React from 'react'
import ProjectHeader from '../content_templates/partails/headers/ProjectHeader';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import gitHubLogo from '../../../public/img/GitHub-Mark.png'
import cardioGram from '../../../public/img/heartbeat-line-icon-heart-rhytm-ecg-cardiogram-heartbeat-line-icon-heart-rhytm-ecg-electro-cardiogram-vector-illustration-isolated-122993156.jpg'

const AppLandingPage = () => {
  const header = {title:"Tomorrowland: Is Fear the Path to the Darkside?", description: "", subtitle:"Towards an Unopinionated Tool for Raising Awareness for Real-Time Fact Checking and the Nature of Misinformation"};
  return(
    <>
    <div className="col-xs-12" style={{height: "100px"}}></div>
    <ProjectHeader header={header}/>
    <div className="col-xs-12" style={{height: "50px"}}></div>
    <div className="text-center mx-auto" style={{"maxWidth": "800px"}}>
    <div className="d-flex justify-content-center">
        <div className="mr-4">
          <Link to="/sentimentProposal">
            <Button>Proposal</Button>
          </Link>
        </div>
        <div>
        <Button>Results</Button>
        </div>
    </div>
    <div className="col-xs-12" style={{height: "100px"}}></div>
      <p className="font-weight-bold text-center">Facts or Feelings?</p>
      <p>How can we help raise awareness of the role of sentiment and feedback (viral trending) in the narratives we construct?</p>
      <div className="col-xs-12" style={{height: "50px"}}></div>
      <div className="d-flex justify-content-center">
        <Link to="/sentimentApp">
          <Button>Launch the App!</Button>
        </Link>
      </div>
      <div className="col-xs-12" style={{height: "50px"}}></div>
      <p>Create an interactive dashboard that allows users to view useful statistics and analysis relevant to separating facts from sentiment. The same information presented in the course of an argument, a joke, or a declaration of facts would have completely different implications (and thus consequences) if you were conversing directly with someone. We seek a method to intuitively include sentiment related cues for large, networked conversations in real-time.</p>
      <p>With these cues, we hope to provide an intuitive interface to signal missing information in an 'unopinionated way', encouraging people to consult the resource in question for themeselves.</p>
      <div className="col-xs-12" style={{height: "100px"}}></div>

      <img src={cardioGram} alt="cardiogram" style={{"maxWidth": "150px"}}/>
      
      {/* <div className="col-xs-12" style={{height: "100px"}}></div>
      <p>Want to take a look at what’s going on behind the scenes?</p>
      <p>View the source code here:</p>
      <img src={gitHubLogo} alt="github logo" style={{"maxWidth": "40px"}}/> */}
      <div className="col-xs-12" style={{height: "100px"}}></div>
      <div className="d-flex justify-content-center">
        <p>View the pipeline and portfolio source code below.</p>
      </div>
        <div className="d-flex justify-content-center">
          <div className="m-2">
          <a href="https://github.com/AlephTaw/portfolio"><i class="far fa-window-maximize fa-2x"></i></a>
          </div>
          <div className="m-2">
            <a href="https://github.com/workbench-a/fact-check-api"><i class="fas fa-code fa-2x"></i></a>
          </div>
      </div>
    </div>
    </>
  )
};

export default AppLandingPage;