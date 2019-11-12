// @flow
import { createStore, compose, applyMiddleware } from 'redux';
import { fromJS, Map } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';
import createReducer from './reducers';
import epic from './epic';

function configureStore(initialState: Map<any, any> = fromJS({})) {
	const epicMiddleware = createEpicMiddleware(epic);
	const enhancers = compose(
		applyMiddleware(epicMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
	);
	const store = createStore(
		createReducer(),
		initialState,
		enhancers,
	);
	return store;
};

export default configureStore;
