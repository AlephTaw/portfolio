import React, { useState, useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import ProjectHeader from '../../layouts/content_templates/partails/headers/ProjectHeader';
import Scatter from '../../viz/Scatter';
import HBar from '../../viz/HBar';
import TreeBar from '../../viz/TreeBar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import gitHubLogo from '../../../public/img/GitHub-Mark.png'
import wikipedia from '../../../public/img/wikipedia_PNG30.png'
import { stratify } from 'd3';

const SentimentApp = () => {
  const options = [
    { value: 'president', label: 'president' },
    { value: 'social distancing', label: 'social distancing' },
    { value: 'Kanye West', label: 'Kanye West' }
  ]  
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
    <div className="text-center mx-auto" style={{"maxWidth": "900px"}}>
    <span>
        <div className="mb-2 mx-auto"  style={{"maxWidth": "500px"}}>
          {/* <img src={'https://via.placeholder.com/468x30?text=Search+Bar'}/> */}
          <Select 
          options={options}
          isMulti
           />
          
        </div>
    </span>
    <div className="d-flex justify-content-center">
        <div className="m-2">
          {/* <img src={'https://via.placeholder.com/500x300?text=Tree+Bar+Graph'} alt=""/> */}
          <TreeBar/>
        </div>
    </div>
    <div className="col-xs-12" style={{height: "30px"}}></div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="mt-4 ml-4 mr-4">
          {/* <img src={'https://via.placeholder.com/400x200?text=Scatter+Plot'} alt=""/> */}
          <Scatter/>
        </div>
        <div className='mt-3 ml-4 mr-4'>
          <div className='m-2'>
            {/* <img src={'https://via.placeholder.com/200x200?text=Bar+Graph'} alt=""/> */}
            <HBar/>
          </div>
          <div className='m-2 mt-4'>
            <div className="row m-0 p-0">
              <div className="col m-0 p-0">
              <Badge className="m-0 p-0" pill variant="danger" style={{"width": 60, "fontSize": 9}}>
                Anger
              </Badge>
              <Badge pill variant="danger" style={{"width": 60, "fontSize": 9}}>
                Disgust
              </Badge>
              </div>
              <div className="col m-0 p-0">
              <Badge pill variant="warning" style={{"width": 60, "fontSize": 9}}>
                Annoyed
              </Badge>
              </div>
              <div className="col m-0 p-0">
              <Badge pill variant="secondary" style={{"width": 60, "fontSize": 9}}>
                Neutral
              </Badge>
              </div>
              <div className="col m-0 p-0">
              <Badge pill variant="info" style={{"width": 60, "fontSize": 9}}>
                Pleased
              </Badge>
              <Badge pill variant="success" style={{"width": 60, "fontSize": 9}}>
                Impressed
              </Badge>
              </div>
              <div className="col m-0 p-0">
              <Badge pill variant="success" style={{"width": 60, "fontSize": 9}}>
                Joy
              </Badge>
              </div>
            </div>
          {/* <img src={'https://via.placeholder.com/300x60?text=Sentiment+Labels'} alt=""/> */}
          </div>
        </div>
      </div>
      <div className="col-xs-12" style={{height: "30px"}}></div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="m-2 mr-4 ml-4">
          <div className="row">
            {/* <img src={wikipedia} alt="wikipedia" style={{"maxWidth": "200px", "maxHeight": "60px"}}/> */}
            <div className="col text-center">
              Wikipedia
            </div>
          </div>
          <img src={'https://via.placeholder.com/200x60?text=Wikipedia+resources'} alt=""/>
          {/* <div className="row">
            Topic Resources 1
          </div>
          <div className="row">
            Topic Resource 2
          </div>
          <div className="row">
            Topic Reseurce 3
          </div> */}
          {/* <img src={'https://via.placeholder.com/200x60?text=Encyclopedia+Reference'} alt=""/> */}
        </div>
        <div  className="m-2 mr-4 ml-4" style={{"maxWidth": "200px", "maxHeight": "60px"}}>
          Tweet Subtopic Summary
          <img src={'https://via.placeholder.com/200x60?text=Social+Media+Topic+Summary'} alt=""/>
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