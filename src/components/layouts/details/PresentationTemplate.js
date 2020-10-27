import React from 'react';
import { Link } from 'react-router-dom';
import AnalysisSlide from './slides/AnalysisSlide';
import MoreAnalysisSlide from './slides/MoreAnalysisSlide';
import CoverSlide from './slides/CoverSlide';
import IntroductionSlide from './slides/IntroductionSlide';
import ConceptSlide from './slides/ConceptSlide';
import AppArchitectureSlide from './slides/AppArchitectureSlide';
import FurtherWorkSlide from './slides/FurtherWorkSlide';
import FormalizationSlide from './slides/FormalizationSlide';
import References from './slides/References';
import Slider from 'react-slick';


// const CreatePage = (WrappedComponent) => (props) => {
//   return(
//     <>
//       <WrappedComponent {...props}>
//         {props.children}
//       </WrappedComponent>
//     </>
//   )
// };

// const SimpleStyle = (props) => (
//   <>
//     <div className = 'text-center' style={{"maxWidth": "100%"}}>
//       {props.children}
//     </div>
//   </>
// );

// const Page = CreatePage(SimpleStyle);

const Spacer = () => (
  <div className="col-xs-12" style={{height: "10px"}}></div>
)
const PresentationTemplate = (props) => {
  const landingPagePath = `/projects/Understanding Sentiment and Semantics Overtime/lJ4F1AlsgL3LRIKiVE6D`
  return(
    <div style={{"width": "100%", "padding": "32px"}}>
      <div className="text-center"><Link to={landingPagePath}>Project Home</Link></div>
      <div className="col-xs-12" style={{height: "40px"}}></div>
      <Slider
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={false}
        dots={true}
      >
        {/* <Page/><CoverSlide/><Page/>
        <Page><IntroductionSlide/></Page>
        <Page><AnalysisSlide/></Page>
        <Page><FurtherWorkSlide/></Page>
        <Page><References/></Page> */}
        <div className="text-center" style={{"maxWidth": "100%"}}>
          <CoverSlide/>
          {/* <Spacer/> */}
        </div>
        <div className="text-center" style={{"maxWidth": "100%"}}>
          <IntroductionSlide/>
          {/* <Spacer/> */}
        </div>
        <div className="text-center" style={{"maxWidth": "100%"}}>
          <FormalizationSlide/>
          {/* <Spacer/> */}
        </div>
        <div className="text-center" style={{"maxWidth": "100%"}}>
          <ConceptSlide/>
          {/* <Spacer/> */}
        </div>
        <div className="text-center" style={{"maxWidth": "100%"}}>
          <AppArchitectureSlide/>
          {/* <Spacer/> */}
        </div>
        <div className="text-center" style={{"maxWidth": "100%"}}>
          <AnalysisSlide/>
          {/* <Spacer/> */}
        </div>
        <div className="text-center" style={{"maxWidth": "100%"}}>
          <MoreAnalysisSlide/>
          {/* <Spacer/> */}
        </div>
        <div className="text-center" style={{"maxWidth": "100%"}}>
          <FurtherWorkSlide/>
          {/* <Spacer/> */}
        </div>
        <div className="text-center" style={{"maxWidth": "100%"}}>
          <References/>
          {/* <Spacer/> */}
        </div>
      </Slider>
      <div className="col-xs-12" style={{height: "100px"}}></div>
      <div className="d-flex justify-content-center">
        <p>View the pipeline and portfolio source code below.</p>
      </div>
        <div className="d-flex justify-content-center">
          <div className="m-2">
          <a src={"https://https://github.com/AlephTaw/portfolio"}><i class="far fa-window-maximize fa-2x"></i></a>
          </div>
          <div className="m-2">
            <a src={"https://github.com/workbench-a/fact-check-api"}><i class="fas fa-code fa-2x"></i></a>
          </div>
      </div>
    </div>

  )
};

export default PresentationTemplate;