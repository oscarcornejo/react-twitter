import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
	apiKey: 'AIzaSyDKOfLqgsW6a6ezyaNlhuxj-VsB7xymjx0',
    authDomain: 'react-twitter-c4a2c.firebaseapp.com',
    databaseURL: 'https://react-twitter-c4a2c.firebaseio.com',
    projectId: 'react-twitter-c4a2c',
    storageBucket: 'react-twitter-c4a2c.appspot.com',
    messagingSenderId: '352506372901'
});

import App from './components/App'

render(
  <App />, 
  document.getElementById('root')
)