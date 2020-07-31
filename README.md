# 🚀 Boilerplate Template App (React, Webpack, Typescript, Jest)

Boiler application using React.js, Webpack, Typescript, Jest, Babel, Eslint, modularized SCSS, Axios

## Features

- Boilerplate application with custom webpack config
- Axios http client setup
- Customizable layout for private, public pages
- Unit test with jest

## Prerequisites

- [Node](https://nodejs.org) v12.14 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [React](https://reactjs.org/) v16.13.1
- [Typescript](https://www.typescriptlang.org/) v3.7.5
- [Webpack](https://webpack.js.org/) v4.41.2
- [Jest](https://jestjs.io/) v26.1.0
- [Babel](https://babeljs.io/) v7.7
- [Eslint](https://eslint.org/) v7.4.0

It is customized web app by its own webpack configuration.

## Scripts

In the project directory, you can run:

### `npm install`

Installs required packages and modules for this project.

### `npm start`

Runs the app in the development mode with webpack dev server.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Runs the tests with jest.\
You can check coverage report with option `coverage` like `npm run test:coverage`.

### `npm build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Shows lint errors in development console, and you can fix the errors with `fix` option like `npm run lint:fix`.
