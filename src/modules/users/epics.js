// @flow
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { ActionsObservable } from 'redux-observable';
import * as constants from './constants';
import { getUsers, getUser } from './requests';
import {
	fetchUsersSucceeded,
	fetchUsersFailed,
	fetchUserSucceeded,
	fetchUserFailed,
} from './actions';

function getUsersEpic(action$: ActionsObservable<*>): ActionsObservable<*> {
	return action$
		.ofType(constants.FETCH_USERS_STARTED)
		.mergeMap(action =>
			Observable.fromPromise(getUsers(action.payload.index))
				.map(fetchUsersSucceeded)
				.catch(error => Observable.of(fetchUsersFailed(error))));
}

function getUserEpic(action$: ActionsObservable<*>): ActionsObservable<*> {
	return action$
		.ofType(constants.FETCH_USER_STARTED)
		.mergeMap(action =>
			Observable.fromPromise(getUser(action.payload.login))
				.map(fetchUserSucceeded)
				.catch(error => Observable.of(fetchUserFailed(error))));
}

export {
	getUsersEpic,
	getUserEpic,
};
