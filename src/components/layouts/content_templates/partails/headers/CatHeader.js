import React from 'react';

const CatHeader = (props) => {
        return(
          <>
                  <div className="text-center">
                    <div className="container" style={{"maxWidth": 600, "minWidth": 400}}>
                        <h4 className="float-center" style={{"marginBottom": 50}}>
                            Projects, Pipelines, and Sandboxes
                        </h4>
                        <p>
                        The following is a selection of projects categorized as (general) projects, pipelines, or sandboxes. Each entry utilizes the semantic tagging scheme below.
                        </p>
                        <hr></hr>
                        <p>Topic • Data Source • Project Type • Libraries</p>
                    </div>
                  </div>
          </>
        )
};

export default CatHeader;