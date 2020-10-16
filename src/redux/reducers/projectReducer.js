const initState = {
  // projects: [
  //   {id: '1', title: 'Title 1', content: 'blah blah blah 1'},
  //   {id: '2', title: 'Title 2', content: 'blah blah blah 2'},
  //   {id: '3', title: 'Title 3', content: 'blah blah blah 3'},
  // ]
  project: {
    
  }
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_PROJECT':
      console.log('get project', action.project)
      return state  
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('created project', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer