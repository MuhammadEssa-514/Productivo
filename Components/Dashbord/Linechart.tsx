
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic
import ApexCharts from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function Linechart() {
  useEffect(() => {
    const options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [0, 10, 20, 30, 40, 50, 60]
      }],
      xaxis: {
        categories: [2019, 2020, 2021, 2022, 2023, 2024, 2025]
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

export default Linechart;
