import React from 'react'
import LatexInMarkdown from './../../../projects/LatexInMarkdown';
import ProjectHeader from '../../content_templates/partails/headers/ProjectHeader';
import StaticTimeline from '../../../timeline/StaticTimeline';

const FurtherworkSlide = () => {
  const header = {title:"Milestones", description: "", subtitle:""};
  const body = 
  `UI/UX Mock-Up for Infographic Dashboard (Figma) &#10003  
  React application Mockup Deployed with D3 charts &#10003  
  App System Architecture and Premilinary Analysis Pipeline &#10003  
  Exploratory Data Analysis Notebooks (In Progress)     
  Deploy Test End Points to Flask (Heroku + MongoDB Atlas) (In Progress)  
  Production ML API Deployment  
  Incorporate Real-TIme Data Analysis with Spark Streaming via Twitter Api  
  Improve modeling and dashboard interactivity`
  return(
    <>
      <ProjectHeader header={header}/>
      {/* <StaticTimeline/> */}
      <div className="mx-auto" style={{"maxWidth": "600px"}}>
      <LatexInMarkdown source={body}/>
      </div>
    </>
  )
};

export default FurtherworkSlide;