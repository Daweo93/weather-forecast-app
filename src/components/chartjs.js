import React from 'react';
import { Line } from 'react-chartjs-2';

export default props => {
  const data = {
    labels: props.data.dates,
    datasets: [
      {
        fillColor: 'rgba(220,220,220,0)',
        strokeColor: 'rgba(220,180,0,1)',
        pointColor: 'rgba(220,180,0,1)',
        data: props.data.values
      }
    ]
  };
  const options = {
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        display: false,
      }]
    }
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
