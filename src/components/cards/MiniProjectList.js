import React from 'react'
import MiniProjectSummary from './MiniProjectSummary'
import { Link } from 'react-router-dom'

const MiniProjectList = ({projects}) => {
  return (
    <div className="project-list section">
    {projects && projects.map(project => {
      return(
        <Link key={project.id} to={'/project/' + project.id}>
          <MiniProjectSummary project={project}/>
        </Link>
      )
    })}
    </div>
  )
};

export default MiniProjectList
