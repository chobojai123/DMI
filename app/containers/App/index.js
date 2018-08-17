/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import BgImage from '../../images/blue.jpg';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
    url(${BgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Message Collector"
        defaultTitle="Message Collector"
      >
        <meta name="description" content="A message collector app" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/messages" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
