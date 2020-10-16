import React, { useState } from 'react';
import { Button, Fade } from 'react-bootstrap';

const CollapsableTimeline = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="col-xs-12" style={{height: "50px"}}></div>
                <h2 className="text-center mt-5">
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-fade-text"
                  aria-expanded={open}
                  style={{"fontSize": "36px", "padding": 0, "border": "none", "background": "none", "color": "black"}}
                >
                  Timeline {open ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i> }
                </Button> 
                </h2>
                <hr></hr>
                {/* <div className="container mt-5 mb-5">
                <div className="row">
                <div className="col-md-10 offset-md-1"> */}

      <Fade in={open}>
        <div id="example-fade-text">
        <div className="timeline">
            <div className="tl-container left">
              <div className="tl-content">
                <h2>2017</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
            <div className="tl-container right">
              <div className="tl-content">
                <h2>2016</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
            <div className="tl-container left">
              <div className="tl-content">
                <h2>2015</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
            <div className="tl-container right">
              <div className="tl-content">
                <h2>2012</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
            <div className="tl-container left">
              <div className="tl-content">
                <h2>2011</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
            <div className="tl-container right">
              <div className="tl-content">
                <h2>2007</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
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