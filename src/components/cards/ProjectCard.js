import React from 'react';


const ProjectCard = (props) => {
        return(
          // <div class="card text-center">
          //   <img src={props.thumbnail} alt="Avatar" style={{width:"100%"}}></img>
          //   <div class="container">
          //       <h4><b>{props.title}</b></h4>
          //       <p>{props.subtitle}</p>
          //   </div>
          // </div>

          <div className="card text-center mb-4">
            <img className="card-img-top" src={props.thumbnail} alt="card image"></img>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.subtitle}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        )
};

export default ProjectCard;