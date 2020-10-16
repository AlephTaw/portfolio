import React, {Component} from 'react';
import profilePic from '../../public/img/profile1.1.jpg';
import StaticTimeline from '../timeline/StaticTimeline';
import HomeHeader from '../layouts/content_templates/partails/headers/HomeHeader'
import LatexInMarkdown from '../projects/LatexInMarkdown'

class About extends Component{
    render() {
        const timeline = [
            {
                date: 'October 2020',
                description: `Cloud lab is online, and timeline is finalized. \n
                              -[x] Refine content. \n
                              -[] Complete regression and object detection production pipelines.`,
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
        const subtitle = `While("You are what you repeatedly do."){...}`
        return(
            <div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                <HomeHeader/>
                <div className="container" style={{"maxWidth": 2000, "minWidth": 400}}>
                    <div className="col-xs-12" style={{height: "50px"}}></div>
                        <div className="text-center">
                        <h2 className="float-center">
                        Timeline
                        </h2>
                        <p>
                            {subtitle}
                        </p>
                    </div>

                    <div className="col-xs-12" style={{height: "50px"}}></div>
                    <div className="row mb-2">
                        <div className="col-6 mx-auto">
                            <StaticTimeline timeline={timeline}/>
                        </div>
                    </div>

                    <div className="col-xs-12" style={{height: "100px"}}></div>
                    {/* </div> */}
                    <div className="col-xs-12" style={{height: "300px"}}></div>
                </div>
            </div>
        )
    }
};

export default About;