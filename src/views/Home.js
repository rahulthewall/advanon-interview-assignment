// @flow
import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { Grid, Row, PageHeader, Jumbotron, Button, Col } from 'react-bootstrap';
import Spinner from 'react-spinkit';
import { fetchUsers, getFetchedUsers, getFetchStatus } from '../modules/users';
import UserTable from '../components/UserTable';

type Props = {
	getAllUsers: Function,
	users: List<*>,
	isFetching: boolean,
};

class Home extends React.Component {

	componentDidMount() {
		if (this.props.users.size === 0) {
			this.props.getAllUsers();
		}
	}

	props: Props;

	loadMore() {
		const lastIndex = this.props.users.last().get('id');
		this.props.getAllUsers(lastIndex + 1);
	}

	render() {
		return (
			<Grid>
				<Row>
					<PageHeader>
						React Github Example
					</PageHeader>
					<Jumbotron>
						<p>
							Single Page application (SPA) which displays a list of Github users by using  Github public API  with an option to display detailed user data on a separate page.
						</p>
					</Jumbotron>
				</Row>
				<Row>
					<h2>List of Users</h2>
					{this.props.isFetching ? (
						<Spinner spinnerName='double-bounce' noFadeIn />
					) : (
						<Col>
							<UserTable users={this.props.users} />
							<Button onClick={() => this.loadMore()}>
								Load More
							</Button>
						</Col>
					)}
				</Row>
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: getFetchedUsers(state),
		isFetching: getFetchStatus(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getAllUsers: (index) => dispatch(fetchUsers(index)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
