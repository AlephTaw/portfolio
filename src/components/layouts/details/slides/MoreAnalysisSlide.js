import React from 'react'
import ProjectHeader from '../../content_templates/partails/headers/ProjectHeader';
import LatexInMarkdown from './../../../projects/LatexInMarkdown';

const MoreAnalysisSlide = () => {
  const header = {title:"Analysis Continued", description: "", subtitle:""};
  const body = 
  `A comprehensive set of references can be found in the notebooks, hosted here.`;
  return(
    <>
      <ProjectHeader header={header}/>
      <div className="text-center" >
        <div className="col-xs-12" style={{height: "10px"}}></div>
        <div className="d-flex justify-content-center">
        <div>
          <LatexInMarkdown source={body}/>
        </div>
      </div>
      </div>
    </>
  )
};

export default MoreAnalysisSlide;