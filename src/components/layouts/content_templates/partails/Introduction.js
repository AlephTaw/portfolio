import React from 'react';
import projectAvatar from '../../../../public/img/seedling.jpeg'
import LatexInMarkDown from '../../../projects/LatexInMarkdown';

const Introduction = ({introduction}) => {
        return(
          <>
            <div className="row text-center">
              <div className="col">
                <img src={projectAvatar} style={{"borderRadius": "100%", "width": 110, "height": 110}}></img>
              </div>
            </div>
            <div className="col-xs-12" style={{height: "50px"}}></div>
            <div className="text-center">
              <h4>
                Introduction
              </h4>
              {introduction && introduction}
              <LatexInMarkDown source={`**This is a bunch of text with latex in it see: $M^{2}*\\frac{4-t}{p+4}$**`}/>
            </div>
          </>
        )};

export default Introduction;
