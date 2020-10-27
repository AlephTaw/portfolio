import React from 'react'
import ProjectHeader from '../../content_templates/partails/headers/ProjectHeader';
import dashImage from '../../../../public/img/TweetDash_FullScreen_Tomorrow.png';

const ConceptSlide = () => {
  console.log("title")
  const header = {title:"Design Concept v1.0.0", description: "", subtitle:""};
  return(
    <>
    <ProjectHeader header={header}/>
    <div className="mx-auto" style={{"maxWidth": "600px"}}>
      <div className="col-xs-12" style={{height: "0px"}}></div>
      <div className="d-flex justify-content-center">
        <div>
          <img src={dashImage} alt="" style={{"maxHeight": "500px"}}/>
        </div>
      </div>
    </div>
    </>
  )
};

export default ConceptSlide;