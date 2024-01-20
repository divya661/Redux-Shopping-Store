This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template and Firebase Realtime Database.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

# Redux-Shopping-Store

## Login Page
- Enter any id & password and click on Login button
- It will redirect to Homepage
  
![Login Page Image](https://github.com/divya661/Redux-Shopping-Store/blob/main/screenshots/Login%20Page.png?raw=true)

## HomePage
- Inside Cart button you might observe that the count is not 0 sometimes, it is due to this application don't have authentication flow
- Cart items count reflect the count already present in the realtime database of firebase
- If you will click on Cart button, then below product listing Cart Items will display
![Home Page Image containing product list](https://github.com/divya661/Redux-Shopping-Store/blob/main/screenshots/Products%20List.png?raw=true)

## Cart Items 
- When we click on cart button in header it opens the cart products list 
- Hides when cart button in header clicked again

![Containg products current present in cart](https://github.com/divya661/Redux-Shopping-Store/blob/main/screenshots/Add%20Product.png?raw=true)

## Realtime Database Firebase
![Database used for fetching & updating cart items in DB](https://github.com/divya661/Redux-Shopping-Store/blob/main/screenshots/Realtime%20DB%20Firebase.png?raw=true)
