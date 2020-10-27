import React, {Component} from 'react';
import EmbeddedGist from '../../Gists/EmbeddedGist'
import ProjectHeader from '../content_templates/partails/headers/ProjectHeader';
import LatexInMarkDown from '../../projects/LatexInMarkdown';

class SimpleTemplate extends Component {
  constructor(props){
      super(props);
  }
  render(){
  if(this.props.data){
    const {header, avatarUrl, data} = this.props
    const {introduction, gist, conclusion, citations} = data
    console.log("this.props.data: ", this.props.data)
  return(
    <>
      <div className="col-xs-12" style={{height: "100px"}}></div>
      <ProjectHeader header={header} />
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
        <LatexInMarkDown source={conclusion}/>
      </div>
      <div className="text-center">
        <h4>
        References
        </h4>
        <LatexInMarkDown source={citations}/>
      </div>
      <div className="col-xs-12" style={{height: "150px"}}></div>
    </>
  )
  }
}
};

export default SimpleTemplate;