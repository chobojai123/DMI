import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectMessages = () =>
  createSelector(selectGlobal, globalState => globalState.get('messages'));

const testing = () =>
  createSelector(selectGlobal, globalState => globalState.get('message'));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectMessages,
  testing,
  makeSelectLocation,
};
