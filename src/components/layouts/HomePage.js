import React, {Component} from 'react';
import HomeHeader from './content_templates/partails/headers/HomeHeader';


import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import CatSummaryList from '../cards/CatSummaryList';
import { compose } from 'redux';

class HomePage extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.firestore.setListener({collection: 'sectionSummaries'})
    }
    componentWillUnmount(){
        this.props.firestore.unsetListener({collection: 'sectionSummaries'})
    }
    render(){
        console.log('props: ', this.props)
        // let storage = this.props.firebase.storage(); // see react-redux-firebase docs
        return(
            <div>
                {/* <div>{sectionSummaries && sectionSummaries[0].description}</div> */}
                <div>
                <div className="col-xs-12" style={{height: "100px"}}></div>
                <HomeHeader/>

                <div className="col-xs-12" style={{height: "150px"}}></div>
                <CatSummaryList sectionSummaries = {this.props.sectionSummaries}/>

                {/* </div> */}
                <div className="col-xs-12" style={{height: "100px"}}></div>
                </div>
            </div>
        )
    }
};

const mapStatetoProps = (state) => {
    console.log('HomePage State ', state)
    return {
        sectionSummaries: state.firestore.ordered.sectionSummaries,
    }
  }
  export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'sectionSummaries', orderBy: ['listSequence'] },
    ]),
  )(HomePage)