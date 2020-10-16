import React from 'react';

const ProjectHeader = (props) => {
  if(props.header){
    const {title, subtitle, description} = props.header
    return(
      <>
        <div className="text-center">
          <div className="container" style={{"maxWidth": 600, "minWidth": 400}}>
              <h4 className="float-center" style={{"marginBottom": 30}}>
                  {title}
              </h4>
              {/* <h4>
                    Abstract
                  </h4> */}
              <p>
                {description}
              </p>
              <hr></hr>
              <p>{subtitle}</p>
          </div>
        </div>
      </>
    )
  }else{
    return(
      <>
        <div className="text-center">
          <div className="container" style={{"maxWidth": 600, "minWidth": 400}}>
              <h4 className="float-center" style={{"marginBottom": 30}}>
                [...loading...]
              </h4>
              {/* <h4>
                    Abstract
                  </h4> */}
              <p>
                [...loading...]
              </p>
              <hr></hr>
              <p>
                [...loading...]
              </p>
          </div>
        </div>
      </>
    )
  }
};

export default ProjectHeader;