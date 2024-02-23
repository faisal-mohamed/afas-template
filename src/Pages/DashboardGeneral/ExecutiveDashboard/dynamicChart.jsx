// import React, { useEffect, useRef } from 'react';
// import echarts from 'echarts-for-react';


// const DynamicBarChart = ({ companyData }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = chartRef.current.getEchartsInstance();

//     const allDepartments = new Set();
//     Object.values(companyData).forEach((departments) => {
//       Object.keys(departments).forEach((department) => {
//         allDepartments.add(department);
//       });
//     });

//     const seriesData = Array.from(allDepartments).map((department) => {
//       const data = [];
//       Object.values(companyData).forEach((departments) => {
//         data.push(departments[department] || 0);
//       });
//       return { name: department, type: 'bar', data };
//     });

//     const option = {
//       tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
//       legend: { data: Array.from(allDepartments) },
//       grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
//       xAxis: [{ type: 'category', data: Object.keys(companyData) }],
//       yAxis: [{ type: 'value' }],
//       series: seriesData,
//     };

//     chart.setOption(option);

//     // Clean up
//     return () => {
//       chart.dispose();
//     };
//   }, [companyData]);

//   return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
// };

// export default DynamicBarChart;
