import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

interface LineGraph {
  symbol: string;
  timeLine: string;
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
interface IData {
  x: Date;
  y: string;
}

const LineGraph: React.FC<LineGraph> = (prop) => {
  const [data, setData] = useState<IData[]>([]);
  const [originData, setOriginData] = useState<IData[]>([]);
  console.log(prop.symbol);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/chart/gold/1y`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const timestamp: any = res.data.chart.result[0].timestamp;
        const openPrice: any =
          res.data.chart.result[0].indicators.quote[0].open;

        setOriginData(res.data.chart.result);
        let tmpData = [];
        for (let i = 0; i < timestamp.length; i++) {
          tmpData.push({
            x: new Date(timestamp[i] * 1000),
            y: openPrice[i],
          });
        }
        setData(tmpData);
      });
  }, []);

  return (
    <div>
      {data?.length > 0 && (
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
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default LineGraph;
