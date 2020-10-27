import React, { useRef, useEffect, useState } from 'react';
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';
import '../../public/scss/components/viz/d3.scss'

const HBar = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();
  console.log(svgRef)

  useEffect(() => {
    const svg = select(svgRef.current);



    const xScale = scaleBand()
    .domain(data.map((value, index) => index))
    .range([0, 300])
    .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0])

    const colorScale = scaleLinear()
    .domain([75, 100, 150])
    .range(["green", "orange", "red"])
    .clamp(true)

    const xAxis = axisBottom(xScale)
    .ticks(data.length)
    const yAxis = axisRight(yScale)

    svg
    .select(".y-axis")
    .style("transform", "translateX(300px)")
    .call(yAxis);

    svg
    .select(".x-axis")
    .style("transform", "translateY(150px)")
    .call(xAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1,-1)") // doesn't work with the 150 - yScale(value) for height
      .attr("x", (value, index) => xScale(index))
      // .attr("y", yScale)
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => 150 - yScale(value));
      // .attr("height", (value, index) => value); // alternative method?

  }, [data]);

  return(
    <>
      {/* <svg ref={svgRef}>
        <path d="M0,150 100, 100 150, 120" stroke="blue" fill="none" />
      </svg>       */}
      {/* <div className="col-xs-12" style={{height: "100px"}}></div> */}
      <svg id="example" ref={svgRef}>
      <g className="x-axis" />
      <g className="y-axis" />
      </svg>
      {/* <br />
      <div className="col-xs-12" style={{height: "100px"}}></div>
      <button onClick={() => setData(data.map(value => value +5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button> */}
    </>
  )
};

export default HBar;