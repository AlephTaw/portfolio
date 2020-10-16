import CatSummary from './CatSummary'
import React from 'react';

const CatSummaryList = ({sectionSummaries}) => {
  console.log('section summaries in Cat summary list', sectionSummaries)
        return(
          <>
                {sectionSummaries && sectionSummaries.map((summary) => {
                    return(
                        <div className="col-md" key={summary.id}>
                            <CatSummary id = {summary.id} category = {summary.category} thumbnail={summary.thumbnail} title={summary.title} subtitle={summary.subtitle} description={summary.description} sourceRef={summary.sourceRef}/> 
                            <div className="col-xs-12" style={{height: "100px"}}></div>
                        </div>
                    )
                })}
          </>
        )
};

export default CatSummaryList;