import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

require("highcharts/modules/heatmap")(Highcharts);
require("highcharts/modules/tilemap")(Highcharts);

export default function HeatMap(props) {

  const distribution = {
    // KMT: { id: 0, count: 20, index: 2, name: "KMT" },
    // DPP: { id: 1, count: 30, index: 1, name: "DPP" },
    // PFP: { id: 2, count: 35, index: 0, name: "PFP" },
  };

  const sortedDistribution = Object.values(distribution).map(partyInfo => partyInfo).sort((a, b) => a > b);

  const series = [];

  for(let i = 5; i > 0; i--) {
    for(let j = 23; j > 0; j--) {
      series.push({
        name: null,
        x: i,
        y: j,
        value: 9
      });
    }
  }

  const transformedDistribution = Object.values(sortedDistribution).reduce(
    (acc, curr) => {
      series.push(acc);
      return {
        name: curr.name,
        x: acc.x + curr.count,
        y: acc.y + curr.count,
        value: curr.id
      };
    },
    {
      name: null,
      x: 0,
      y: 0,
      value: 0
    }
  );

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "tilemap",
      height: "25%",
      inverted: true
    },
    title: {
      text: ""
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      visible: false
    },
    legend: {
      enabled: false
    },
    colorAxis: {
      dataClasses: [
        {
          to: 1,
          color: "#7986CB",
          name: "KMT"
        },
        {
          from: 1,
          to: 2,
          color: "#81C784",
          name: "DPP"
        },
        {
          from: 2,
          to: 3,
          color: "#FFB74D",
          name: "PFP"
        },
        {
          from: 3,
          to: 4,
          color: "#4DB6AC",
          name: "TPP"
        },
        {
          from: 4,
          to: 5,
          color: "#FFF176",
          name: "NPP"
        },
        {
          from: 5,
          to: 6,
          color: "#A1887F",
          name: "TSP"
        },
        {
          from: 6,
          to: 7,
          color: "#4DD0E1",
          name: "NP"
        },
        {
          from: 7,
          to: 8,
          color: "#DCE775",
          name: "GP"
        },
        {
          from: 8,
          to: 9,
          color: "#90A4AE",
          name: "OTHERS"
        },
        {
          from: 9,
          to: 10,
          color: "#F2EDE9",
          name: "default"
        }
      ]
    },
    credits: { enabled: false },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        tileShape: "square",
        dataLabels: {
          enabled: false
        }
      }
    },
    // 23 23 23 22 22
    series: [
      {
        // data: [
        //   {
        //     name: "KMT",
        //     x: 1,
        //     y: 5,
        //     value: 1
        //   },
        //   {
        //     name: "KMT",
        //     x: 2,
        //     y: 5,
        //     value: 1
        //   },
        //   {
        //     name: "KMT",
        //     x: 3,
        //     y: 5,
        //     value: 1
        //   },
        //   {
        //     name: "KMT",
        //     x: 4,
        //     y: 5,
        //     value: 1
        //   },
        //   {
        //     name: "KMT",
        //     x: 5,
        //     y: 5,
        //     value: 2
        //   },
        //   {
        //     name: "KMT",
        //     x: 1,
        //     y: 4,
        //     value: 2
        //   },
        // ]
        data: series
      }
    ]
  });

  return <HighchartsReact options={chartOptions} highcharts={Highcharts} />;
}
