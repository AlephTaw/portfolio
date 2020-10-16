import React, {Component} from 'react';
import profilePic from '../../public/img/profile1.1.jpg';
import StaticTimeline from '../timeline/StaticTimeline';

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
                </div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                <div className="row mb-2">
                    <div className="col-6 mx-auto">
                        <StaticTimeline timeline={timeline}/>
                    </div>
                </div>

                <div className="col-xs-12" style={{height: "100px"}}></div>
                {/* </div> */}
                <div className="col-xs-12" style={{height: "300px"}}></div>
            </div>
        )
    }
};

export default About;