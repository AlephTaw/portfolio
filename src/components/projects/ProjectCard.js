import React from 'react';

const ProjectCard = (props) => {
  const project = props.project
  // const thumbnail = project.thumbnail ? "../../public/img/" + project.thumbnail : "https://via.placeholder.com/180x180.png"
  console.log('card props2', project)
  console.log('props: ', props)
        return(
          <div className="card text-center mb-4" style={{"maxWidth": 200, "minWidth": 200, "maxHeight": 300, "minHeight": 300}}>
            <img className="card-img-top" src={require("../../public/img/" + project.thumbnail)} alt="card"  style={{"maxWidth": 200, "minWidth": 200, "maxHeight": 120, "minHeight": 120}}></img>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.subtitle}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        )
};

export default ProjectCard;