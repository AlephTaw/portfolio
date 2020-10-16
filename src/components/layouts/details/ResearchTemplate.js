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
      if(this.props.researchSummary){
        console.log("The Research Template Props ***: ", this.props.researchSummary[0])
        const {introduction, body, conclusion, citations, thumbnail, gist} = this.props.researchSummary[0]
        avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/'+ thumbnail + '?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f'
        // const avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/chalkboard.jpg?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f';
        console.log("avatarUrl: ", thumbnail)
        return(
          <>
            <div className="col-xs-12" style={{height: "100px"}}></div>
            <ResearchHeader />
            <div className="col-xs-12" style={{height: "30px"}}></div>
            <div className="container" style={{"maxWidth": 1000, "minWidth": 1000}}>
            <div className="row text-center">
                <div className="col">
                  <img src={avatarUrl} style={{"borderRadius": "100%", "width": 110, "height": 110}}></img>
                </div>
            </div>
            <div className="col-xs-12" style={{height: "50px"}}></div>
            <div className="row text-center">
              <div className="col">
                <div className="row text-center">
                  Topics
                </div>
                <div className="row text-center">
                  <MiniProjectList miniSummaries={miniSummaries}/>
                </div>
              </div>
            </div>
            <div className="col-xs-12" style={{height: "50px"}}></div>
            <div className="row text-center">
              <div className="col">
                <div className="row text-center">
                  Architectures
                </div>
                <div className="row text-center">
                  <MiniProjectList miniSummaries={miniSummaries}/>
                </div>
              </div>
            </div>
            <div className="col-xs-12" style={{height: "50px"}}></div>
            <div className="row text-center">
              <div className="col">
                <div className="row text-center">
                  Modes
                </div>
                <div className="row text-center">
                  <MiniProjectList miniSummaries={miniSummaries}/>
                </div>
              </div>
            </div>
            <div className="col-xs-12" style={{height: "50px"}}></div>
              <div className="text-center">
                <h4>
                  Additional Learning Resources
                </h4>
                  <div>
                    <LatexinMarkdown source={researchBody}/>
                  </div>
              </div>
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
  console.log('HomePage State ', state)
  return {
      researchSummary: state.firestore.ordered.researchSummary,
  }
}
export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    // { collection: 'researchProjects', orderBy: ['listSequence'] },
    { collection: 'miniProjects', where: ["category",'==', "topics"], orderBy: ['createdAt']},
    { collection: 'miniProjects', where: ["category",'==', "architectures"], orderBy: ['createdAt']},
    { collection: 'miniProjects', where: ["category",'==', "modes"], orderBy: ['createdAt']},
    ]),
)(ResearchTemplate)
