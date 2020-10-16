import React from 'react';

const MiniProjectSummary = ({miniTopic}) => {
  if(miniTopic){
    const avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/'+ miniTopic.thumbnail + '?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f'
          return(
            <div className="card text-center mb-4" style={{"maxWidth": 200, "minWidth": 200, "maxHeight": 300, "minHeight": 300}}>
              <img className="card-img-top" src={avatarUrl} alt="card"  style={{"maxWidth": 200, "minWidth": 200, "maxHeight": 120, "minHeight": 120}}></img>
              <div className="card-body">
                <h5 className="card-title">{miniTopic.title}</h5>
                <p className="card-text">{miniTopic.subtitle}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          )
  }else{
    return(
      <div className="text-center">
        <h2>
          [... Loading ...]
        </h2>
      </div>
    )
  }

};

export default MiniProjectSummary;

