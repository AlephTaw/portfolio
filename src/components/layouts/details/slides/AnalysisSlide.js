import React from 'react'
import ProjectHeader from '../../content_templates/partails/headers/ProjectHeader';
import analysisPipeline from '../../../../public/img/analysis_pipeline_v1.0.0.png';

const AnalysisSlide = () => {
  const header = {title:"Analysis Pipeline", description: "", subtitle:""};
  return(
    <>
      <ProjectHeader header={header}/>
      <div className="text-center" >
        <div className="col-xs-12" style={{height: "10px"}}></div>
        <div className="d-flex justify-content-center">
        <div>
          <img className="mx-auto" src={analysisPipeline} alt="github logo" style={{"height": "500px"}}/>
        </div>
      </div>
      </div>
    </>
  )
};

export default AnalysisSlide;