import React, { useRef, useEffect, useState } from 'react';
import { select, line, curveCardinal } from 'd3';
import '../../../public/scss/components/viz/d3.scss'

const Scatter = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 68, 65, 75]);
  const svgRef = useRef();
  console.log(svgRef)
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index*50)
      .y((value) => 150 - value)
      .curve(curveCardinal)
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);
    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join(
    //     enter => 
    //       enter
    //         .append("circle"), // For a single enter.append circle callback, can replace with .join("circle")
    //     update => 
    //       update
    //         .attr("class", "updated"), // For Testing
    //     exit => exit.remove() // This is actually a d3 default, so do not need.
    //   )
    //   .attr("r", value => value)
    //   .attr("cx", value => value*2)
    //   .attr("cy", value => value*2)
    //   .attr("stroke", "red"); // attributes after join() automatically set for both enter and update callbacks
    // }, [data])
  return(
    <>
      {/* <svg ref={svgRef}>
        <path d="M0,150 100, 100 150, 120" stroke="blue" fill="none" />
      </svg>       */}
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map(value => value +5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Update data
      </button>
      <div className="col-xs-12" style={{height: "100px"}}></div>

    </>
  )
};

export default Scatter;