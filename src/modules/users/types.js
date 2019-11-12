import * as constants from './constants';

export type FetchUsersStartedAction = {
	type: constants.FETCH_USERS_STARTED,
};

export type FetchUsersSucceededAction = {
	type: constants.FETCH_USERS_SUCCEEDED,
	payload: Object,
};

export type FetchUsersFailedAction = {
	type: constants.FETCH_USERS_FAILED,
	payload: Object,
};

export type FetchUserStartedAction = {
	type: constants.FETCH_USER_STARTED,
};

export type FetchUserSucceededAction = {
	type: constants.FETCH_USER_STARTED,
	payload: Object,
};

export type FetchUserFailedActon = {
	type: constants.FETCH_USER_FAILED,
	payload: Object,
};
