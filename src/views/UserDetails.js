// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader, Image } from 'react-bootstrap';
import { Map, List } from 'immutable';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';
import { fetchUser, getFetchedUser, getFetchUserStatus, getFetchedUsers } from '../modules/users';

type State = {
	user: Map<*,*>,
};

type Props = {
	getUser: Function,
	match: Object,
	user: Map<*,*>,
	users: List<*>,
	isFetching: boolean,
};

class UserDetails extends React.Component {

	constructor(props) {
		super(props);
		const users = this.props.users;
		const user = users.filter(user => user.get('login') === this.props.match.params.id).first();
		this.state = {
			user,
		};
	}

	componentDidMount() {
		if (!this.state.user) {
			this.props.getUser(this.props.match.params.id);
		}
	}

	state: State;
	props: Props;

	render() {
		const user = this.state.user || this.props.user;
		return (
			<Grid>
				<Row>
					<PageHeader>
						{user.get('login')}
					</PageHeader>
				</Row>
				<Row>
					<Link to='/'>Home</Link>
				</Row>
				<div className="top-buffer" />
				{this.props.isFetching ? (
					<Spinner spinnerName='double-bounce' noFadeIn />
				) : (
					<Row>
						<Col xs={12} md={8}>
							<Image src={user.get('avatar_url')} rounded />
						</Col>
						<Col xs={12} md={4}>
							<div>
								<p>ID: {user.get('id')}</p>
								<p>Login: {user.get('login')}</p>
								<p><a href={user.get('html_url')}>Github Profile</a></p>
							</div>
						</Col>
					</Row>
				)}
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: getFetchedUser(state),
		users: getFetchedUsers(state),
		isFetching: getFetchUserStatus(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getUser: (login) => dispatch(fetchUser(login)),
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
