import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import NotFoundPage from '../components/layouts/NotFoundPage';
import MaintainanceMode from '../components/layouts/MaintainanceMode';
import HomePage from '../components/layouts/HomePage';
import About from '../components/layouts/About';
import Timeline from '../components/layouts/Timeline';
import ProjectSummaries from '../components/categories/ProjectSummaries';
import PaperSummaries from '../components/categories/PaperSummaries';

import PaperTemplate from '../components/layouts/details/PaperTemplate';
import ProjectTemplate from '../components/layouts/details/ProjectTemplate';
import PresentationTemplate from '../components/layouts/details/PresentationTemplate';
import ResearchTemplate from '../components/layouts/details/ResearchTemplate';

import SentimentApp from '../components/apps/sentimentApp/SentimentApp';

import HBar from '../components/viz/HBar';
import TreeBar from '../components/viz/TreeBar';
import Scatter from '../components/viz/Scatter';

import ReactD3E00 from '../components/viz/tutorials/ReactD3E00';
import ReactD3E01 from '../components/viz/tutorials/ReactD3E01';
import ReactD3E02 from '../components/viz/tutorials/ReactD3E02';
import ReactD3E03 from '../components/viz/tutorials/ReactD3E03';
import ReactD3E04 from '../components/viz/tutorials/ReactD3E04';
import ReactD3E05 from '../components/viz/tutorials/ReactD3E05';
import ReactD3E06 from '../components/viz/tutorials/ReactD3E06';
import ReactD3E07 from '../components/viz/tutorials/ReactD3E07';


const AppRouter = () => (
  <HashRouter>
    <div className="container-fluid">
      <div className="container-fluid second">
        <Navigation/>
        <div className="main">
          <Switch>
            {/* site down for maintainance */}
            {/* <Route component={MaintainanceMode}/> */}

            {/* level 1: */}
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/timeline" component={Timeline} exact={true} />

            {/* Sentiment Proposal */}
            <Route path="/sentimentProposal" component={PresentationTemplate} exact={true} />
            <Route path="/sentimentApp" component={SentimentApp} exact={true} />

            {/* level 2: Categories */}
            {/* level 3: individual projects and resources within a category*/}
            <Route path='/research/:id' component={ResearchTemplate} exact={true}/>
            <Route path='/projects/:id' component={ProjectSummaries} exact={true}/>
            <Route path='/papers/:id' component={PaperSummaries} exact={true}/>
            <Route path='/projects/:title/:id' component={ProjectTemplate} exact={true}/>
            <Route path='/papers/:title/:id' component={PaperTemplate} exact={true}/>

            {/* Sandbox Routes */}
            <Route path='/viz/HBar' component={HBar} exact={true}/>
            <Route path='/viz/TreeBar' component={TreeBar} exact={true}/>
            <Route path='/viz/Scatter' component={Scatter} exact={true}/>

            {/* <Route path='/viz/ReactD3E00' component={ReactD3E00} exact={true}/>
            <Route path='/viz/ReactD3E01' component={ReactD3E01} exact={true}/>
            <Route path='/viz/ReactD3E02' component={ReactD3E02} exact={true}/>
            <Route path='/viz/ReactD3E03' component={ReactD3E03} exact={true}/>
            <Route path='/viz/ReactD3E04' component={ReactD3E04} exact={true}/>
            <Route path='/viz/ReactD3E05' component={ReactD3E05} exact={true}/>
            <Route path='/viz/ReactD3E06' component={ReactD3E06} exact={true}/>
            <Route path='/viz/ReactD3E07' component={ReactD3E07} exact={true}/> */}

            {/* catch all: 404: */}
            <Route component={NotFoundPage} />
          </Switch>
          <Footer/>
        </div>
      </div>
    </div>
  </HashRouter>
)

export default AppRouter;