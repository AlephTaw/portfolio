import React, {Component} from 'react';
import EmbeddedGist from '../../Gists/EmbeddedGist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import firebase from 'firebase'
import ResearchHeader from '../content_templates/partails/headers/ResearchHeader';
import LatexinMarkdown from '../../projects/LatexInMarkdown'

import MiniProjectList from '../../cards/MiniProjectList'
import ResearchAvatar from '../../../public/img/seedling.jpeg'
import researchBody from '../../../content/body/research'
class ResearchTemplate extends Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){
      this.props.firestore.setListener({collection: 'researchSummary'})
  }
  componentWillUnmount(){
      this.props.firestore.unsetListener({collection: 'researchSummary'})
  }
  render(){
    const storage = firebase.storage();
      let avatarUrl = ''
      console.log("this props ... at research template: ", this.props)
      if(this.props.miniTheory && this.props.miniTopics && this.props.miniTopics && this.props.researchSummary[0]){ // this is gross. find another way.
        // if(this.props.researchSummary[0]){
          console.log("The Research Template Props ***: ", this.props)
        const {introduction, body, conclusion, citations, thumbnail, gist} = this.props.researchSummary[0]
        const avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/'+ thumbnail + '?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f'
        // const avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/chalkboard.jpg?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f';
        // console.log("avatarUrl: ", thumbnail)
        return(
          <>
            <div className="col-xs-12" style={{height: "100px"}}></div>
            <ResearchHeader />
            <div className="col-xs-12" style={{height: "30px"}}></div>
            <div className="container" style={{"maxWidth": 1000, "minWidth": 500}}>
            <div className="row text-center">
                <div className="col">
                  <img src={avatarUrl} style={{"borderRadius": "100%", "width": 110, "height": 110}}></img>
                </div>
            </div>

            <div className="col-xs-12" style={{height: "50px"}}></div>
            <div className="text-center">
            <h4 className="float-center">
              Topics in Machine Learning
            </h4>
              <p> 
                The following is a selection of projects categorized as (general) projects, pipelines, or sandboxes. Each entry utilizes the semantic tagging scheme below.
              </p>
              <hr></hr>
              <p>Topic • Data Source • Project Type • Libraries</p>
            </div>


            <div className="col-xs-12" style={{height: "50px"}}></div>
                  <div className="d-flex flex-wrap justify-content-around">
                    <MiniProjectList miniTopics={this.props.miniTopics}/>
                  </div>
            <div className="col-xs-12" style={{height: "50px"}}></div>


            <div className="col-xs-12" style={{height: "50px"}}></div>
            <div className="text-center">
            <h4 className="float-center">
              Development, and Deployment, and Tooling
            </h4>
              <p> 
                The following is a selection of projects categorized as (general) projects, pipelines, or sandboxes. Each entry utilizes the semantic tagging scheme below.
              </p>
              <hr></hr>
              <p>Topic • Data Source • Project Type • Libraries</p>
            </div>


            <div className="col-xs-12" style={{height: "50px"}}></div>
                  <div className="d-flex flex-wrap justify-content-around">
                    <MiniProjectList miniTopics={this.props.miniSkills}/>
                  </div>
            <div className="col-xs-12" style={{height: "50px"}}></div>

            <div className="col-xs-12" style={{height: "50px"}}></div>
            <div className="text-center">
            <h4 className="float-center">
              Theory 
            </h4>
              <p> 
                Notes on Artificial Intellingence and Mathematics
              </p>
              <hr></hr>
              <p>Topic • Data Source • Project Type • Libraries</p>
            </div>


            <div className="col-xs-12" style={{height: "50px"}}></div>
                  <div className="d-flex flex-wrap justify-content-around">
                    <MiniProjectList miniTopics={this.props.miniTheory}/>
                  </div>
            <div className="col-xs-12" style={{height: "50px"}}></div>


            </div>
            <div className="col-xs-12" style={{height: "150px"}}></div>
          </>
        )
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

const mapStatetoProps = (state) => {
  console.log('ResearchTemplate State ', state)
  return {
    miniTopics: state.firestore.ordered.miniProjects,
    miniTheory: state.firestore.ordered.miniTheory,
    miniSkills: state.firestore.ordered.miniSkills,
    researchSummary: state.firestore.ordered.researchSummary,
  }
}
export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    { collection: 'researchSummary'},
    { collection: 'miniProjects', where: ["category",'==', "topics"]},
    { collection: 'miniSkills'},
    { collection: 'miniTheory'},
    // { collection: 'miniModes', where: ["category",'==', "modes"], orderBy: ['createdAt']},
    ]),
)(ResearchTemplate)
