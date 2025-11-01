Redux Toolkit

|-------------------------------------|
| Logo                         | 🛒 1 |
|-------------------------------------|
|            Megana Biryani           |
|        -----------------------      |
|        | Item 1         | Add |     |
|        -----------------------      |
|        -----------------------      |
|        | Item 2         | Add |     |
|        -----------------------      |
|        -----------------------      |
|        | Item 3         | Add |     |
|        -----------------------      |
|                                     |
---------------------------------------

Redux Store 
JS object stores data in a central place
---------------------------
|    ------------------   |
|    |  Cart Slice    |   |
|    ------------------   |
|    ------------------   |
|    |  User Slice    |   |
|    ------------------   |
|    ------------------   |
|    |  Slice 1       |   |
|    ------------------   |
---------------------------

===========================================================
How to write data

Clicking Add button ⤵️
    => dispatches an action ⤵️
    => action calls a function(Reducer function) ⤵️
    => Modifies slice of cart

 ------------------      ----     -------     ------------
 | Item 1    | Add | ⏩ | A | ⏩ | Fun | ⏩ |  Slice 1  |
 ------------------      ----     -------     ------------

===========================================================
How to Read data

Selector - Subscribing to the store
-----------     -----------     --------
| Slice 1 | ⏩ | Selector | ⏩ | 🛒 3 |                                                    
-----------     -----------     --------                                           

===========================================================

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux

npm i @reduxjs/toolkit
npm i react-redux
- Build Our Store
- Connect Our Store to Our App
- Slice (cart Slice)
- Dispatch(action)
- Selector


- vanilla redux way(older way => DON'T MUTATE THE STATE) Return a new state was mandatory
- const newState = [...state]
- newState.items.push(action.payload)
- return newState

- RTK way (modern way => CAN MUTATE THE STATE)
- It uses immer library internally to convert mutable code to immutable code
- Immer will take care of the immutability
- Immer will create a new copy of the state behind the scenes
- example: if we do state.items.push(action.payload), immer will create a new array with the new item added to it
- and it will return the new state
- so we can write mutable code but immer will take care of the immutability
- immer is a tiny library that allows us to work with immutable state in a more convenient way
- immer is included in redux toolkit by default


clearCart: (state, action) => {
      state.items.length = 0; // state = []

      // state = ["Rakesh"]; // This won't work
      // because we are not returning the new state
      // we are just changing the reference of state variable
},

clearCart: (state, action) => {
      // state.items.length = 0; // state = []
      // return { items: [] }; // This will work
      // This new object will replace the existing state
      // Hence, the cart will be cleared
      // But we should avoid doing this in other reducers

      console.log("State after clearCart:", current(state));
      state = []; // This won't work
      // current() is used to log the current state without proxy
      // It helps to debug the state in Redux Toolkit
      // because the state is proxied by Immer library
      // and logging it directly will show a proxy object
      // instead of the actual state
      // Hence, we use current() to get the actual state
      // and log it for debugging purposes
      // But remember, we should not use current() in the actual reducer logic
      // because it creates a copy of the state and breaks the immutability

      console.log(state);
      // because we are not re-assigning state, we are mutating it
      // Immer library used by Redux Toolkit allows us to write "mutating" logic
      // but it doesn't allow us to re-assign the state variable itself
      // So, state = [] won't work here
      // We need to mutate the existing state object
      // Hence, we use state.items.length = 0
      // to clear the array
      // This is one of the few cases where we need to be careful with Redux Toolkit
      // and not re-assign the state variable itself
      // because Immer won't be able to track that change
      // and it won't be reflected in the final state
      // So, always mutate the existing state object
      //  and avoid re-assigning the state variable itself
      // except for the initial state
      // initialState can be a new object
      // but subsequent states should be mutations of the existing state object
      // This is a key concept to understand when working with Redux Toolkit
      // and Immer
    },


 
// redux devtools extension
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
// helps to see the state of redux store in the browser
// and also see the actions performed on the store
// install it and go to inspect element -> redux tab to see the state of the store and actions performed on the store


// Check RTK Query
