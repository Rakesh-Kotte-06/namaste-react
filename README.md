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
