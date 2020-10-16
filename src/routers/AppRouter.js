import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import NotFoundPage from '../components/layouts/NotFoundPage';
import HomePage from '../components/layouts/HomePage';
import About from '../components/layouts/About';
import Timeline from '../components/layouts/Timeline';
import ProjectSummaries from '../components/categories/ProjectSummaries';
import PaperSummaries from '../components/categories/PaperSummaries';

import PaperTemplate from '../components/layouts/details/PaperTemplate';
import ProjectTemplate from '../components/layouts/details/ProjectTemplate';
import ResearchTemplate from '../components/layouts/details/ResearchTemplate';

const AppRouter = () => (
  <HashRouter>
    <div className="container-fluid">
      <div className="container-fluid second">
        <Navigation/>
        <div className="main">
          <Switch>
            {/* level 1: */}
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/timeline" component={Timeline} exact={true} />
            {/* level 2: Categories */}
            {/* level 3: individual projects and resources within a category*/}
            <Route path='/research/:id' component={ResearchTemplate} exact={true}/>
            <Route path='/projects/:id' component={ProjectSummaries} exact={true}/>
            <Route path='/papers/:id' component={PaperSummaries} exact={true}/>
            <Route path='/projects/:title/:id' component={ProjectTemplate} exact={true}/>
            <Route path='/papers/:title/:id' component={PaperTemplate} exact={true}/>
            {/* catch all and testing: */}
            {/* <Route path='/testtopic' component={ProjectTemplate}/> */}
            <Route component={NotFoundPage} />
          </Switch>
          <Footer/>
        </div>
      </div>
    </div>
  </HashRouter>
)

export default AppRouter;