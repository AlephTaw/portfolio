// "Things to Build"
// Define a map that takes in a react component name (string) and returns a react component: "makeComponent"

// "Procedural description of BuildPost component"
// 0. Get firebases document as json, via props.
// 1. Read the json defining the post of interest
// 2. Count the number of keys in the 'body' object
// 3. Define an empty JS array for the json
// 4. For each object in the body of db entry, read off the index, the react component type, and the props to be rendered.
// // a. Add jsxArray[index] = makeComponent(props, componentType)
// 5. Render the resulting array.

/// "Workflow"
// 1. mock up a post in react using premade components for text, collab notebooks (gists), github links, references, timelines, gifs   
// 2. check it for aesthetics and responsive design
// 3. Copy the data from the testing template in #1 to the json to firebase function and run firebase2json.js (with appropriate permissions to upload, then switch permissions back. )

// const post = {
//   id: "k6aeCAbjNBppObr05Ev3",
//   template: "generic_post",
//   title: "Weed Detection",
//   subtitle: "Image Recognition | CNN | Keras | Kaggle",
//   createdAt: Date.now(),
//   thumbnail: "seedling.jpeg",
//   subject: "dataset",
//   body: {
//     //This is a block
//     0: {
//       type: "textBlock",
//       body: "Here is a bunch of stuff that you have to say."
//     },
//     1: {
//       type: "notebook",
//       body: "Here is notebook with some analysis."
//     },
//     2: {
//       type: "image",
//       body: "Here is a Gif / live demo."
//     },
//     3: {
//       type: "textBlock",
//       body: "Conclusions and links to github."
//     },
//     4: {
//       type: "references",
//       body: "Here are the sources that I used."
//     },
//     4: {
//       type: "timeline",
//       body: "This my progress."
//     },
//   }
// }

import React from 'react';

const BuildPost = (props) => {
  const {post} = props;
  const numKeys = (body) => {
    return Object.keys(body).length;
  }

  const makeDataArray = (post.body) => {
    const numComponents = numKeys(post.body);
    const componentArr = new Array(numComponents);
    //componentArr.fill(0)
    for(int i=0; i<numComponents; i++){
      dataArr[i] = post[i];
    }
    
    return dataArr;
  }

  const selectComponent = (block) => {
    switch(block.type){
      case 'notebook':
        return <Notebook block={block}/>
      case 'textBlock':
        return <TextBlock block={block}/>
        case 'references':
          return <References block={block}/>
        case 'image':
          return <Image block={block}/>
        case 'timeline':
          return <Timeline block={block}/>
        default:
          return null
    }
  }

  const postArr = makeDataArray(post.body)
        return(
          <>
            {postArr && postArr.map((block, index) => {
              <div key={index}>
                {selectComponent(block)}
              </div>
            })}
          </>
        )
};

export default BuildPost;