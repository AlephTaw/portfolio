import React from 'react';
import {Link} from 'react-router-dom';

const HorizSummary = (props) => {
  const {id, thumbnail, title, subtitle, body, topic, moreRef, sourceRef} = props
        return(
          <div class="card mx-auto" style={{"maxWidth": "900px", "minHeight": "200px", "borderLeftWidth": "0px", "borderRightWidth": "0px", "borderTopWidth": "8px", "borderBottomWidth": "8px", "borderTopColor": "rgba(109, 207, 238, 0.22)", "borderBottomColor": "rgba(109, 207, 238, 0.22)"}}>
            <div class="row ">
                <div class="col-md-4 text-center my-auto">
                    <img src={thumbnail} class="w-75" style={{"maxWidth": "75%", "minHeight": "75%", "margin": "20px"}}></img>
                </div>
                <div class="col-md-8 px-3">
                    <div class="card-block px-3">
                    <h4 class="card-title" style={{"marginTop": "20px"}}>{title}</h4>
                    <p class="card-subtitle" style={{"marginTop": "5px"}}>{subtitle}</p>
                    <p class="card-text" style={{"marginTop": "10px"}}>{body}</p>
                        <div className="d-flex flex-row float-right" style={{"marginBottom": "20px"}}>
                          <Link to={`${topic}/${id}`} style={{"color": "inherit"}}>
                            <button href={topic} className="" style={{"borderRadius": "10px", "backgroundColor": "white", "outlineColor": "black", "borderWidth": "1px"}}>Read More</button>
                          </Link>
                                <a className="" style={{"color": "black"}} href={sourceRef}><i className="fab fa-github fa-2x" style={{"marginLeft": "30px", "marginRight": "10px", "fontSize": "32px"}}></i></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
};

export default HorizSummary;