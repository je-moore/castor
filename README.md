A React web app that allows a first respondent to answer a series of questions and returns the final score.

## Structure

<pre>

Container
│
├╴Header  ┈┈┈┈(src/assets/castor-nest.svg)
│ └╴Score
│
└╴Form    ┈┈┈┈(src/data/formValues.js)
  └╴Fieldsets..
    └╴Inputs..


•Logic placed in src/components/containers/GlasgowComaScaleContainer.js
•Views placed in src/components/views/
•Form values placed src/data/formValues.js
•Logo placed src/assets/castor-nest.svg

</pre>

––––––––––––––––––––

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


