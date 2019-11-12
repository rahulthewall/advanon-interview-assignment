import { fromJS } from 'immutable';
import reducer, { initialState } from '../reducer';
import {
	fetchUser,
	fetchUserSucceeded,
	fetchUserFailed
} from '../actions';

describe('Users Reducer', () => {
	test('Can handle initial state', () => {
		const state = reducer(undefined, '');
		expect(state).toBe(initialState);
	});

	test('Can handle successful fetch of a single user', () => {
		let state = reducer(undefined, '');
		const user = fromJS({
			id: 2026429,
			login: 'rahulthewall',
		});
		state = reducer(undefined, fetchUserSucceeded(user));
		expect (state.getIn(['user', 'isFetching'])).toBe(false);
		expect (state.getIn(['user', 'hasError'])).toBe(false);
		expect (state.getIn(['user', 'error'])).toBe(undefined);
		expect (state.getIn(['user', 'data'])).toBe(user);
	})

	test('Can handle failed fetch of a single user', () => {
		const error = fromJS({
			text: 'resource-not-found',
		});
		let state = reducer(undefined, '');
		state = reducer(undefined, fetchUserFailed(error));
		expect (state.getIn(['user', 'isFetching'])).toBe(false);
		expect (state.getIn(['user', 'hasError'])).toBe(true);
		expect (state.getIn(['user', 'error'])).toBe(error);
	})
});
