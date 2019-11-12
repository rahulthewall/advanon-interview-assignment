// @flow
import 'whatwg-fetch';

const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
};

const apiEndpoint = 'https://api.github.com/';

function handleConnectionError(error: any): void {
	throw new Error(error);
}

async function handleErrorResponse(response) {
	throw new Error(response.status);
}

async function handleResponse(response: any): Object {
	switch (response.status) {
		case 200:
			return await response.json();
		case 204:
			return null;
		default:
			return handleErrorResponse(response);
	}
}

function exec(path: string, method: string) {
	const url = apiEndpoint + path;
	return fetch(url, {
		headers,
		method: 'GET',
	})
		.catch(handleConnectionError)
		.then(handleResponse);
}

export default exec;
