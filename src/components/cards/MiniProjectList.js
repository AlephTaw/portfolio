import React from 'react'
import MiniProjectSummary from './MiniProjectSummary'
import { Link } from 'react-router-dom'

const MiniProjectList = ({miniTopics}) => {
  return (
    <>
    {miniTopics && miniTopics.map(miniTopic => {
      return(
        // <Link key={topic.title} to={'/topic/' + topic.id}>
        <div key={miniTopic.title}>
          <MiniProjectSummary miniTopic={miniTopic}/>
        </div>
        // </Link>
      )
    })}
    </>
  )
};

export default MiniProjectList
