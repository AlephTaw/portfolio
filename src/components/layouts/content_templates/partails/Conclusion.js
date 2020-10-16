import React from 'react';
import projectAvatar from '../../../../public/img/seedling.jpeg'
import LatexInMarkDown from '../../../projects/LatexInMarkdown';

const Conclusion = ({project}) => {
  console.log("Conclusion: ", props)
  if (project) {
    return(
      <>
        <div className="text-center">
            <h4>
            Conclusions and Further Work
            </h4>
            <div>{project.conclusion}</div>
            <p>
            <LatexInMarkDown source={`**This is a bunch of text with latex in it see: $M^{2}*\\frac{4-t}{p+4}$**`}/>
            </p>
        </div>
      </>
    )
  } else {
    return (
      <div className="container center">
        <p>project loading ...</p>
      </div>
    )
  }
}


export default Conclusion;