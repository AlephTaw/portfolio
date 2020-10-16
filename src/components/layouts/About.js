import React, {Component} from 'react';
import profilePic from '../../public/img/profile1.1.jpg';
import StaticTimeline from '../timeline/StaticTimeline';
import HomeHeader from '../layouts/content_templates/partails/headers/HomeHeader'

class About extends Component{
    render() {
        const timeline = [
            {
                date: 'October 2020',
                description: 'The cloud lab is online, and timeline is finalized.',
                eventClass: '',
            },
            {
                date: 'November 2020',
                description: 'The first projects are uploaded',
                eventClass: '',
            },
            {
                date: 'December 2020',
                description: 'Benchmarks of fluency.',
                eventClass: '',
            },
        ]
        return(
            <div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                <HomeHeader/>
                {/* <div className="text-center">
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
                                    <div className="mb text-left">
                                        <h4 className="font-italic text-muted">
                                        "A Laboratory in the Cloud"
                                        </h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb text-left">
                                        <div className="font-italic">
                                            <p>אברא כדברא</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="container" style={{"maxWidth": 900, "minWidth": 400}}>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                        <div className="text-center">
                        <h4 className="float-center">
                        About this Project
                        </h4>
                        <p> 
                            A lab / A Modern Day Lab Notebook:
                            A Narrative:
                            What it is and what its not
                            Tired of tired resumes? It's time to raise the bar and take responsibility for credentialing.
                        </p>
                        <hr></hr>
                        <p>Topic • Data Source • Project Type • Libraries</p>
                    </div>

                    <div className="col-xs-12" style={{height: "50px"}}></div>
                        <div className="text-center">
                        <h4 className="float-center">
                            About Me
                        </h4>
                        <p> 
                            We live in a world of untapped potential, unrealized innovation, and, as such, of unfullfilled purpose.
                            Let us light a candle to illuminate what has always been within our reach, the capacity to imagine better.
                        </p>
                        <hr></hr>
                        <p>Topic • Data Source • Project Type • Libraries</p>
                    </div>

                    <div className="col-xs-12" style={{height: "50px"}}></div>
                        <div className="text-center">
                        <h4 className="float-center">
                            Contact and Traditional CV
                        </h4>
                        <p> 
                        To contact me or view a more traditional presentation of my work, you can access my CV here.
                        </p>
                    </div>

                    <div className="col-xs-12" style={{height: "100px"}}></div>
                </div>
            </div>
        )
    }
};

export default About;