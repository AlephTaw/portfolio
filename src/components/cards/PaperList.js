import PaperSummary from './PaperSummary';
import React from 'react';

const PaperList = (props) => {
  const {paperSummaries} = props
        return(
          <>
            {paperSummaries && paperSummaries.map((summary) => {
              return(
                  <div className="col-md" key={summary.id}>
                      <PaperSummary summary={summary}/> 
                      <div className="col-xs-12" style={{height: "100px"}}></div>
                  </div>
              )
            })}
          </>
        )
};

export default PaperList;