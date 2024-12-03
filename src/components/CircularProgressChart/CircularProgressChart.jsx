import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from "./CircularProgressChart.module.scss"

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
  id: 'centerTextPlugin',
  afterDraw: (chart) => {
    const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;

    const value = chart.data.datasets[0].data[0];
    const maxValue = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
    const percentage = ((value / maxValue) * 100).toFixed(2);

    ctx.save();
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${percentage}%`, centerX, centerY);
    ctx.restore();
  },
};

const CircularProgressChart = ({ value, maxValue }) => {
  const data = {
    labels: ['Progress', 'Remaining'],
    datasets: [
      {
        data: [value, maxValue - value],
        backgroundColor: ['#1a38a5', '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      centerTextPlugin: {
        enabled: true,
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    },
    layout: {
      padding: 20,
    },
  };

  return (
    <div className={styles.chart} style={{ width: '300px', height: '300px' }}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default CircularProgressChart;
