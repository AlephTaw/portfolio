import projectReducer from './projectReducer'
import localProjectReducer from './localProjectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
  localProject: localProjectReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
})

export default rootReducer