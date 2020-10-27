import React from 'react'
import ProjectHeader from '../../content_templates/partails/headers/ProjectHeader';
// import LatexInMarkdown from './../../../projects/LatexInMarkdown';
import gitHubLogo from '../../../../public/img/GitHub-Mark.png'


const References = () => {
  const header = {title:"References", description: "", subtitle:""};
  // const body = 
  // `A comprehensive set of references can be found in the notebooks, hosted here.`;
  return(
    <>
      <ProjectHeader header={header}/>
      <div className="text-center mx-auto" style={{"maxWidth": "800px"}}>
        {/* <LatexInMarkdown source={body}/> */}
        <div className="col-xs-12" style={{height: "100px"}}></div>
        <p>Please refer to the notebooks for a running collections of relevant references.</p>
      </div>
    </>
  )
};

export default References;