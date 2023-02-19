import React from "react";
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
	['Year', 'Sales', 'Expenses'],
	['2004', 1000, 400],
	['2005', 1170, 460],
	['2006', 660, 1120],
	['2008', 1030, 540],
	['2009', 1000, 400],
	['2010', 1170, 460],
	['2011', 660, 1120],
	['2012', 1030, 540],
];

export const options = {
	title: 'Company Performance',
	curveType: 'function',
	legend: { position: 'bottom' },
};

function App() {
  return (
    <div className="App">
      <Chart
				width='80%'
				height='400px'
				chartType='ScatterChart'
				data={data}
				options={options}
        />
		<Chart
                chartType="SteppedAreaChart"
                width="80%"
                height="400px"
                data={data}
                options={options}
                legendToggle
        />
		<Chart
                chartType="Bar"
                width="80%"
                height="400px"
                data={data}
                options={options}
        />
		<Chart
                chartType="Gauge"
                width="80%"
                height="400px"
                data={data}
                options={options}
        />
    </div>
  );
}

export default App;
