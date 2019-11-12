// @flow
import { fromJS, List } from 'immutable';
import type { State } from '../redux/types';
import * as constants from './constants';
import * as types from './types';

const initialState = fromJS({
	users: {
		isFetching: false,
		data: [],
		hasError: false,
		error: undefined,
	},
	user: {
		isFetching: false,
		data: [],
		hasError: false,
		error: undefined,
	}
});

function usersStarted(state: State) {
	return state
		.setIn(['users', 'isFetching'], true)
		.setIn(['users', 'hasError'], false);
};

function usersSucceeded(state: State, action: types.FetchUsersSucceededAction) {
	const users = state.getIn(['users', 'data']) || List([]);
	const newUsers = users.toSet().union(action.payload.toSet()).toList();
	const newUsersSorted = newUsers.sort(
		(a, b) => a.get('id') - b.get('id')
	);
	return state
		.setIn(['users', 'isFetching'], false)
		.setIn(['users', 'data'], newUsersSorted)
		.setIn(['users', 'hasError'], false);
};

function usersFailed(state: State, action: types.FetchUsersFailedAction) {
	const { payload, error } = action;
	return state
		.setIn(['users', 'isFetching'], false)
		.setIn(['users', 'hasError'], error)
		.setIn(['users', 'error'], payload);
};

function userStarted(state: State) {
	return state
		.setIn(['user', 'isFetching'], true)
		.setIn(['user', 'hasError'], false);
};

function userSucceeded(state: State, action: types.FetchUserSucceededAction) {
	return state
		.setIn(['user', 'isFetching'], false)
		.setIn(['user', 'data'], action.payload)
		.setIn(['user', 'hasError'], false);
};

function userFailed(state: State, action: types.FetchUsersSucceededAction) {
	const { payload, error } = action;
	return state
		.setIn(['user', 'isFetching'], false)
		.setIn(['user', 'hasError'], error)
		.setIn(['user', 'error'], payload);
};

function reducer(state: State = initialState, action: any): State {
	switch (action.type) {
		case constants.FETCH_USERS_STARTED:
			return usersStarted(state);
		case constants.FETCH_USERS_SUCCEEDED:
			return usersSucceeded(state, (action: types.FetchUsersSucceededAction));
		case constants.FETCH_USERS_FAILED:
			return usersFailed(state, (action: types.FetchUsersFailedAction));
		case constants.FETCH_USER_STARTED:
			return userStarted(state);
		case constants.FETCH_USER_SUCCEEDED:
			return userSucceeded(state, (action: types.FetchUserSucceededAction));
		case constants.FETCH_USER_FAILED:
			return userFailed(state, (action: types.FetchUserFailedAction));
		default:
			return state;
	}
};

export default reducer;
export {
	initialState,
};
