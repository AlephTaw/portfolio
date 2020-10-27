import React, { useRef, useEffect, useState } from 'react';
import { select, line, curveCardinal, axisBottom, axisRight, scaleLinear } from 'd3';
import '../../../public/scss/components/viz/d3.scss'

const Scatter = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 68, 65, 75]);
  const svgRef = useRef();
  console.log(svgRef)

  useEffect(() => {
    const svg = select(svgRef.current);



    const xScale = scaleLinear()
    .domain([0, data.length -1])
    .range([0, 300]) // Scale the 6 entries in the data array to start at 0 and end at 300 incrementing the values linearly in between
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0])
  
    const xAxis = axisBottom(xScale)
    .ticks(data.length)
    .tickFormat(index => index + 1)
    const yAxis = axisRight(yScale)

    svg
    .select(".y-axis")
    .style("transform", "translateX(300px)")
    .call(yAxis);

    svg
    .select(".x-axis")
    .style("transform", "translateY(150px)")
    .call(xAxis);

    // xAxis(svg.select(".x-axis"))

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal)
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
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
      <svg id="example" ref={svgRef}>
      <g className="x-axis" />
      <g className="y-axis" />
      </svg>
      <br />
      <div className="col-xs-12" style={{height: "100px"}}></div>
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