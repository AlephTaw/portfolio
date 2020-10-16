import React from 'react';
import projectAvatar from '../../../../public/img/seedling.jpeg'
import LatexInMarkDown from '../../../projects/LatexInMarkdown';

const References = (props) => {
  console.log("References: ", props)
        return(
          <>
            <div className="text-center">
                <h4>
                References
                </h4>
                <div></div>
                <p>
                <LatexInMarkDown source={`**This is a bunch of text with latex in it see: $M^{2}*\\frac{4-t}{p+4}$**`}/>
                </p>
            </div>
          </>
        )};

export default References;