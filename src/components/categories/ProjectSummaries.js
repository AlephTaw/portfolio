import React, {Component} from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import CatHeader from '../layouts/content_templates/partails/headers/CatHeader';
import ProjectList from '../cards/ProjectList';

class ProjectSummaries extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.firestore.setListener({collection: 'projectSummaries'})
    }
    componentWillUnmount(){
        this.props.firestore.unsetListener({collection: 'projectSummaries'})
    }
    render(){
      return(
        <>
            <CatHeader/>
                <div className="col-xs-12" style={{height: "150px"}}></div>
                <ProjectList projectSummaries={this.props.projectSummaries}/>
        </>
      )
    };
  }


const mapStatetoProps = (state, ownProps) => {
    console.log('HomePage State ', state)
    return {
        projectSummaries: state.firestore.ordered.projectSummaries,
      // auth: state.firebase.auth,
    }
  }
  export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'projectSummaries', orderBy: ['listSequence', 'desc'] },
    ]),
  )(ProjectSummaries)