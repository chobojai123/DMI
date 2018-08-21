import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectMessage = () =>
  createSelector(selectHome, homeState => homeState.get('message'));

export { selectHome, makeSelectMessage };
