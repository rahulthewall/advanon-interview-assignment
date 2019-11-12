// @flow
import { createSelector } from 'reselect';

function getState(state) {
	return state.get('usersReducer');
}

const getFetchedUsers = createSelector(
	getState,
	state => state.getIn(['users', 'data']),
);

const getFetchStatus = createSelector(
	getState,
	state => state.getIn(['users', 'isFetching']),
);

const getFetchedUser = createSelector(
	getState,
	state => state.getIn(['user', 'data']),
);

const getFetchUserStatus = createSelector(
	getState,
	state => state.getIn(['user', 'isFetching']),
);


export {
	getFetchedUsers,
	getFetchStatus,
	getFetchedUser,
	getFetchUserStatus,
};
