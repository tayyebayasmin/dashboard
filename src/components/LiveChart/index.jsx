import { Line } from "@nivo/line";
import { Component, useState, useEffect } from "react";
import range from "lodash/range";
import last from "lodash/last";
import { generateDrinkStats } from "@nivo/generators";
import * as time from "d3-time";
import { timeFormat } from "d3-time-format";
const data = generateDrinkStats(18);
const commonProperties = {
  width: 200,
  height: 300,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  data,
  animate: true,
};
export class RealTimeChart extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    this.state = {
      dataA: range(100).map((i) => ({
        x: time.timeMinute.offset(date, i * 30),
        y: 10 + Math.round(Math.random() * 20),
      })),
      dataB: range(100).map((i) => ({
        x: time.timeMinute.offset(date, i * 30),
        y: 30 + Math.round(Math.random() * 20),
      })),
      dataC: range(100).map((i) => ({
        x: time.timeMinute.offset(date, i * 30),
        y: 60 + Math.round(Math.random() * 20),
      })),
    };

    this.formatTime = timeFormat("%Y %b %d");
  }

  componentDidMount() {
    this.timer = setInterval(this.next, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  next = () => {
    const dataA = this.state.dataA.slice(1);
    dataA.push({
      x: time.timeMinute.offset(last(dataA).x, 30),
      y: 10 + Math.round(Math.random() * 20),
    });
    const dataB = this.state.dataB.slice(1);
    dataB.push({
      x: time.timeMinute.offset(last(dataB).x, 30),
      y: 30 + Math.round(Math.random() * 20),
    });

    this.setState({ dataA, dataB });
  };

  render() {
    const { dataA, dataB } = this.state;

    return (
      <Line
        {...commonProperties}
        margin={{ top: 30, right: 50, bottom: 60, left: 50 }}
        data={[
          { id: "A", data: dataA },
          { id: "B", data: dataB },
        ]}
        xScale={{ type: "time", format: "native" }}
        yScale={{ type: "linear", max: 100 }}
        axisBottom={{
          format: "",
          legendPosition: "middle",
          legendOffset: 46,
        }}
        colors={{ scheme: "set1" }}
        axisLeft={{
          format: (value) => `${value/2}k`,
        }}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        curve="monotoneX"
        animate={false}
        motionStiffness={120}
        motionDamping={50}
        isInteractive={false}
        enableSlices={false}
        useMesh={true}
        theme={{
          // added
          axis: {
            domain: {
              line: {
                stroke: "white",
              },
            },
            legend: {
              text: {
                fill: "white",
              },
            },
            ticks: {
              line: {
                stroke: "white",
                strokeWidth: 1,
              },
              text: {
                fill: "white",
              },
            },
          },
          legends: {
            text: {
              fill: "white",
            },
          },
        }}
      />
    );
  }
}
