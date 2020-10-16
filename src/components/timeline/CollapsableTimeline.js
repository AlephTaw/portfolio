import React, { useState } from 'react';
import { Button, Fade } from 'react-bootstrap';
import projectReducer from '../../redux/reducers/projectReducer';

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
  const [open, setOpen] = useState(false);
  const { timeline } = props
  return (
    <>
      <div className="col-xs-12" style={{height: "50px"}}></div>
                <h2 className="text-center mt-5">
                <button
                  // className=""
                  onClick={() => setOpen(!open)}
                  aria-controls="example-fade-text"
                  aria-expanded={open}
                  style={{"outline": "none", "fontSize": "36px", "padding": 0, "border": "none", "background": "none", "color": "black"}}
                >
                  Timeline {open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i> }
                </button> 
                </h2>
                <hr></hr>
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
                    <p>{event.description}</p>
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