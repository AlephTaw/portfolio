import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HorizNav from '../components/navigation/HorizNav';
import Footer from '../components/footer/Footer';
import HomePage from '../components/layouts/HomePage';
import NotFoundPage from '../components/layouts/NotFoundPage';

const AppRouter = () => (
  <HashRouter>
    <div className="container-fluid">
      <div className="container-fluid second">
        {/* <HorizNav/> */}
        <div className="main">
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer/>
        </div>
      </div>
    </div>
  </HashRouter>
)

export default AppRouter;