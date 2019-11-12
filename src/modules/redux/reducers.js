// @flow
import { combineReducers } from 'redux-immutable';
import type { Reducer } from './types';
import { reducer as usersReducer } from '../users';

function createReducer (): Reducer {
	return combineReducers({
		usersReducer,
	});
};

export default createReducer;
