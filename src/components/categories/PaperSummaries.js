import React, {Component} from 'react';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import CatHeader from '../layouts/content_templates/partails/headers/CatHeader';
import PaperList from '../cards/PaperList';

class PaperSummaries extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.firestore.setListener({collection: 'paperSummaries'})
    }
    componentWillUnmount(){
        this.props.firestore.unsetListener({collection: 'paperSummaries'})
    }
    render(){
      return(
        <>
            <CatHeader/>
                <div className="col-xs-12" style={{height: "150px"}}></div>
                <PaperList paperSummaries={this.props.paperSummaries}/>
        </>
      )
    };
  }


const mapStatetoProps = (state, ownProps) => {
    console.log('HomePage State ', state)
    return {
        paperSummaries: state.firestore.ordered.paperSummaries,
      // auth: state.firebase.auth,
    }
  }
  export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'paperSummaries', orderBy: ['listSequence', 'desc'] },
    ]),
  )(PaperSummaries)