import React from 'react'
import ProjectHeader from '../../content_templates/partails/headers/ProjectHeader';

const FormalizationSlide = () => {
  const header = {title:"Constraining and Formalizing", description: "", subtitle:""};
  return(
    <>
      <ProjectHeader header={header}/>
      <div className="mx-auto" style={{"maxWidth": "600px"}}>
      </div>
    </>
  )
};

export default FormalizationSlide;