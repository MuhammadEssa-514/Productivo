"use client"

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'; 
import ApexCharts from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function BarChart() {
  useEffect(() => {
    const options = {
      chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false 
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      series: [{
        name: 'Age Group',
        data: [5520, 2376, 1488, 426, 709]
      }],
      xaxis: {
        categories: ['19-30', '31-45', '15-18', '46-65', '65+'],
      },
      dataLabels: {
        enabled: false // Disable data labels
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div id="chart" style={{ maxWidth: '500px', margin: '30px' }}></div>
  );
}

export default BarChart;
