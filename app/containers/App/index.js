import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'normalize.css';

import Header from 'components/Header';
import ShowMessages from 'containers/ShowMessages/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import BackgroundImage from '../../images/blue.jpg';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 16px;
  font-size: 20px;
  font-weight: 300;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/showMessages" component={ShowMessages} />
      </Switch>
    </AppWrapper>
  );
}
