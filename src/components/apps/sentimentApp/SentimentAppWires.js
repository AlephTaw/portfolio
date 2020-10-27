import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectHeader from '../../layouts/content_templates/partails/headers/ProjectHeader';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import gitHubLogo from '../../../public/img/GitHub-Mark.png'
import { stratify } from 'd3';

const SentimentApp = () => {
  const header = {"title": "Tomorrowland: Is Fear the Path to the Darkside?", "subtitle": "Towards an Unopinionated Tool for Raising Awareness for Real-Time Fact Checking and the Nature of Misinformation", "description": ""}
  
  const [data, setData] = useState({status: ""});
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/todos/1',
        // 'http://127.0.0.1:5000/health',
      );
 
      setData({status: result.data.title});
    };
 
    fetchData();
  }, []);

  console.log(data.status.replace(/\s/g, '+'))
  
  return(
    <>
    <div className="col-xs-12" style={{height: "100px"}}></div>
    <ProjectHeader header={header}/>
    <div className="col-xs-12" style={{height: "50px"}}></div>
    <div className="text-center mx-auto" style={{"maxWidth": "800px"}}>
    <div className="d-flex justify-content-center">
        <div className="">
          <img src={'https://via.placeholder.com/468x30?text=Search+Bar'}/>
        </div>
    </div>
    <div className="d-flex justify-content-center">
        <div className="m-2">
          <img src={'https://via.placeholder.com/468x300?text=Tree+Bar+Graph'} alt=""/>
        </div>
    </div>
    <div className="col-xs-12" style={{height: "30px"}}></div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="m-3">
          <img src={'https://via.placeholder.com/400x200?text=Scatter+Plot'} alt=""/>
        </div>
        <div className='m-2'>
          <div className='d-flex flex-column m-2'>
            <img src={'https://via.placeholder.com/200x200?text=Bar+Graph'} alt=""/>
          </div>
          <div className='m-2'>
          <img src={'https://via.placeholder.com/200x60?text=Sentiment+Labels'} alt=""/>
          </div>
        </div>
      </div>
      <div className="col-xs-12" style={{height: "30px"}}></div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="m-2">
          <img src={'https://via.placeholder.com/200x60?text=Encyclopedia+Reference'} alt=""/>
        </div>
        <div  className="m-2">
          <img src={'https://via.placeholder.com/200x60?text=Social+Media+Summary'} alt=""/>
        </div>
      </div>       
      <div className="col-xs-12" style={{height: "100px"}}></div>
      <p>Want to take a look behind the scenes?</p>
      <p>View the source code here:</p>
      <img src={gitHubLogo} alt="github logo" style={{"maxWidth": "40px"}}/>
    </div>
    </>
  )
};

export default SentimentApp;