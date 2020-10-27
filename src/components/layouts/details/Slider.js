import React from 'react';
import EmbeddedGist from '../../Gists/EmbeddedGist'
import ProjectHeader from '../content_templates/partails/headers/ProjectHeader';
import LatexInMarkDown from '../../projects/LatexInMarkdown';

const PresentationTemplate = (props) => {
  [state, setState] 
  const {header, avatarUrl, introduction, gist, conclusion, citations} = props.dataArray
  if(props.project){

  return(
    <>
      <Slider data={props.dataArray}/>
    </>
  )
}

export default PresentationTemplate