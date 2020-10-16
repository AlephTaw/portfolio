import React from 'react';
import profilePic from '../../../../../public/img/profile.jpg';
import { Link } from 'react-router-dom';


const HomeHeader = (props) => {
        return(
          <>
            <div className="text-center">
              <div className="container" style={{"maxWidth": 600, "minWidth": 400}}>
                <div className="row float-center">
                  <div className="col-4"  style={{"marginLeft": "0px", "marginRight": "40px", "paddingLeft": "0px"}}>
                      <img src={profilePic} alt="not found" style={{"borderRadius": 100, "width": "120px", "height": "120px", "marginLeft": "80px", "display": "block"}}></img>
                  </div>
                  <div className='row pl-5'>
                      <div className="col my-auto">
                          <h4 className="row float-center">
                              Steven Wilcox
                          </h4>
                          <div className="row">
                              <div className="text-center">
                                  <h5>
                                  "A Laboratory in the Cloud"
                                  </h5>
                              </div>
                              </div>
                              <div className = "col-9">
                              <div className="d-flex justify-content-between">
                                  <div>
                                      <a style={{"color": "black"}} href="https://www.github.com/AlephTaw"><i className="fab fa-github fa-2x" style={{"marginRight": "4px", "fontSize": "32px"}}></i></a>
                                  </div>
                                      {/* <i className="fab fa-twitter fa-2x mr-2"></i> */}     
                                  <div>                                       
                                      <a style={{"color": "black"}} href="https://www.linkedin.com/in/steven-wilcox-0002"><i class="fab fa-linkedin fa-2x" style={{"marginRight": "4px", "fontSize": "32px"}}></i></a>
                                  </div>
                                  <div>
                                      <Link to="about"><i className="fas fa-info-circle fa-2x" style={{"marginRight": "4px", "fontSize": "32px"}}></i></Link>
                                  </div>
                              </div>
                              </div>
                        </div>
                  </div>
                </div>
                <hr></hr>
              </div>
            </div>
          </>
        )
};

export default HomeHeader;