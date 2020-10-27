import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3';
import '../../../public/scss/components/viz/d3.scss'

const Scatter = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();
  console.log(svgRef)
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        enter => 
          enter
            .append("circle"), // For a single enter.append circle callback, can replace with .join("circle")
        update => 
          update
            .attr("class", "updated"), // For Testing
        exit => exit.remove() // This is actually a d3 default, so do not need.
      )
      .attr("r", value => value)
      .attr("cx", value => value*2)
      .attr("cy", value => value*2)
      .attr("stroke", "red"); // attributes after join() automatically set for both enter and update callbacks
  }, [data])
  return(
    <>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map(value => value +5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Update data
      </button>
    </>
  )
};

export default Scatter;