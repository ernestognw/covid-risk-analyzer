import React, { lazy, Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

const Questionnaire = lazy(() =>
  import(/* webpackChunkName: "Questionnaire" */ './questionnaire')
);
const Score = lazy(() => import(/* webpackChunkName: "Score" */ './score'));

const Development = () => {
  return (
    <Suspense fallback={<TopBarProgress />}>
      <Switch>
        <Route exact path="/" component={Score} />
        <Route path="/questionnaire" component={Questionnaire} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Development;
