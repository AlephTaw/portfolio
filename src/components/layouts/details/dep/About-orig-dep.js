import React, {Component} from 'react';
// import { Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import profilePic from '../../public/img/profile1.1.jpg';
import StaticTimeline from '../timeline/StaticTimeline';
import { Link } from 'react-router-dom';


class About extends Component{
    render() {
        const timeline = [
            {
                date: 'January 2020',
                description: 'This is a description of the timeline',
                eventClass: '',
            },
            {
                date: 'February 2020',
                description: 'This is a description of the timeline',
                eventClass: '',
            },
            {
                date: 'March 2020',
                description: 'This is a description of the timeline',
                eventClass: '',
            },
            ]
        return(
            <div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                <div className="text-center">
                    <div className="container" style={{"maxWidth": 600, "minWidth": 400}}>
                        <div className="row">
                            <div className="col">
                                <img src={profilePic} alt="not found" style={{"borderRadius": 90}}></img>
                            </div>
                            <div className="col my-auto">
                                <div className="row mb-2">
                                    <h3>
                                    Steven Wilcox
                                    </h3>
                                </div>

                                <div className="row mb-3">
                                    <div className="mb-2 text-left">
                                        <h4 className="font-italic text-muted">
                                        "A Laboratory in the Clouds"
                                        </h4>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h4 className="mr-2 mt-2">
                                            Return
                                        </h4>
                                        <div>                                            
                                        <Link style={{"color": "black"}} to="/"><i class="fas fa-home fa-2x"></i></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                <div className="row mb-2">
                    <div className="col-6 mx-auto">
                        Within the last 500 years, the practice of the scientific method has completely transformed the the technological landscape of human society. Over roughly 100 years, transformations in our understanding of chemical, mechanical, and nuclear science have turned
                        
                        Recreational Prognostication (or some reasons why you might want to care about AI)
                        Some cherrypicking, 500 years since the scientific revolutions, 150 years since maxwells equations, 100 years since the pertrol chemical revolution, ... and scientific development slows.
                        A series of thoughful questions.
                        What effect does technology have on the viability of human life on the planet?
                        What if we had discovered atomic weapons earlier?
                        What if we ....
                        What if ....
                        We must pass the filters that threaten the universal peace, longevity, and advancement of our societies.
                        We must protect the human agency.
                        What we have to gain
                        What we have to lose (good and bad if we do or do not proceed)
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 mx-auto">
                        <StaticTimeline timeline={timeline}/>
                    </div>
                </div>

                <div className="col-xs-12" style={{height: "100px"}}></div>
                {/* <div className="text-center"> */}
                {/* <Button variant='outline-dark' href='/#/donate'>Donate</Button> */}
                {/* <button className='btn btn-outline-dark'>Without React</button> */}
                    

                {/* </div> */}
                <div className="col-xs-12" style={{height: "300px"}}></div>
            </div>
        )
    }
};

export default About;