import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component{
    render() {
        return(
            <div>
                <div className="col-xs-12" style={{height: "300px"}}></div>
                <div className="text-center">
                    <h1>404 - <Link to="/">Go home</Link></h1>
                </div>
                <div className="col-xs-12" style={{height: "300px"}}></div>

            </div>
        )
    }
};

export default NotFoundPage;