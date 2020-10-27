import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3';
import '../../../public/scss/components/viz/d3.scss'

// example using react to manipulate the dom instead of d3

const ReactD3E00 = () => {
  const data = [25, 30, 45, 60, 20];
    return(
    <>
      <svg>
        {data.map(value => (
          <circle r={value}></circle>
        ))}
      </svg>
      <br />
    </>
  )
};

export default ReactD3E00;