# Types of Developer Testing

- Unit Testing
- Integration Testing

# Others

- End to End (e2e) Testing -- requires salenium, etc

=========================================================================================

# setting up Testing in our app

Generally we have React Testing library which comes with create-react-app
and this React Testing Library depends on Jest

- Install react library:
  npm i -D @testing-library/react@14.0.0

- Install jest:
  npm i -D jest@29.6.2

- Install babel for jest dependencies:
  npm install --save-dev babel-jest @babel/core @babel/preset-env

- configure babel:
  babel.config.JS (in root level in src folder)
  module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };

- Configure Parcel Config file to disable default babel transpilation
  --- To make this work we need to make changes in .parcelrc file
  go to => parcel docs => search jest from there select => javascript and then

  # Usage with other tools:

  we have to create a .parcelrc file and
  {
  "extends": "@parcel/config-default",
  "transformers": {
  "\*.{js,mjs,jsx,cjs,ts,tsx}": [
  "@parcel/transformer-js",
  "@parcel/transformer-react-refresh-wrap"
  ]
  }
  }

=========================================================================================

# to run the test cases

npm run test
npx jest --init

# would you like to use Typescript for the configuration file >> No

# Chose the test environment that will be used for testing >> choose jsdom(broswer-like)

# Do you want jest to add coverage reports? >> Yes

# Which provider should be used to instrument code for coverage? >> babel

# Automatically clear mock calls, instances, contexts and results before every test? >> yes

📝 Configuration file created at D:\React-by-ak\namaste-react\jest.config.js

=========================================================================================

# Jest 28

If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.

# npm install --save-dev jest-environment-jsdom

### --save-dev is same as -D

=========================================================================================

# \_\_ => dunder (two underscores)
