import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component{
    render() {
        return(
            <div>
                <div className="col-xs-12" style={{height: "300px"}}></div>
                <div className="text-center">
                    <h1>Scheduled Maintainance</h1>
                    <h4>We're tweaking some things under the hood. Please check back soon!</h4>
                </div>
                <div className="col-xs-12" style={{height: "300px"}}></div>

            </div>
        )
    }
};

export default NotFoundPage;