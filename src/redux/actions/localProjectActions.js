export const setLocalProject = async (project) =>
{
    return(dispatch) => {
        dispatch({
          type: 'SET_LOCAL_PROJECT', 
          project, 
      })
    }
}