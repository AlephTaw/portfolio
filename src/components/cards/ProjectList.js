import ProjectSummary from './ProjectSummary';
import React from 'react';

const ProjectList = (props) => {
  const {projectSummaries} = props
        return(
          <>
            {projectSummaries && projectSummaries.map((summary) => {
              return(
                  <div className="col-md" key={summary.id}>
                      <ProjectSummary summary={summary}/> 
                      <div className="col-xs-12" style={{height: "100px"}}></div>
                  </div>
              )
            })}
          </>
        )
};

export default ProjectList;