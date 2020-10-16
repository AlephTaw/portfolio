import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore'

import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase/app'

// import { useSelector  } from 'react-redux'
// import { isLoaded  } from 'react-redux-firebase'

import * as serviceWorker from './serviceWorker';
import './public/scss/App.scss'


const store = configureStore()

const config = {
  userProfile: 'users', // where profiles are stored in database,
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  firebaseConfig: firebaseConfig,
  config,
  dispatch: store.dispatch,
  attachAuthIsReady: true,

  createFirestoreInstance, // <- needed if using firestore
  userProfile: 'users', // where profiles are stored in database
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions',
}

  // //Prevent DOM from rendering before Firebase data is available. - Flashing login issue.
  // const AuthIsLoaded = ({ children }) => {
  //   const auth = useSelector(state => state.firebase.auth)
  //   if (!isLoaded(auth)) return   <div></div>
  //       return children
  // }

const jsx = (
  <React.StrictMode>
    <div className='d-flex flex-column'>
    <Provider store={store}>
        <div className='loader' id='loader'/>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {/* <AuthIsLoaded> */}
            <AppRouter/>
        {/* </AuthIsLoaded> */}
      </ReactReduxFirebaseProvider>
    </Provider>
    </div>
    </React.StrictMode>
  )

  //Strict Mode created legacy backend context error/warning for react dev tools

ReactDOM.render(jsx, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();