// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './modules/redux';
import Home from './views/Home';
import UserDetails from './views/UserDetails';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

function App() {
	const store = configureStore();
  return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Home} />
					<Route exact path="/users/:id" component={UserDetails} />
				</div>
			</BrowserRouter>
		</Provider>
  );
}

export default App;
