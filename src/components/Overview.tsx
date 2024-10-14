import React from 'react';
import categories from '../data/categories';
import {Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import {Entry} from './types.js';

interface Props {
  entriesData: Entry[];
}

const Overview = (props: Props) => {
  const labels: string[] = [];
  const entriesData: number[] = [];

  if (props.entriesData) {
    categories.forEach(category => {
      labels.push(category.name);

      const totalAmount = props.entriesData.reduce((total, entry) => {
        if (entry.category === category.name) {
          return total + parseInt(entry.amount);
        } else {
          return total;
        }
      }, 0);
      entriesData.push(totalAmount);
    });
  }

  const chartData = {
    labels: labels || '',
    datasets: [
      {
        label: 'Amount',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: entriesData || [],
      },
    ],
  };
  console.log(chartData);
  return (
    <div>
      <br />
      <br />
      {props.entriesData && <Bar data={chartData} width={100} height={50} />}
      {!props.entriesData && (
        <h2>
          There is no entries to display, please go to
          <Link to="/entries"> entries</Link> page
        </h2>
      )}
    </div>
  );
};

export default Overview;
