// @flow
import React from 'react';
import { Table, Image } from 'react-bootstrap';
import { List } from 'immutable';
import { Link } from 'react-router-dom';

type Props = {
	users: List<*>,
};

function UserTable(props: Props) {
	const tableHeader = (
		<thead>
			<tr>
				<th>#</th>
				<th>Avatar</th>
				<th>Login</th>
				<th>Details</th>
			</tr>
		</thead>
	);
	let tableData = props.users.map((user, i) => {
		return (
			<tr key={i}>
				<td>{user.get('id')}</td>
				<td className="avatarImage"><Image src={user.get('avatar_url')} rounded /></td>
				<td>{user.get('login')}</td>
				<td>
					<Link to={{
						pathname: `/users/${user.get('login')}`,
					}}>
						Details
					</Link>
				</td>
			</tr>
		);
	});
	return (
		<Table hover>
			{tableHeader}
			<tbody>
				{tableData}
			</tbody>
		</Table>
	);
}

export default UserTable;
