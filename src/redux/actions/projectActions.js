export const createProject = (project) => {
  console.log('createProject() running')
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firestore = getFirestore()
    // const profile = getState().firebase.profile
    // const authorId = getState().firebase.auth.uid

    firestore.collection('projects').add({
      ...project,
      // firstName: profile.firstName,
      // lastName: profile.lastName,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
  }
}

export const getProject = (id) =>{
  console.log('getProject() running')
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('projects').doc(id).get().then((project) => {
      const projectData = project.data()
      dispatch({type: 'GET_PROJECT', projectData})
    }).catch((err) => {
      console.log('getProject() error: ', err)
    })
  }
}