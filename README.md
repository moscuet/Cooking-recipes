# REACt-App: My-Recipies
This is a recipies app developed with React.js and php

## [Live-App](https://vigilant-swirles-3f103b.netlify.app/)
### Notes
1. php server was build to serve cooking recipes as json file to frontend app. 
2. server is being hosted in Business College Helsinkis's hosting platform BC drive.
3. to avoid CORS policy, Heroku proxy server was used to make http request.

### Own developed recipies API: [Server](https://public.bc.fi/s2100146/php/server_recipe/?path=recipes&)

### requirements for the app: 
1. Make App, Header, Main, Footer, Nav, Home, Recipes, About components-Using React Router set up simple navigation with three pages –home, recipes, about-Start styling your appPrototype to project.....

### [Strating Design Idea in pigma](https://www.figma.com/proto/qrSkTc3vtJDBj8jy8QyWHH/CookBook?node-id=1%3A2&viewport=228%2C397%2C0.35646429657936096&scaling=min-zoom&page-id=0%3A1) 

### [Json place holder](https://jsonplaceholder.typicode.com/)
### [Recipe Json Data Generator](https://webcode.tools/generators/json-ld/recipe)

### created recipes data server: [Server]('https://public.bc.fi/s2100146/php/server_recipe/?path=recipes&')
https://sheltered-thicket-21153.herokuapp.com/https://public.bc.fi/s2100146/php/server_recipe/?path=recipes

### [Avoid CORS Article](https://medium.com/swlh/avoiding-cors-errors-on-localhost-in-2020-5a656ed8cefa)


### unique id generator- uuidv4: 
install: $ npm install uuidv4
import: const { uuid } = require('uuidv4');

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
