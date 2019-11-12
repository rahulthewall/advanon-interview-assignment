// @flow
import 'whatwg-fetch';
import { fromJS } from 'immutable';
import exec from '../api';


async function getUsers(lastID?: string) {
	const path = lastID ? `users?since=${lastID}` : 'users';
	const response = await exec(path, 'GET');
	return fromJS(response);
}

async function getUser(userId: string) {
	const path = `users/${userId}`;
	const response = await exec(path, 'GET');
	return fromJS(response);
}

export {
	getUsers,
	getUser,
};
