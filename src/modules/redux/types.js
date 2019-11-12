// @flow
import { Map } from 'immutable';

export type Action = {
	type: string,
	payload?: any,
	error?: boolean,
};

export type State = Map<any, any>;

export type Reducer = (state: State, action: Action) => State;
