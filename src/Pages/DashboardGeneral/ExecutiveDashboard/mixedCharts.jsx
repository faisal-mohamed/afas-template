import React from 'react';
import ReactApexChart from "react-apexcharts";

import getChartColorsArray from "../../../app/components/common/ChartsDynamicColor";

const Line = ({ dataColors, data}) => {
    var chartLineColumnColors = getChartColorsArray(dataColors);
    
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
    const series = [
        {
            name: "Employee Count",
            type: "column",
            data: seriesData,
        },
        {
            name: "Employee Count range",
            type: "line",
            data: seriesData,
        },
    ];
    const options = {
        chart: {
            toolbar: {
                show: 1,
            },
        },
        stroke: {
            width: [0, 4],
        },
        legend: {
            show : false,
          },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1],
        },
        labels: labels,
        yaxis: [
            {
                title: {
                    text: "Employee Count",
                    style: {
                        fontWeight: 600,
                    },
                },
            },
            {
                opposite: true,
                title: {
                    text: "Employee Count range",
                    style: {
                        fontWeight: 600,
                    },
                },
            },
        ],
        colors: chartLineColumnColors,
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                className="apex-charts"
                options={options}
                series={series}
                type="line"
                height={350}
            />
        </React.Fragment>
    );
};


export {
    Line,
};