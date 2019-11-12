// @flow
import type {
	FetchUsersStartedAction,
	FetchUsersSucceededAction,
	FetchUsersFailedAction,
	FetchUserStartedAction,
	FetchUserSucceededAction,
	FetchUserFailedAction,
} from './types';
import * as constants from './constants';

function fetchUsers(index?: number): FetchUsersStartedAction {
	return {
		type: constants.FETCH_USERS_STARTED,
		payload: {
			index,
		}
	};
};

function fetchUsersSucceeded(users: any): FetchUsersSucceededAction {
	return {
		type: constants.FETCH_USERS_SUCCEEDED,
		payload: users,
	};
};

function fetchUsersFailed(error: any): FetchUsersFailedAction {
	return {
		type: constants.FETCH_USERS_FAILED,
		payload: error,
		error: true,
	};
};

function fetchUser(login: string): FetchUserStartedAction {
	return {
		type: constants.FETCH_USER_STARTED,
		payload: {
			login,
		}
	};
};

function fetchUserSucceeded(user: any): FetchUserSucceededAction {
	return {
		type: constants.FETCH_USER_SUCCEEDED,
		payload: user,
	};
};

function fetchUserFailed(error: any): FetchUserFailedAction {
	return {
		type: constants.FETCH_USER_FAILED,
		payload: error,
		error: true,
	};
};

export {
	fetchUsers,
	fetchUsersSucceeded,
	fetchUsersFailed,
	fetchUser,
	fetchUserSucceeded,
	fetchUserFailed,
};
