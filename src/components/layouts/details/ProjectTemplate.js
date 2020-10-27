import React, {Component} from 'react';
import EmbeddedGist from '../../Gists/EmbeddedGist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import firebase from 'firebase'
import ProjectHeader from '../content_templates/partails/headers/ProjectHeader';
import projectAvatar from '../../../public/img/seedling.jpeg'
import LatexInMarkDown from '../../projects/LatexInMarkdown';

import AppLandingPage from './AppLandingPage'
import SimpleTemplate from './SimpleTemplate'
import PresentationTemplate from './PresentationTemplate'
import ConceptSlide from './slides/ConceptSlide';

class ProjectTemplate extends Component {
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
    console.log("The Project Template Props ***: ", this.props.project)
    const storage = firebase.storage();
    let avatarUrl = '';
    // storage.ref('seedling.jpeg').getDownloadURL()
    //   .then((url) => {
    //     avatarUrl = url
    //     // Do something with the URL ...
    //     console.log("avatarUrl", avatarUrl)
    //   })
      if(this.props.project){
        const {title, subtitle, description, introduction, body, conclusion, citations, thumbnail, gist, template, id} = this.props.project
        avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/'+ thumbnail + '?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f'
        const header = {title, subtitle, description,}
        if(template === "simple"){
          return(
            <>
              <SimpleTemplate data = {this.props.project} header={header} avatarUrl={avatarUrl}/>
            </>
           )
        }else if(template === "webApp"){
          console.log("webApp")
          return(
            <>
              <AppLandingPage/>
            </>
           )
        }else if(template === "presentation"){
          return(
            <>
              <PresentationTemplate title={title} id={id}/>
            </>
            )
        }else{
          return(
            <>
              <SimpleTemplate data = {this.props.project} header={header} avatarUrl={avatarUrl}/>
            </>
           )
        }

      }else{
        return(
        <>
          <div className="col-xs-12" style={{height: "400px"}}></div>
          <div className="text-center">
            <h2>
            [... Loading ...]
            </h2>
          </div>
          <div className="col-xs-12" style={{height: "600px"}}></div>
        </>
        )
      }

        };
    };

const mapStatetoProps = (state, ownProps) => {
  let projectId = ownProps.match.params.id
  projectId = projectId.split(" ").join("")
  console.log('projectId: ', projectId)
  const projects = state.firestore.data.projects
  const project = projects ? projects[projectId] : null
  console.log('**Project:** ', projects)
  console.log('Project Template State ', state)
  console.log('youre in project template')
  return {
    project,
  };
};

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
      { collection: 'projects'},
  ]),
)(ProjectTemplate)
