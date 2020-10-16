import React, {Component} from 'react';
import EmbeddedGist from '../../Gists/EmbeddedGist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import firebase from 'firebase'
import PaperHeader from '../content_templates/partails/headers/PaperHeader';
import paperAvatar from '../../../public/img/seedling.jpeg'
import LatexInMarkDown from '../../projects/LatexInMarkdown';

class PaperTemplate extends Component {
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
    console.log("The Paper Template Props ***: ", this.props.paper)
    let avatarUrl = '';
    // storage.ref('seedling.jpeg').getDownloadURL()
    //   .then((url) => {
    //     avatarUrl = url
    //     // Do something with the URL ...
    //     console.log("avatarUrl", avatarUrl)
    //   })
      if(this.props.paper){
        const {title, subtitle, description, introduction, body, conclusion, citations, thumbnail, gist} = this.props.paper
        const header = {title, subtitle, description,}
        avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/'+ thumbnail + '?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f'
        return(
          <>
        <div className="col-xs-12" style={{height: "100px"}}></div>
        <PaperHeader header={header}/>
        <div className="col-xs-12" style={{height: "30px"}}></div>
        <div className="col-xs-12" style={{height: "30px"}}></div>
        <div className="container" style={{"maxWidth": 1000, "minWidth": 1000}}>
        <div className="row text-center">
            <div className="col">
              <img src={avatarUrl} style={{"borderRadius": "100%", "width": 110, "height": 110}}></img>
            </div>
          </div>
          <div className="col-xs-12" style={{height: "50px"}}></div>
          <div className="text-center">
            <h4>
              Introduction
            </h4>
            <LatexInMarkDown source={introduction}/>
          </div>
          <div className="col-xs-12" style={{height: "50px"}}></div>
          <EmbeddedGist gist={gist} />
          <div className="col-xs-12" style={{height: "50px"}}></div>
        </div>    
        <div className="col-xs-12" style={{height: "150px"}}></div>
        <div className="text-center">
          <h4>
          Conclusions and Further Work
          </h4>
          <p>
          <LatexInMarkDown source={conclusion}/>
          </p>
        </div>
        <div className="text-center">
          <h4>
          References
          </h4>
          <p>
          <LatexInMarkDown source={citations}/>
          </p>
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

const mapStatetoProps = (state, ownProps) => {
  let paperId = ownProps.match.params.id
  paperId = paperId.split(" ").join("")
  console.log('paperId: ', paperId)
  const papers = state.firestore.data.papers
  const paper = papers ? papers[paperId] : null
  console.log('**Paper:** ', papers)
  console.log('Paper Template State ', state)
  console.log('youre in paper template')
  return {
    paper,
  };
};

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
      { collection: 'papers'},
  ]),
)(PaperTemplate)
