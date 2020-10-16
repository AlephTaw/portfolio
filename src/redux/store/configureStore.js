// Add store enhancer to inform the thunk middleware of the details of your paricular firebase/firestore project. .withExtraArgument returns a store enhancer
// Combine several store enhancers with redux 'compose'

import rootReducer from '../reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import firebaseConfig from '../../config/firebaseConfig'

export default () => {
    const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    //   applyMiddleware([thunk.withExtraArgument(getFirebase)])
        reduxFirestore(firebaseConfig),

        // reactReduxFirebase(firebaseConfig),
        ),
    )
    return store
}
