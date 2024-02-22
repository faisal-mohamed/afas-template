import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts/core";

import getChartColorsArray from "../../../app/components/common/ChartsDynamicColor";

const BarLabelChart = ({ dataColors, data }) => {
  var chartBarLabelRotationColors = getChartColorsArray(dataColors);

  const uniqueCompanies = Array.from(new Set(data.data.map((item) => item.company)));

  const aggregatedData = data.data.reduce((acc, currentItem) => {
    const existingItemIndex = acc.findIndex(item => item.company === currentItem.company);
    if (existingItemIndex !== -1) {
        acc[existingItemIndex].numberEmployees += parseInt(currentItem.numberEmployees);
    } else {
        acc.push({
            company: currentItem.company,
            numberEmployees: parseInt(currentItem.numberEmployees)
        });
    }
    return acc;
}, []);

const seriesData = aggregatedData.map((i)=> i.numberEmployees)
const labels = aggregatedData.map((i)=> i.company)
  var app = {};
  var myChart;
  var option;

  var posList = [
    "left",
    "right",
    "top",
    "bottom",
    "inside",
    "insideTop",
    "insideLeft",
    "insideRight",
    "insideBottom",
    "insideTopLeft",
    "insideTopRight",
    "insideBottomLeft",
    "insideBottomRight",
  ];
  app.configParameters = {
    rotate: {
      min: -90,
      max: 90,
    },
    align: {
      options: {
        left: "left",
        center: "center",
        right: "right",
      },
    },
    verticalAlign: {
      options: {
        top: "top",
        middle: "middle",
        bottom: "bottom",
      },
    },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos] = pos;
        return map;
      }, {}),
    },
    distance: {
      min: 0,
      max: 100,
    },
  };
  app.config = {
    rotate: 90,
    align: "left",
    verticalAlign: "middle",
    position: "insideBottom",
    distance: 15,
    onChange: function () {
      var labelOption = {
        rotate: app.config.rotate,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        position: app.config.position,
        distance: app.config.distance,
      };
      myChart.setOption({
        series: [
          {
            label: labelOption,
          },
          {
            label: labelOption,
          },
          {
            label: labelOption,
          },
          {
            label: labelOption,
          },
        ],
      });
    },
  };
  var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: "{c}  {name|{a}}",
    fontSize: 16,
    rich: {
      name: {},
    },
  };
  // {uniqueCompanies.map((company) => {
  //   const companyData = data.data.filter((item) => item.company === company);
  //   const companySeriesData = companyData.map((item) => item.numberEmployees);
  //   const companyLabels = companyData.map((item) => item.department);
   option = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: labels,
      textStyle: {
        //The style of the legend text
        color: "#858d98",
      },
    },
    color: chartBarLabelRotationColors,
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: {
          show: true,
        },
        dataView: {
          show: true,
          readOnly: false,
        },
        magicType: {
          show: true,
          type: ["line", "bar", "stack"],
        },
        restore: {
          show: true,
        },
        saveAsImage: {
          show: true,
        },
      },
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          show: false,
        },
        data: labels,
        axisLine: {
          lineStyle: {
            color: "#858d98",
          },
        },
      },
    ],
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#858d98",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(133, 141, 152, 0.1)",
        },
      },
    },
    textStyle: {
      fontFamily: "Poppins, sans-serif",
    },
    series: [
      {
        name: "",
        type: "bar",
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: seriesData,
      },
      // {
      //   name: "",
      //   type: "bar",
      //   label: labelOption,
      //   emphasis: {
      //     focus: "series",
      //   },
      //   data: [220, 182, 191, 234, 290],
      // },
      // {
      //   name: "",
      //   type: "bar",
      //   label: labelOption,
      //   emphasis: {
      //     focus: "series",
      //   },
      //   data: [150, 232, 201, 154, 190],
      // },
      // {
      //   name: "",
      //   type: "bar",
      //   label: labelOption,
      //   emphasis: {
      //     focus: "series",
      //   },
      //   data: [98, 77, 101, 99, 40],
      // },
    ],
  };
// })}

  return (
    <React.Fragment>
      <ReactEcharts style={{ height: "350px" }} option={option} />
    </React.Fragment>
  );
};

export { BarLabelChart };
