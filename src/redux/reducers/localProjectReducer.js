const initState = {
  projectInstance: {
      id: "1",
      topic: "weed_seedlings",
      category: 'projects',
      thumbnail: "seedling.jpeg",
      title: "Recognizing Weed Seedlings",
      subtitle: "CNN • Kaggle • Pipeline/API • PyTorch/Sci-Kit Learn",
      body: "While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited.",
      sourceRef: "https://github.com/AlephTaw",
    
      abstract: "Abstract: This is the initial state",
      introduction: "The following is a selection of projects categorized as (general) projects, pipelines, or sandboxes. Each entry utilizes the semantic tagging scheme below.",
      gist: "",
      conclusion: "The following is a selection of projects categorized as (general) projects, pipelines, or sandboxes. Each entry utilizes the semantic tagging scheme below.",
      citations:[
        "Source 1: This is a really long citation describing source #1 it is here to demo the formatting of a source that could possibly consume multiple lines on different screen sizes. This should be long enough, right?",
        "Source 2: This is not that long."
    ],
    
    }
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_LOCAL_PROJECT':
      console.log('set project', action)
      return action.project
    case 'SET_LOCAL_PROJECT_ERROR':
      console.log('set local project error', action.project)
      return state
    default:
      return state
  }
}

export default projectReducer