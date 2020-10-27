import React from 'react'
import appSysArch from '../../../../public/img/app_system_architecture.png';
import ProjectHeader from '../../content_templates/partails/headers/ProjectHeader';


const AppArchitectureSlide = () => {
  const header = {title:"Application System Architecture", description: "", subtitle:""};
  return(
    <>
    <div className="mx-auto" style={{"maxWidth": "600px"}}>
    <ProjectHeader header={header}/>
      <div className="col-xs-12" style={{height: "10px"}}></div>
      <div className="ml-0">
        <img src={appSysArch} alt="github logo" style={{"height": "500px"}}/>
      </div>
    </div>


    </>
  )
};

export default AppArchitectureSlide;