"use client"
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
function CircleChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    const options = {
      series: [44, 55, 41, 17],
      chart: {
        type: 'donut',
      },
      labels:["mango", "pear","ginger","passion"],
      dataLabels: {
        enabled: false // Disable the inside text
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);
  return <div ref={chartRef}></div>;
}
export default CircleChart;