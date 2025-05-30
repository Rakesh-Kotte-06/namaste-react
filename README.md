# Running Notes

Episode 1 - Inception

What is a CDN Link?
What is crossorigin?
what is difference bw dev react and prod react?

React is a Library?

=> React.createElement will create an object not the html element
now =>
ReactDOM.createRoot(document.getElementById("root"));
is responsible to assign a root inside react

=> then we do root.render() this will helps to put the object into our page as a html element

=> createElement api takes 3 arguments

1. name of the tag (ex: h1, div, span, p, etc.,)
2. attributes (ex: id, class, etc.,)
3. children =>
   a. Normal react element
   b. Multiple children -> pass this a list (array)

=> When we do a root.render --> Whatever we are passing from root.render() it will get replaced whatever there existing inside root element.

React only works inside my div with id of root element
and other portion of html works the same so this is the reason we call react as library
like react can work only in the place of header, sidebar etc.,

It can work independently in a small portion of your app as well...
It is not a full fledged framework.

It is a just piece of JavaScript code that facebook developers developed

===============================================================================================================
Episode 2 - Igniting our App

create a new repository
public
setup ssh key
and then

vs code
git init (to initialize git)
git branch -M main (this will create main branch as 'main' or change default branch to main from master)

create README.md file

now push all the code git

git add .
git commit -m "episode-01"

git remote add origin git@github.com:namastedev/namaste-react.git
=> git remote add origin https://github.com/Rakesh-Kotte-06/namaste-react.git
(this step we need to do for once to set up our local to the remote git repository)

git push origin main

https://github.com/namastedev/namaste-react
our repo => https://github.com/Rakesh-Kotte-06/namaste-react
Igniting Our App -- intro

npm -- node package manager❌ npm does not have a full form ✅
it works as node package manager not stands for node package manager

It is one of the biggest package manager

npm init
package name: namaste-react
version: 1.0.0
description: This is Namaste React by Akshay Saini
entry point: App.js
test command: jest
git repository: https://github.com/namastedev/namaste-react.git
keywords: react, namaste react, akshay saini
author: Akshay Saini
license: ISC
is it ok? y

now we will get a new file called package.json

configuration for our npm in json

why do we need package.json?

our project is dependent on lot of the packages

npm will take care of those packages version and all using package.json

the most important package in our is bundler
our whole code is need to bundled, minified, cleaned, cached, compresed before it can be send to production
It bundles our app, It packages our app so that it can shipped to production

web pack, parcel, wheat these are bundlers

when we create a create-react-app it uses web pack, babel

we will be using the parcel in this session
parcel is easy to configure

npm install -D parcel

there are 2 types of dependencies

1. dev depen -- it is used development phase
2. Normal dependency -- used in production as well

now parcel ^2.8.3
^ caret -- it will help you manage the new minor upgrades like to 2.9
~ It will upgrade major changes like versions like 3.0

so keep ^ caret instead of ~ tilde major updates have lot of changes that may break into your app

=> package-lock.json ?
package-lock.json keeps the record of every package

integrity - sha512 is a hash

sometimes our code works on local but not on production
to avoid that package-lock.json keeps a hash to verify whatever version we have in our dev or local is the same version which is deployed to the prod

=> node_modules ?
package-lock.json is a configuration and node_modules consists actual data
node_modules is generally very heavy😁

=> Transitive dependencies?
as our project has parcel as a dependency and parcel will have its own dependencies and those dependecies will have their own dependencies like that🙄
that is why our node modules is huge

parcel uses babel as well
=> How many files of package.json files we have in our project?
what only one which is package.json in the project file sibling of src folder ❌
every dependency have their own package.json ✅

should I push node_modules into the git hub ? No ❌
put it inside the git ignore ✅

should I push my package.json and package-lock.json into git? Yes ✅

If you have package.json and package-lock.json in the git we can recreate all the node_modules that's why we need not to deploy node modules into the git

npx parcel index.html

server running at https://localhost:1234

npx executing a package

cdn is not a preferred way to bring react in your project
it is costly operation
when we fetch from cdn it will make a network call to unpkg.com and we will get react from unpkg.com
when we install node_modules everything will be in our application we don't need to make fetch from unpkg.com

npm install react

import React from "react";
import ReactDOM from "react-dom";

we have written these imports in the app.js which are getting error because
@parecl-transformer-js: it says browser scripts cannot have imorts or exports

It considering this app.js as a normal js file
that is why we need to tell it is not a normal js file we need to explain it that app.js is now a module

we need to add an type="module" attribute in app.js

<!-- <script type="module" src="app.js"></script> -->

warning: you are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client"

in previous version it got imported from react-dom but in new version it got changed anyways it works fine but you will get warning like that

Parcel will reresh we you save your code

#parcel

- Dev build -- It creates a dev env
- Local server -- It creates local server
- HMR = Hot module replacement -- reads all the files and updates in the browser
- file watching algorithm -- written in C++ (here parcel keep in track whatever we change in our code)
- Caching - faster builds (parcel-cache)
- Image optimization -- parcel will do image optimization as well
- Minification
- Bundling
- Compressing
- Consistent Hashing ?
- Code splitting
- Differential Bundling - support older browsers
- Diagnostics - It will give beautiful errors
- Error Handling
- HTTPs
- Tree shaking algorithm - parcel will remove unused code
- Different dev and prod bundles

=> If you want to build prod
npx parcel build index.html
then we have to remove the App.js from the package.json "main": "App.js"

when you do this =>
It will bundle, minified inside the dist folder
It will give the production ready code files and also changes the names as well to optimize the memory

=> How to crete a dev build?
npx parcel index.html

you don't need to put the dist and .parcel-cache into the git
we have to ignore => put dist and .parcel-cache in gitignore

Local -- pushed to git

git -- deployed on to server
server will fetch from git
server -- host the app now to the end user
server will fetch package.json and all and it will do install the node_modules and server will have it's own dist folder

end user

parceljs.org

and parcel is so faster because it is also doing cashing

Now we will make our app compatible for old browsers as well
browserlist.dev
in the package.json we need to add
"browserlist": [
"last 2 chrome version",
"last 2 Firefox version",
or set for all browsers
"last 2 version",
]
===============================================================================================================
Episode 3 - Laying the foundation

To create the dev build we are writing the command npx parcel index.html this will host it up in localhost 1234
npx executing the npm package parcel and the source file index.html

To make easier we will write a script in package.json file
in the package.json we can see script
to start our project in dev server we have to write
"start": "parcel index.html" inside the script

now you need to give the command npm run start or npm start

to build the production sever
"build": "parcel build index.html"
here you need to give the command as
npm run build
you cannot give the npm build because start is a reserved keyword by npm so whether you write npm run start or npm start it will consider it as npm run start

Now Let's start coding

const heading = React.createElement("tag", {attributes(object as attribute)}, "children")
const heading = React.createElement("h1", {id: 'heading'}, "Namaste React"); this will create an object and when we render this object inside the root then it will create element
because react is in JS in js everything object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

so now here to create a one singel we had to write this much of code instead of this we can use jsx to make it easier
like

"const jsxHeading = <h1> Namaste React Using JSX </h1>"
JSX - is a HTML like or XML like syntax not HTML in JS
somewhere html is related to js
so jsx is a convention where html is merged with js

It looks like HTML but is actually syntactic sugar for React.createElement() calls.
JSX makes UI code easier to read and write by visually resembling the structure of HTML.
Browsers don’t understand JSX, so it must be transpiled (usually by Babel) into standard JavaScript.

Introduced by Facebook
In 2013, alongside React (which was open-sourced in May 2013)
Designed to improve developer experience when building UIs with React

const element = <h1>Hello, world!</h1>;
// Transpiled to:
const element = React.createElement("h1", null, "Hello, world!");

JSX is not pure js and js engine won't understand it
because it follows ECMAscript ES (pure js)
If you write jsx code in pure js file it will through you an error
Parcel will work behind the scenes to work jsx in js engine
like parcel will transpile jsx code into the code that js engine understands
transpiled(converted) before it reaches the JS Engine and is done by PARCEL(Babel)
Babel is a package of Parcel
Babel is transpiling the code of jsx syntax into the code that js engine, react will understand

In jsx if you want to give class name for your element
you have to write className instead class

If you want give attribute in your jsx elements use camel case
single line

<h1>Heading</h1>
vs 
Multiple lines
(
   <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
   </div>
)

React Component
Everything in react is a component

What is a component?

Class Based -- old way of writing code
class based uses js classes to create class based components

Functional component -- New
Functional based uses js functions to create functional components
It is just a normal js function

to create it name it with capital letter otherwise it will give an error because it is a react way to understand that it is a component

A function that returns the react element(jsx code) that is functional component.

const Fn1 = () => true;
const Fn2 = () => {return true};
both are same

if you want to render the functional component you need to wrap it inside a tag like
<F1></F1> or <F1/>
root.render(<F1/>);

component composition ?
a component is inside anther component is called as component composition
like here:
const Heading = () => <h2>Rakesh Kotte</h2>
const Title = () => (

   <div>
      <h1>Namaste React</h1>
      <Heading />
   </div>
);
You can also normal function

const Title = function () {
return (

   <h2 id="author" className="author">
      By Akshay Saini
   </h2>
   );
};
but use arrow functions because it's an industry wise standards as most of the developers use them

{} => inside this you any js
const number = 10000;

you can add it in the Title component and you can put a react element inside the component with this
const Title = function () {
return (

   <h2 id="author" className="author">
      By Akshay Saini
   </h2>
   {number}
   );
};

and you can call Title as a function => {Title()}

suppose some malicious data is coming from an api which is sent by an attacker
const data = api.getData();

const Title = function () {
return (

   <h2 id="author" className="author">
      By Akshay Saini
   </h2>
   {data}
   );
};

but here jsx will santise your data
