import React from 'react'
import ProjectHeader from '../../content_templates/partails/headers/ProjectHeader';
import twitterLogo from '../../../../public/img/twitter.png';
import wikipLogo from '../../../../public/img/1200px-Wikipedia-logo-v2.png';


const IntroductionSlide = () => {
  console.log("title")
  const header = {title:"Introduction", description: "", subtitle:""};
  return(
    <>
    <ProjectHeader header={header}/>
    <div className="mx-auto" style={{"maxWidth": "600px"}}>
      <div className="col-xs-12" style={{height: "50px"}}></div>
      <div className="d-flex justify-content-center">
          <div className="mr-2">
            <img src={twitterLogo} alt="social media 1" style={{"maxWidth": "50px", "borderRadius": "30px"}}/>
          </div>
          <div className="mr-2">
            <img src={wikipLogo} alt="social media 2" style={{"maxWidth": "55px"}}/>
          </div>
      </div>
      <div className="col-xs-12" style={{height: "50px"}}></div>
        <p>There is a lot of (mis)information online.</p>
        <p className="font-weight-bold">Problem:</p>
        <p>How can we help raise awareness of the role of sentiment and feedback (viral trending) in the narratives we construct?</p>
        <div className="col-xs-12" style={{height: "50px"}}></div>
        <p className="font-weight-bold">Opportunity and Objective:</p>
        <p>Provide an interactive interface that allows people to visualize how emotion and viral popularity withing a subject, while encouraging individuals to compare and contrast encyclopedic with search results on their topics of interest.</p>
        {/* <div className="col-xs-12" style={{height: "100px"}}></div>
        <p className="font-weight-bold">Concept:</p>
        <p>Create an interactive dashboard that allows users to view useful statistics and analysis relevant to separating facts from sentiment. The same information presented in the course of an argument, a joke, or a declaration of facts would have completely different implications (and thus consequences) if you were conversing directly with someone. We seek a method to intuitively include sentiment related cues for large, networked conversations in real-time.</p>
        <p>With these cues, we hope to provide an intuitive interface to signal missing information in an 'unopinionated way', encouraging people to consult the resource in question for themeselves.</p>
        <div className="col-xs-12" style={{height: "100px"}}></div>
        <p className="font-weight-bold">General Method:</p>
        <div className="col-xs-12" style={{height: "100px"}}></div>
        <p>Want to take a look at what’s going on behind the scenes?</p>
        <p>View the source code here:</p>
        <img src={""} alt="github logo"/> */}
      </div>
    </>
  )
};

export default IntroductionSlide;