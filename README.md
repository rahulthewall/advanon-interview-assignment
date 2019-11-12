# Github React Example

## Project Date
March 4th, 2017

## Objective
Single Page application (SPA) which displays a list of Github users by using [Github public API](https://developer.github.com/v3/users/#get-all-users)  with an option to display detailed user data on a separate page.

## Stack
* [React](https://facebook.github.io/react/) (bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app))
* [Redux](http://redux.js.org/)
* [RxJS](http://reactivex.io/rxjs/)
* [React Router](https://reacttraining.com/react-router/)
* [Fetch](https://github.com/github/fetch)
* [Bootstrap](http://getbootstrap.com/) & [React-Bootstrap](https://react-bootstrap.github.io/)
* [Jest](https://facebook.github.io/jest/)
* [Enzyme](https://github.com/airbnb/enzyme)

## Tasks
- [x] Project starts up correctly and compiles without errors.
- [x] A list of github users (avatar, login, details button) is displayed.
- [x] Bonus points if you can show the loading spinner before all users have been fetched.
- [x] Bonus points if you can make “Load more users” feature
- [x] When details button is clicked a new page with information about the user is shown.
Fields (id, avatar, login, html_url) with a back button to go back to the initial list of
users.
- [x] Single user page should display the user data after refreshing the page.
- [x] Provide a test for at least 1 react component and 1 reducer.

## How to run the project locally

### Requirements
```
node v8.2.1
npm v5.3.0
```

### Install the dependencies
```
npm i
```

### Run
```
npm run start
```
