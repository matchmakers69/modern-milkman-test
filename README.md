# Project description

1. Pleaae be aware that some functionalities I added were not required by the task. I added a bit more functionalities on purpose to to present the idea of building Apps.

### Extra features:

1. Created eslint and prettier for code checking, just in case to avoid CORS issue, added proxy to package.json.

2. I thought it would be nice to create some bacis routing system to display a category page with category products. I used Helmet as well to add some google fonts and show how we can use Suspense and React lazy. Of course the main purpose of helmet is to help with SEO.

3. Extra features like banner, created a functionality in Redux which helps us to decide from global state what parts of UI we may need to display. For example at some point we may not need footer or header, so we can control it by calling updateUI function.

### Styles:

Application is styled with styled-components, could be done also with sass or pure css, matter of preferences. The concept I like is to keep styles separetly for each component.
I also used very simple templating with theme.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
