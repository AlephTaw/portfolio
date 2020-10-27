import React, { useRef, useEffect, useState } from 'react';
import { select, axisBottom, axisRight, scaleLinear, scaleOrdinal, scaleBand, axisLeft, tsv, extent, rangeBand } from 'd3';
import * as d3 from 'd3';
import '../../public/scss/components/viz/d3.scss';

const TreeBar = () => {
  const [data, setData] = useState(
    [
      {"name": "A", "value": -15},
      {"name": "B", "value": -20},
      {"name": "C", "value": -22},
      {"name": "D", "value": -2},
      {"name": "E", "value": -18},
      {"name": "F", "value": 2},
      {"name": "G", "value": 6},
      {"name": "H", "value": 26},
      {"name": "H", "value": 18},
    ]
  );
  const svgRef = useRef();
  console.log(svgRef)

  useEffect(() => {
    const svg = select(svgRef.current);



    // const xScale = scaleBand()
    // .domain(data.map((value, index) => index))
    // .range([0, 300])
    // .padding(0.5);

    var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

    var xScale = scaleLinear()
    .range([0, width]);

    // var yScale= scaleOrdinal()
    // .rangeRoundBands([0, height], 0.1);

    // v4 d3
    var yScale= scaleBand()
    .rangeRound([0, height])
    .padding(0.1);

    // const yScale = scaleLinear()
    //   .domain([0, 150])
    //   .range([150, 0])

    // const colorScale = scaleLinear()
    // .domain([75, 100, 150])
    // .range(["green", "orange", "red"])
    // .clamp(true)

    const xAxis = axisBottom(xScale)
    // .ticks(data.length)
    const yAxis = axisLeft(yScale)
    .tickSize(0)
    .tickPadding(6)

    // svg
    // .select(".y-axis")
    // .style("transform", "translateX(300px)")
    // .call(yAxis);

    // svg
    // .select(".x-axis")
    // .style("transform", "translateY(150px)")
    // .call(xAxis);

    // svg
    //   .selectAll(".bar")
    //   .data(data)
    //   .join("rect")
    //   .attr("class", "bar")
    //   .style("transform", "scale(1,-1)") // doesn't work with the 150 - yScale(value) for height
    //   .attr("x", (value, index) => xScale(index))
    //   // .attr("y", yScale)
    //   .attr("y", -150)
    //   .attr("width", xScale.bandwidth())
    //   .transition()
    //   .attr("fill", colorScale)
    //   .attr("height", value => 150 - yScale(value));
    //   // .attr("height", (value, index) => value); // alternative method?




  //   var svg = d3.select("body").append("svg")
  //   .attr("width", width + margin.left + margin.right)
  //   .attr("height", height + margin.top + margin.bottom)
  // .append("g")
  //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // function theType(d) {
  //   d.value = +d.value;
  //   return d;
  // }

  // const colorScale = scaleLinear()
  // .domain([-30, 0, 30])
  // .range(["red", "gray", "blue"])
  // .clamp(true)

    console.log("allTheData: ", data)
      xScale.domain(extent(data, function(d) { return d.value; })).nice();
      yScale.domain(data.map(function(d) { return d.name; }));

    svg.selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", (d) => "bar bar--" + (d.value < 0 ? "negative" : "positive"))
      .attr("x", (d) => xScale(Math.min(0, d.value)))
      .attr("y", (d) => yScale(d.name))
      .attr("width", (d) => Math.abs(xScale(d.value) - xScale(0)))
      .attr("height", (d) => yScale.bandwidth())
      .attr("fill", "green");

    svg
      .select(".x-axis")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg
      .select(".y-axis")
      .attr("class", "y axis")
      .attr("transform", "translate(" + xScale(0) + ",0)")
      .call(yAxis);

  }, [data]);

  return(
    <>
      {/* <svg ref={svgRef}>
        <path d="M0,150 100, 100 150, 120" stroke="blue" fill="none" />
      </svg>       */}
      {/* <div className="col-xs-12" style={{height: "100px"}}></div> */}
      <svg id="example" ref={svgRef} style={{"width": 500, "height": 300}}>
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

export default TreeBar;