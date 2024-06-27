import React, { useState, useEffect, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import html2canvas from 'html2canvas';
import './Chart.css'

const Chart = () => {
  const [data, setData] = useState({
    daily: [
      { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
        { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
        { "timestamp": "2023-01-03T00:00:00Z", "value": 5 },
        { "timestamp": "2023-01-04T00:00:00Z", "value": 8 },
        { "timestamp": "2023-01-05T00:00:00Z", "value": 15 },
        { "timestamp": "2023-01-06T00:00:00Z", "value": 7 },
        { "timestamp": "2023-01-07T00:00:00Z", "value": 11 },
        { "timestamp": "2023-01-08T00:00:00Z", "value": 14 },
        { "timestamp": "2023-01-09T00:00:00Z", "value": 9 },
        { "timestamp": "2023-01-10T00:00:00Z", "value": 13 },
        { "timestamp": "2023-01-11T00:00:00Z", "value": 6 },
        { "timestamp": "2023-01-12T00:00:00Z", "value": 16 },
        { "timestamp": "2023-01-13T00:00:00Z", "value": 8 },
        { "timestamp": "2023-01-14T00:00:00Z", "value": 10 },
        { "timestamp": "2023-01-15T00:00:00Z", "value": 12 },
        { "timestamp": "2023-01-16T00:00:00Z", "value": 5 },
        { "timestamp": "2023-01-17T00:00:00Z", "value": 8 },
        { "timestamp": "2023-01-18T00:00:00Z", "value": 15 },
        { "timestamp": "2023-01-19T00:00:00Z", "value": 7 },
        { "timestamp": "2023-01-20T00:00:00Z", "value": 11 },
        { "timestamp": "2023-01-21T00:00:00Z", "value": 14 },
        { "timestamp": "2023-01-22T00:00:00Z", "value": 9 },
        { "timestamp": "2023-01-23T00:00:00Z", "value": 13 },
        { "timestamp": "2023-01-24T00:00:00Z", "value": 6 },
        { "timestamp": "2023-01-25T00:00:00Z", "value": 16 },
        { "timestamp": "2023-01-26T00:00:00Z", "value": 8 },
        { "timestamp": "2023-01-27T00:00:00Z", "value": 10 },
        { "timestamp": "2023-01-28T00:00:00Z", "value": 12 },
        { "timestamp": "2023-01-29T00:00:00Z", "value": 5 },
        { "timestamp": "2023-01-30T00:00:00Z", "value": 8 },
        { "timestamp": "2023-01-31T00:00:00Z", "value": 15 },
        { "timestamp": "2023-02-01T00:00:00Z", "value": 7 },
        { "timestamp": "2023-02-02T00:00:00Z", "value": 11 },
        { "timestamp": "2023-02-03T00:00:00Z", "value": 14 },
        { "timestamp": "2023-02-04T00:00:00Z", "value": 9 },
        { "timestamp": "2023-02-05T00:00:00Z", "value": 13 },
        { "timestamp": "2023-02-06T00:00:00Z", "value": 6 },
        { "timestamp": "2023-02-07T00:00:00Z", "value": 16 },
        { "timestamp": "2023-02-08T00:00:00Z", "value": 8 },
        { "timestamp": "2023-02-09T00:00:00Z", "value": 10 },
        { "timestamp": "2023-02-10T00:00:00Z", "value": 12 },
        { "timestamp": "2023-02-11T00:00:00Z", "value": 5 },
        { "timestamp": "2023-02-12T00:00:00Z", "value": 8 },
        { "timestamp": "2023-02-13T00:00:00Z", "value": 15 },
        { "timestamp": "2023-02-14T00:00:00Z", "value": 7 },
        { "timestamp": "2023-02-15T00:00:00Z", "value": 11 },
        { "timestamp": "2023-02-16T00:00:00Z", "value": 14 },
        { "timestamp": "2023-02-17T00:00:00Z", "value": 9 },
        { "timestamp": "2023-02-18T00:00:00Z", "value": 13 },
        { "timestamp": "2023-02-19T00:00:00Z", "value": 6 },
        { "timestamp": "2023-02-20T00:00:00Z", "value": 16 },
        { "timestamp": "2023-02-21T00:00:00Z", "value": 8 },
        { "timestamp": "2023-02-22T00:00:00Z", "value": 10 },
        { "timestamp": "2023-02-23T00:00:00Z", "value": 12 },
        { "timestamp": "2023-02-24T00:00:00Z", "value": 5 },
        { "timestamp": "2023-02-25T00:00:00Z", "value": 8 },
        { "timestamp": "2023-02-26T00:00:00Z", "value": 15 },
        { "timestamp": "2023-02-27T00:00:00Z", "value": 7 },
        { "timestamp": "2023-02-28T00:00:00Z", "value": 11 },
        { "timestamp": "2023-03-01T00:00:00Z", "value": 14 },
        { "timestamp": "2023-03-02T00:00:00Z", "value": 9 },
        { "timestamp": "2023-03-03T00:00:00Z", "value": 13 },
        { "timestamp": "2023-03-04T00:00:00Z", "value": 6 },
        { "timestamp": "2023-03-05T00:00:00Z", "value": 16 },
        { "timestamp": "2023-03-06T00:00:00Z", "value": 8 },
        { "timestamp": "2023-03-07T00:00:00Z", "value": 10 },
        { "timestamp": "2023-03-08T00:00:00Z", "value": 12 },
        { "timestamp": "2023-03-09T00:00:00Z", "value": 5 },
        { "timestamp": "2023-03-10T00:00:00Z", "value": 8 },
        { "timestamp": "2023-03-11T00:00:00Z", "value": 15 },
        { "timestamp": "2023-03-12T00:00:00Z", "value": 7 },
        { "timestamp": "2023-03-13T00:00:00Z", "value": 11 },
        { "timestamp": "2023-03-14T00:00:00Z", "value": 14 },
        { "timestamp": "2023-03-15T00:00:00Z", "value": 9 },
        { "timestamp": "2023-03-16T00:00:00Z", "value": 13 },
        { "timestamp": "2023-03-17T00:00:00Z", "value": 6 },
        { "timestamp": "2023-03-18T00:00:00Z", "value": 16 },
        { "timestamp": "2023-03-19T00:00:00Z", "value": 8 },
        { "timestamp": "2023-03-20T00:00:00Z", "value": 10 },
        { "timestamp": "2023-03-21T00:00:00Z", "value": 12 },
        { "timestamp": "2023-03-22T00:00:00Z", "value": 5 },
        { "timestamp": "2023-03-23T00:00:00Z", "value": 8 },
        { "timestamp": "2023-03-24T00:00:00Z", "value": 15 },
        { "timestamp": "2023-03-25T00:00:00Z", "value": 7 },
        { "timestamp": "2023-03-26T00:00:00Z", "value": 11 },
        { "timestamp": "2023-03-27T00:00:00Z", "value": 14 },
        { "timestamp": "2023-03-28T00:00:00Z", "value": 9 },
        { "timestamp": "2023-03-29T00:00:00Z", "value": 13 },
        { "timestamp": "2023-03-30T00:00:00Z", "value": 6 },
        { "timestamp": "2023-03-31T00:00:00Z", "value": 16 },
        { "timestamp": "2023-04-01T00:00:00Z", "value": 8 },
        { "timestamp": "2023-04-02T00:00:00Z", "value": 10 },
        { "timestamp": "2023-04-03T00:00:00Z", "value": 12 },
        { "timestamp": "2023-04-04T00:00:00Z", "value": 5 },
        { "timestamp": "2023-04-05T00:00:00Z", "value": 8 },
        { "timestamp": "2023-04-06T00:00:00Z", "value": 15 },
        { "timestamp": "2023-04-07T00:00:00Z", "value": 7 },
        { "timestamp": "2023-04-08T00:00:00Z", "value": 11 },
        { "timestamp": "2023-04-09T00:00:00Z", "value": 14 },
        { "timestamp": "2023-04-10T00:00:00Z", "value": 9 },
        { "timestamp": "2023-04-11T00:00:00Z", "value": 13 },
        { "timestamp": "2023-04-12T00:00:00Z", "value": 6 },
        { "timestamp": "2023-04-13T00:00:00Z", "value": 16 },
        { "timestamp": "2023-04-14T00:00:00Z", "value": 8 },
        { "timestamp": "2023-04-15T00:00:00Z", "value": 10 },
        { "timestamp": "2023-04-16T00:00:00Z", "value": 12 },
        { "timestamp": "2023-04-17T00:00:00Z", "value": 5 },
        { "timestamp": "2023-04-18T00:00:00Z", "value": 8 },
        { "timestamp": "2023-04-19T00:00:00Z", "value": 15 },
        { "timestamp": "2023-04-20T00:00:00Z", "value": 7 },
        { "timestamp": "2023-04-21T00:00:00Z", "value": 11 },
        { "timestamp": "2023-04-22T00:00:00Z", "value": 14 },
        { "timestamp": "2023-04-23T00:00:00Z", "value": 9 },
        { "timestamp": "2023-04-24T00:00:00Z", "value": 13 },
        { "timestamp": "2023-04-25T00:00:00Z", "value": 6 },
        { "timestamp": "2023-04-26T00:00:00Z", "value": 16 },
        { "timestamp": "2023-04-27T00:00:00Z", "value": 8 },
        { "timestamp": "2023-04-28T00:00:00Z", "value": 10 },
        { "timestamp": "2023-04-29T00:00:00Z", "value": 12 },
        { "timestamp": "2023-04-30T00:00:00Z", "value": 5 },
        { "timestamp": "2023-05-01T00:00:00Z", "value": 8 },
        { "timestamp": "2023-05-02T00:00:00Z", "value": 15 },
        { "timestamp": "2023-05-03T00:00:00Z", "value": 7 },
        { "timestamp": "2023-05-04T00:00:00Z", "value": 11 },
        { "timestamp": "2023-05-05T00:00:00Z", "value": 14 },
        { "timestamp": "2023-05-06T00:00:00Z", "value": 9 },
        { "timestamp": "2023-05-07T00:00:00Z", "value": 13 },
        { "timestamp": "2023-05-08T00:00:00Z", "value": 6 },
        { "timestamp": "2023-05-09T00:00:00Z", "value": 16 },
        { "timestamp": "2023-05-10T00:00:00Z", "value": 8 },
        { "timestamp": "2023-05-11T00:00:00Z", "value": 10 },
        { "timestamp": "2023-05-12T00:00:00Z", "value": 12 },
        { "timestamp": "2023-05-13T00:00:00Z", "value": 5 },
        { "timestamp": "2023-05-14T00:00:00Z", "value": 8 },
        { "timestamp": "2023-05-15T00:00:00Z", "value": 15 },
        { "timestamp": "2023-05-16T00:00:00Z", "value": 7 },
        { "timestamp": "2023-05-17T00:00:00Z", "value": 11 },
        { "timestamp": "2023-05-18T00:00:00Z", "value": 14 },
        { "timestamp": "2023-05-19T00:00:00Z", "value": 9 },
        { "timestamp": "2023-05-20T00:00:00Z", "value": 13 },
        { "timestamp": "2023-05-21T00:00:00Z", "value": 6 },
        { "timestamp": "2023-05-22T00:00:00Z", "value": 16 },
        { "timestamp": "2023-05-23T00:00:00Z", "value": 8 },
        { "timestamp": "2023-05-24T00:00:00Z", "value": 10 },
        { "timestamp": "2023-05-25T00:00:00Z", "value": 12 },
        { "timestamp": "2023-05-26T00:00:00Z", "value": 5 },
        { "timestamp": "2023-05-27T00:00:00Z", "value": 8 },
        { "timestamp": "2023-05-28T00:00:00Z", "value": 15 },
        { "timestamp": "2023-05-29T00:00:00Z", "value": 7 },
        { "timestamp": "2023-05-30T00:00:00Z", "value": 11 },
        { "timestamp": "2023-05-31T00:00:00Z", "value": 14 },
        { "timestamp": "2023-06-01T00:00:00Z", "value": 9 },
        { "timestamp": "2023-06-02T00:00:00Z", "value": 13 },
        { "timestamp": "2023-06-03T00:00:00Z", "value": 6 },
        { "timestamp": "2023-06-04T00:00:00Z", "value": 16 },
        { "timestamp": "2023-06-05T00:00:00Z", "value": 8 },
        { "timestamp": "2023-06-06T00:00:00Z", "value": 10 },
        { "timestamp": "2023-06-07T00:00:00Z", "value": 12 },
        { "timestamp": "2023-06-08T00:00:00Z", "value": 5 },
        { "timestamp": "2023-06-09T00:00:00Z", "value": 8 },
        { "timestamp": "2023-06-10T00:00:00Z", "value": 15 },
        { "timestamp": "2023-06-11T00:00:00Z", "value": 7 },
        { "timestamp": "2023-06-12T00:00:00Z", "value": 11 },
        { "timestamp": "2023-06-13T00:00:00Z", "value": 14 },
        { "timestamp": "2023-06-14T00:00:00Z", "value": 9 },
        { "timestamp": "2023-06-15T00:00:00Z", "value": 13 },
        { "timestamp": "2023-06-16T00:00:00Z", "value": 6 },
        { "timestamp": "2023-06-17T00:00:00Z", "value": 16 },
        { "timestamp": "2023-06-18T00:00:00Z", "value": 8 },
        { "timestamp": "2023-06-19T00:00:00Z", "value": 10 },
        { "timestamp": "2023-06-20T00:00:00Z", "value": 12 },
        { "timestamp": "2023-06-21T00:00:00Z", "value": 5 },
        { "timestamp": "2023-06-22T00:00:00Z", "value": 8 },
        { "timestamp": "2023-06-23T00:00:00Z", "value": 15 },
        { "timestamp": "2023-06-24T00:00:00Z", "value": 7 },
        { "timestamp": "2023-06-25T00:00:00Z", "value": 11 },
        { "timestamp": "2023-06-26T00:00:00Z", "value": 14 },
        { "timestamp": "2023-06-27T00:00:00Z", "value": 9 },
        { "timestamp": "2023-06-28T00:00:00Z", "value": 13 },
        { "timestamp": "2023-06-29T00:00:00Z", "value": 6 },
        { "timestamp": "2023-06-30T00:00:00Z", "value": 16 },
        { "timestamp": "2023-07-01T00:00:00Z", "value": 8 },
        { "timestamp": "2023-07-02T00:00:00Z", "value": 10 },
        { "timestamp": "2023-07-03T00:00:00Z", "value": 12 },
        { "timestamp": "2023-07-04T00:00:00Z", "value": 5 },
        { "timestamp": "2023-07-05T00:00:00Z", "value": 8 }
    ],
    weekly: [
      { "timestamp": "01-1st week", "value": 9.71 },
    { "timestamp": "01-2nd week", "value": 11.43 },
    { "timestamp": "01-3rd week", "value": 9.86 },
    { "timestamp": "01-4th week", "value": 11.43 },
    { "timestamp": "02-1st week", "value": 9.14 },
    { "timestamp": "02-2nd week", "value": 12.57 },
    { "timestamp": "02-3rd week", "value": 9.86 },
    { "timestamp": "02-4th week", "value": 11.43 },
    { "timestamp": "03-1st week", "value": 9.14 },
    { "timestamp": "03-2nd week", "value": 12.57 },
    { "timestamp": "03-3rd week", "value": 9.86 },
    { "timestamp": "03-4th week", "value": 11.43 },
    { "timestamp": "04-1st week", "value": 9.14 },
    { "timestamp": "04-2nd week", "value": 12.57 },
    { "timestamp": "04-3rd week", "value": 9.86 },
    { "timestamp": "04-4th week", "value": 11.43 },
    { "timestamp": "05-1st week", "value": 9.14 },
    { "timestamp": "05-2nd week", "value": 12.57 },
    { "timestamp": "05-3rd week", "value": 9.86 },
    { "timestamp": "05-4th week", "value": 11.43 },
    { "timestamp": "06-1st week", "value": 9.14 },
    { "timestamp": "06-2nd week", "value": 12.57 },
    { "timestamp": "06-3rd week", "value": 9.86 },
    { "timestamp": "06-4th week", "value": 11.43 },
      { "timestamp": "07-1st week", "value": 9.14 },
      { "timestamp": "07-2nd week", "value": 12.57 },
      { "timestamp": "07-3rd week", "value": 9.86 },
      { "timestamp": "07-4th week", "value": 11.43 },
      { "timestamp": "08-1st week", "value": 9.14 },
      { "timestamp": "08-2nd week", "value": 12.57 },
      { "timestamp": "08-3rd week", "value": 9.86 },
      { "timestamp": "08-4th week", "value": 11.43 },
      { "timestamp": "09-1st week", "value": 9.14 },
      { "timestamp": "09-2nd week", "value": 12.57 },
      { "timestamp": "09-3rd week", "value": 9.86 },
      { "timestamp": "09-4th week", "value": 11.43 },
      { "timestamp": "10-1st week", "value": 9.14 },
      { "timestamp": "10-2nd week", "value": 12.57 },
      { "timestamp": "10-3rd week", "value": 9.86 },
      { "timestamp": "10-4th week", "value": 11.43 },
      { "timestamp": "11-1st week", "value": 9.14 },
      { "timestamp": "11-2nd week", "value": 12.57 },
      { "timestamp": "11-3rd week", "value": 9.86 },
      { "timestamp": "11-4th week", "value": 11.43 },
      { "timestamp": "12-1st week", "value": 9.14 },
      { "timestamp": "12-2nd week", "value": 12.57 },
      { "timestamp": "12-3rd week", "value": 9.86 },
      { "timestamp": "12-4th week", "value": 11.43 }
    ],
    monthly: [
      { "timestamp": "01-January", "value": 10.14 },
      { "timestamp": "02-February", "value": 10.07 },
      { "timestamp": "03-March", "value": 10.35 },
      { "timestamp": "04-April", "value": 10.29 },
      { "timestamp": "05-May", "value": 10.07 },
      { "timestamp": "06-June", "value": 10.50 },
      { "timestamp": "07-July", "value": 8.57 },
      { "timestamp": "08-August", "value": 10.71 },
      { "timestamp": "09-September", "value": 10.29 },
      { "timestamp": "10-October", "value": 10.50 },
      { "timestamp": "11-November", "value": 10.36 },
      { "timestamp": "12-December", "value": 10.29 },
      { "timestamp": "01-January", "value": 12.06 },
    { "timestamp": "02-February", "value": 10.17 },
    { "timestamp": "03-March", "value": 10.44 },
    { "timestamp": "04-April", "value": 10.26 },
    { "timestamp": "05-May", "value": 10.07 },
    { "timestamp": "06-June", "value": 10.52 },
    { "timestamp": "07-July", "value": 14.51 },
    { "timestamp": "08-August", "value": 10.77 },
    { "timestamp": "09-September", "value": 10.37 },
    { "timestamp": "10-October", "value": 10.43 },
    { "timestamp": "11-November", "value": 10.42 },
    { "timestamp": "12-December", "value": 10.19 },
    { "timestamp": "01-January", "value": 10.06 },
    { "timestamp": "02-February", "value": 10.17 },
    { "timestamp": "03-March", "value": 8.44 },
    { "timestamp": "04-April", "value": 10.26 },
    { "timestamp": "05-May", "value": 10.07 },
    { "timestamp": "06-June", "value": 10.52 },
    { "timestamp": "07-July", "value": 10.51 },
    { "timestamp": "08-August", "value": 10.77 },
    { "timestamp": "09-September", "value": 10.37 },
    { "timestamp": "10-October", "value": 10.43 },
    { "timestamp": "11-November", "value": 9.42 },
    { "timestamp": "12-December", "value": 10.19 },
    { "timestamp": "01-January", "value": 10.00 },
    { "timestamp": "02-February", "value": 10.23 },
    { "timestamp": "03-March", "value": 7.57 },
    { "timestamp": "04-April", "value": 10.32 },
    { "timestamp": "05-May", "value": 10.14 },
    { "timestamp": "06-June", "value": 10.61 },
    { "timestamp": "07-July", "value": 10.63 },
    { "timestamp": "08-August", "value": 10.87 },
    { "timestamp": "09-September", "value": 14.45 },
    { "timestamp": "10-October", "value": 10.58 },
    { "timestamp": "11-November", "value": 10.50 },
    { "timestamp": "12-December", "value": 12.26 }
    ],
  });
  const [timeframe, setTimeframe] = useState('daily');
  const [formattedData, setFormattedData] = useState([]);
  const chartRef = useRef(null);
  console.log(setData)
  useEffect(() => {
    if (data[timeframe]) {
      setFormattedData(data[timeframe]);
      console.log(data[timeframe]);  // Log the data to console
    }
  }, [data, timeframe]);

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  const handleExport = (format) => {
    html2canvas(chartRef.current.container).then((canvas) => {
      const link = document.createElement('a');
      link.download = `chart.${format}`;
      link.href = canvas.toDataURL(`image/${format}`);
      link.click();
    });
  };

  return (
    <div>
      <label htmlFor="timeframe">Select Timeframe: </label>
      <select id="timeframe" value={timeframe} onChange={handleTimeframeChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <div className='container' style={{ width: '100%', height: 400, overflowX: 'scroll' }}>
        <div style={{ width: formattedData.length * 50, height: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedData} ref={chartRef}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" tick={false} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <h1 className='head'>Detailed View</h1>
      <button onClick={() => handleExport('png')}>Export as PNG</button>
      <button onClick={() => handleExport('jpg')}>Export as JPG</button>
    </div>
  );
};

export default Chart;
