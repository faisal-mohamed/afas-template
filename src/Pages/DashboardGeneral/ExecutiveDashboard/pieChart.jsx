import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../app/components/common/ChartsDynamicColor";

const MonochromePie = ({ dataColors, data }) => {
  var chartLineColumnColors = getChartColorsArray(dataColors);

  const aggregatedData = [
    {
      name: "Sickness Days",
      value: data.data.reduce(
        (acc, currentItem) => acc + (parseInt(currentItem.sicknessDays) || 0),
        0
      ),
    },
    {
      name: "Leave Days",
      value: data.data.reduce(
        (acc, currentItem) => acc + (parseInt(currentItem.leaveDays) || 0),
        0
      ),
    },
    {
      name: "Overtime Hours",
      value: data.data.reduce(
        (acc, currentItem) =>
          acc + (parseInt(currentItem["overtime(hrs)"]) || 0),
        0
      ),
    },
  ];

  const seriesData = aggregatedData.map((i) => i.value);
  const labels = aggregatedData.map((i) => i.name);
  const series = seriesData;
  var options = {
    chart: {
      height: 300,
      type: "pie",
    },
    labels: labels,
    theme: {
      monochrome: {
        enabled: true,
        color: "#58508d",
        shadeTo: "light",
        shadeIntensity: 0.6,
      },
    },

    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },
    title: {
      text: "Employee data",
      style: {
        fontWeight: 500,
      },
    },
    dataLabels: {
      formatter: function (val, opts) {
        var name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      },
      dropShadow: {
        enabled: true,
      },
    },
    legend: {
      show: false,
    },
  };
  return (
    <ReactApexChart
      dir="ltr"
      className="apex-charts"
      series={series}
      options={options}
      type="pie"
      height={350.7}
    />
  );
};

export { MonochromePie };
