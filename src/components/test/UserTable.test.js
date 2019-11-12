import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { Table } from 'react-bootstrap';
import UserTable from '../UserTable';
import createHistory from 'history/createBrowserHistory';

const users = fromJS([{
	id: 2026429,
	login: 'rahulthewall',
	avatar_url: 'https://avatars1.githubusercontent.com/u/2026429?v=3',
	login: 'rahulthewall',
	html_url: 'https://github.com/rahulthewall',
}]);

describe('<UserTable />', () => {
	// Prepare the components
	const history = createHistory();
	const wrapper = shallow(<UserTable users={users} />);
	const tableComponent = wrapper.find(Table);

	it('renders the table', () => {
		expect(tableComponent.length).toEqual(1);
	});
});
