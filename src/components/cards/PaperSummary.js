import React from 'react';
import {Link} from 'react-router-dom';

const PaperSummary = (props) => {
        if(props.summary){
          const {id, thumbnail, title, subtitle, body, topic, category, sourceRef} = props.summary
          const avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/'+ thumbnail + '?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f'

          return(
            <div className="card mx-auto" style={{"maxWidth": "900px", "minHeight": "200px", "borderRadius": "0px", "borderLeftWidth": "0px", "borderRightWidth": "0px", "borderTopWidth": "8px", "borderBottomWidth": "8px", "borderTopColor": "rgba(109, 207, 238, 0.22)", "borderBottomColor": "rgba(109, 207, 238, 0.22)"}}>
              <div className="row ">
                  <div className="col-md-4 text-center my-auto">
                      <img src={avatarUrl} className="w-75" style={{"maxWidth": "75%", "minHeight": "75%", "margin": "20px"}}></img>
                  </div>
                  <div className="col-md-8 px-3">
                      <div className="card-block px-3">
                      <h4 className="card-title" style={{"marginTop": "20px"}}>{title}</h4>
                      <p className="card-subtitle" style={{"marginTop": "5px"}}>{subtitle}</p>
                      <p className="card-text" style={{"marginTop": "10px"}}>{body}</p>
                          <div className="d-flex flex-row float-right" style={{"marginBottom": "20px"}}>
                            <Link to={`${title}/${id}`}  style={{"color": "inherit"}}>
                              <button href={`${title}/${id}`} className="" style={{"borderRadius": "10px", "backgroundColor": "white", "outlineColor": "black", "borderWidth": "1px"}}>Read More</button>
                            </Link>
                                  <a className="" style={{"color": "black"}} href={sourceRef}><i className="fab fa-github fa-2x" style={{"marginLeft": "30px", "marginRight": "10px", "fontSize": "32px"}}></i></a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          )
        }else{
          return(
            <div className="card mx-auto" style={{"maxWidth": "900px", "minHeight": "200px", "borderRadius": "0px", "borderLeftWidth": "0px", "borderRightWidth": "0px", "borderTopWidth": "8px", "borderBottomWidth": "8px", "borderTopColor": "rgba(109, 207, 238, 0.22)", "borderBottomColor": "rgba(109, 207, 238, 0.22)"}}>
              <div className="row">
                [... Loading ...]
              </div>
            </div>
          )
        }
        
};

export default PaperSummary;