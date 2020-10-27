import React from 'react'
import ProjectHeader from '../../content_templates/partails/headers/ProjectHeader';

const CoverSlide = () => {
  console.log("title")
  const header = {title:"Tomorrowland Is Fear the Path to the Dark Side?", description: "", subtitle:"An unopinionated tool for examining the role of feedback and sentiment in the spread of (mis)information."};
  return(
    <>
    <div className="mx-auto" style={{"maxWidth": "600px"}}>
    <div className="col-xs-12" style={{height: "60px"}}></div>
      <h2>{header.title}</h2>
      <div className="col-xs-12" style={{height: "30px"}}></div>
      <p>{header.subtitle}</p>
      <div className="col-xs-12" style={{height: "200px"}}></div>
    </div>
    </>
  )
};

export default CoverSlide;