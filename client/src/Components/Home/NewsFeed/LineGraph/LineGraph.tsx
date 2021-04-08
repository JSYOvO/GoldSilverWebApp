import React from 'react';
import { Line } from 'react-chartjs-2';
import { RootStateOrAny, useSelector } from 'react-redux';
import './LineGraph.css';

interface LineGraph {}
interface IData {
  x: Date;
  y: string;
}
const options = {
  legend: {
    display: false,
  },
  hover: {
    intersect: false,
  },
  elements: {
    line: {
      tension: 0,
    },
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {},
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
        ticks: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

const LineGraph: React.FC<LineGraph> = () => {
  const chartData: IData[] = useSelector(
    (state: RootStateOrAny) => state.data.chartData,
  );

  return (
    <div className="linegraph">
      <Line
        data={{
          datasets: [
            {
              type: 'line',
              backgroundColor: 'black',
              borderColor: '#5AC53B',
              borderWidth: 2,
              pointBorderColor: 'rgba(0, 0, 0, 0)',
              pointBackgroundColor: 'rgba(0, 0, 0, 0)',
              pointHoverBackgroundColor: '#5AC53B',
              pointHoverBorderColor: '#000000',
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
              data: chartData?.length > 0 ? chartData : [],
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default LineGraph;
