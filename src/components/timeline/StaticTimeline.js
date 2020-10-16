import React, { useState } from 'react';
import { Button, Fade } from 'react-bootstrap';
import projectReducer from '../../redux/reducers/projectReducer';
import LatexInMarkDown from '../projects/LatexInMarkdown'

// const TimelineEntry = (event) => {
//   return(
//       <div className={event.eventClass}>
//       <div className="tl-content">
//         <h2>{event.date}</h2>
//         <p>{event.description}</p>
//       </div>
//     </div>
//   )
// }

const CollapsableTimeline = (props) => {
  // const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const { timeline } = props
  return (
    <>
                {/* <h2 className="text-center mt-5">
                <button
                  // className=""
                  // onClick={() => setOpen(!open)}
                  aria-controls="example-fade-text"
                  aria-expanded={true}
                  style={{"outline": "none", "fontSize": "36px", "padding": 0, "border": "none", "background": "none", "color": "black"}}
                >
                  Timeline
                </button> 
                </h2>
                <hr></hr> */}
                {/* <div className="container mt-5 mb-5">
                <div className="row">
                <div className="col-md-10 offset-md-1"> */}

      <Fade in={open}>
        <div id="example-fade-text">
        <div className="timeline">
          {!timeline ? <p>Timeline under construction</p> : timeline.map(
            (event, index) => {
              let tlSide
              index%2 == 0 ? tlSide = "left" : tlSide = "right"
              event.eventClass = `tl-container ${tlSide}`
              console.log(event, index)
              return(
                <div key = {index}>
                  <div className={event.eventClass}>
                  <div className="tl-content">
                    <h2>{event.date}</h2>
                    <LatexInMarkDown source ={event.description}/>
                  </div>
                </div>
              </div>         
              )}
          )}
        </div>
        </div>
      </Fade>

    {/* </div>
    </div>
    </div> */}

    </>
  );
}

export default CollapsableTimeline;