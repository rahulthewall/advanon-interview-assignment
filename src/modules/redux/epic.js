// @flow
import { combineEpics } from 'redux-observable';
import { getUserEpic, getUsersEpic } from '../users';

const epic = combineEpics(
	getUserEpic,
	getUsersEpic,
);

export default epic;
