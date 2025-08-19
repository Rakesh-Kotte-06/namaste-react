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

but here jsx will escapesa and santise your data

=================================================================================================
Episode 04 - Talk is Cheap, show me the code!

Food Ordering App

How can you build and what is the thought process?
Header
Food - Restaurants
Dishes

Plan your things
like what you are building and how it should look like

Name your app - Namaste Food
\*\* Heading

- Logo
- Nav Items
  \*\* Body
- Search
- Restaurant Container
- Restaurant Card
  \*\* Footer
- Copyright
- Links
- Address
- Contact

Why multiple curly braces for style attribute?

const styleSearch = {
backgroundColor: "red",
}

<div style={{ fontWeight: 900, ...styleSearch}}></div>

The first {} tells JSX that you're inserting a JavaScript expression.
Inside that, you're passing a JavaScript object, so you need another pair of {}.

Adding dynamic data
let first restaurant card Meghana Foods
and second restaurant card KFC

Props - Properties => arguments to a function(functional component which is a js function )

It is something which you can pass to the component

like
<RestaurantCard restName="Meghana Foods" cuisine="Biryani, North Indian, Asian" />
<RestaurantCard restName="KFC" cuisine="Burger, Fast Food" />

in RestaurantCard component we can import these arguments(props)
const RestaurantCard = (props) => {
console.log(props);
const {restName = "Meghana Foods",cuisine = "Biryani, North Indian, Asian",} = props;
return (

<div className="res-card">
<h3>{restName} or {props.restName --> importing them directly from props at this place instead of destructuring them }</h3>
<h4>{cuisine}</h4>
</div>
);
};
or we can destructure them directly
const RestaurantCard = ({restName, cuisine}) => {
const {
restName = "Meghana Foods",
cuisine = "Biryani, North Indian, Asian",
} = props;
return (
<div className="res-card">
<h3>{restName}</h3>
<h4>{cuisine}</h4>
</div>
);
};

But usually we get data from the backend or api's in json format
let's debug swiggy data
go to swiggy
inspect it
then go to network tab
click on the fetch api
select preview
check the data

now let's open the data in a new tab and to show the data in such way to be understandable lets install json viewer chrome extension or you can check the pretty-print

important: Config driven ui
Our website is driven by data config
Controlling your ui using (data / api)config that config comes backend
your ui is basically driven by data
can be diff for diff locations

whenever you do a map you have to add key
if you don't write key it give through a big performance issue it will rerender everything all things so we have to add key and some people use index as the key

but react says using index as key is a bad practice which is written in a article from Robin Pokorny - "Index as a key is an anti-pattern"

It is okay to use but it's not recommended

=================================================================================
Episode 5 - Let's get Hooked!

https://legacy.reactjs.org/docs/faq-structure.html
api/
APIUtils.js
APIUtils.test.js
ProfileAPI.js
UserAPI.js
components/
Avatar.js
Avatar.css
Feed.js
Feed.css
FeedStory.js
FeedStory.test.js
Profile.js
ProfileHeader.js
ProfileHeader.css

Here you can write your file extension as js or jsx no issues
anyways it is javascript code

Here after putting Header component we need if we want to import it into the app.js file first we need to export it from the Header.js file at the end of the file

export default Header;

then we need to import it
import Header from "./components/Header";

Here there is no need to give .js or .jsx extension React will consider it as js file by itself.

Never use a hardcoded code in your component

put it in a common folder you can name it as common, config or utils
utils means utilities that can be used all accross the app
and name the file as constant.js here c is not a capital letter because this is not a component

There are two ways to export something like component, file, variable etc.,

export default is used at the last in a file where we can only export one thing like one component, variable, image

where as to do multiple exports we need to use "Named export"
example:
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
export const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"

if you use default export you just need to import it in regular way, like
import Header from "../components";

If you use named export then you need to write curly braces to import it, like
import {CDN_URL} from "./utils/constants";

// create react element using Core React
/\* \*\* Heading

- Logo
- Nav Items
  \*\* Body
- Search
- Restaurant Container
- Restaurant Card
  \*\* Footer
- Copyright
- Links
- Address
- Contact
  \*/

can we do default export with named export in react
If yes what is the use of it and where we mostly use it

export const Button = () => {
return (

<div>
<h1>Hi Kotte</h1>
</div>
);
};

export default Button;

⚠️ Why might this be useful?
To give flexibility in how your component is consumed.
To maintain compatibility with tools, team preferences, or older codebases.
When building libraries, it's a common pattern.

Normal variable
let listOfRestaurants = [];

State Variable - super powerful variable

#React Hooks:
are normal js utility functions which is given to us by react
(written by fb devlopers - inside the react)

-useState():
-- Whenever a state variable updates React will re-renders this component.

-useEffect()

How to use?
we have to import them

const [listOfRestaurants] = useState([]); -- state variable
let listOfRestaurants=[]; --Normal variable

const [listOfRestaurants] = useState([null]);
let listOfRestaurants=null; --Normal variable

Reconciliation Algorithm (React Fibre):

this is the reason behind the reacts superfast
this is the react core algorithm

suppose when you initially created a restaurant container with 6 res cards
then react will creates a virtual dom of it
Actual DOM:

<div>
   <h1> Rakesh Kotte</h1>
   <div>
      <img alt="Rakesh Kotte" src="rakesh.svg" />
   </div>
</div>
Virtual DOM: is a representation of actual DOM
{
  type: 'div',
  props: {
    children: [
      {
        type: 'h1',
        props: {
          children: 'Rakesh Kotte'
        }
      },
      {
        type: 'div',
        props: {
          children: {
            type: 'img',
            props: {
              alt: 'Rakesh Kotte',
              src: 'rakesh.svg'
            }
          }
        }
      }
    ]
  }
}

and when you click the button to filter the cards
react will follows the diff algorithm
which is like git diff where we see the changes in the file (prev and updated)
same way this diff algorithm will check the previous object and the filtered object after it finds the difference it will update the it to the actual DOM (html)

React uses React fibre to update the ui by finding the difference between the old virtual dom and new virtual dom

this is the reason that react is most popular in ui market

This is introduced in React16
https://github.com/acdlite/react-fiber-architecture

const [listOfRestaurants, setListOfRestaurants] = useState(resList);

as soon as you call the setListOfRestaurants react will finds out the diff and update the ui

and we can write it in another way as well

const arr = useState(resList);
const [listOfRestaurants, setListOfRestaurants] = arr
const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1]

===================================================
Episode 6 - Exploring the world
Monolith Architecture:
traditional way of developing applications where have single environment for all the backend, frontend, db and all

🧱 Monolithic Architecture
-- Single codebase and deployment.
-- All features (UI, logic, DB) are tightly coupled.
-- Easy to build, test, and deploy initially.
-- Hard to scale individual parts.
-- One bug can affect the whole app.

🧩 Microservices Architecture
-- App is split into small, independent services.
-- Each service has its own logic and database.
-- Easier to scale and update independently.
-- Allows different tech stacks per service.
-- Needs complex setup (APIs, monitoring, etc.).

Microservices Architecture:
--This is known as separtion of concerns
--It follows single responsibility principle where each and every service has it's own job.

How will a reat application will backend api call and fetch the data?
there are two ways

1. Loads => make api call(wait 500ms) => get data => render ui
2. Loads => render UI => make an api call => render application with data once again (better UX in react we will follows mostly this)

what is a hook in react:
a normal js function it has it's own specific function

useEffect Hook:
-- come from react lib and imported as named import

useEffect comes with with two arguments

1. Callback function (arrow function) and
2. Dependency array

It will called after your component renders

fetch is given by a browser

UseEffect will be called after your component renders so call the fetch data function from here
useEffect(() => {
fetchData();
},[]);

use async await for fetching the data which is the standard practice

const fetchData = async () => {
now fetch that api from the browser
const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3830&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

Now convert the data to the json format
const data = await response.json();

now store the required data in a variable to assign it to the list
let restau = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
use this useState function to update the list
setListOfRestaurants(restau || []);
};

this will be shown when there is no data
if (listOfRestaurants.length === 0) {
return (

<div className="loading">
<h1>Loading</h1>
</div>
);
}
yet, this is not a good practice....

the Good practice is adding Shimmer UI

Shimmer UI: There os a concept called shimmer ui
A shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up.

while your data is loading show shimmer ui to make it userfriendly.

Conditional rendering: Rendering on the basis of the conditions is knwon as conditional rendering.

=> Why do we use useState why can't we use local variables inside react?

for suppose
let btnName = "Login";

<button onClick={() => {btnname = "Logout"; console.log(btnName)}}>{btnName}</button>
Here if you click on the btnName will be updated logout but UI won't change...

🤔Why? What's happening?
You're updating the btnName variable directly, but react doesn't know that it changed.

React components re-render when state or props change - not when a regular variable changes.

when you use useState like click the btn here it will re-render the entire Header Component.

How can a const variable changed while using the useState?
When you use `useState`, you declare your state variable with `const`, like this:

```js
const [count, setCount] = useState(0);
```

It might seem confusing-how can `count` change if it's a `const`?
The answer is:

- `const` means you can't reassign the variable name `count` itself.
- But on every render, React **creates a new variable** named `count` with the latest state value.
- So, each render gets its own fresh `count` variable, always up-to-date.

When you call `setCount(newValue)`, React schedules a re-render. On the next render, `count` will have the new value.

**In summary:**
The variable name stays the same, but React gives it a new value on each render. That's why using `const` with `useState` works!..

const [searchText, setSearchText] = useState("");

<div className="search">
<input type="text" className = "search__box" value = {searchText} />
<button className="search__btn" onClick={() => {
  console.log(searchText, "Search button clicked!...");
  
}>Search</button>
</div>
Here your search input box won't work because value is bind to the searchText you need to add onChange function

onChange = {(e) => {setSearchText(e.target.value)}}

now when you press any key inside this input each time the react will rerender the whole body component.
Whenever a state variable updates react will triggers a reconciliation cycle (re-render the component).
It will findout the difference between older and new varsions of virtual DOM and update that difference.

Why react is faster?
**React fiber** will find out the diff from the Virtual-DOM and update the DOM this also makes react so fast.
const response = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5412112&lng=78.43384809999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
use this https://corsproxy.io infront of api to avoid using the cors extension because everyone who will clone your code may not use this cors extension.

**Router Provider:**
Will provide, routing configuration to our app

React will give you a router error hook called useRouteError
import {useRouteError} from "react-router-dom"
It gives you more info about error instead instead of writing random error
It will give you specific routing error.

**Children Routes:**
For all the screens we will be keeping our header component and only our body is going to change for that we have to use this children routes.

- The About and Contact components will be rendered based on the route
- Error component will handle any errors that occur in the app
- The RouterProvider will provide the routing functionality to the app
- The createBrowserRouter function creates a router instance for the app
- The appRouter variable holds the router instance

- If path is = /
<Body />

- The About component will be rendered when the path is /about
  <About />

- The Contact component will be rendered when the path is /contact
  <Contact />

import Outlet from the react-router-dom

- The Outlet component will render the child routes defined in the appRouter

You can navigate to new page without reloading the whole page

- Link
  Link component imported from react-router-dom
  import { Link } from "react-router-dom";

  Works same as anchor tag <a />
  we just have to use the attribute called to instead of href
    <Link to="/about">
  when you anchor tag for navigating it will reload the whole page
  where as the link component will not reload the whole page it will just replace the component

# Routing in Web Apps

1. Client Side Routing: The routing is handled by JavaScript in the browser. When you navigate to a different route, the page does not reload; instead, the view is updated dynamically by rendering different components. This provides a smoother and faster user experience.
2. Server Side Routing: you have index.html, about.html etc,.. if i click on my anchor tag /about it will whole page and sends the network call to about.html and fetches the about.html and renders that onto the webpage
