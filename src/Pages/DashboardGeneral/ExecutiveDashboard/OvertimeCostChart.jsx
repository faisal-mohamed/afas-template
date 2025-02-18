import React from "react";
import { Col, Card, CardBody, CardHeader, Row, Button } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CountUp from "react-countup";

const OvertimeCostChart = ({data}) => {
    const series = [
    {
      name: "Overtime Cost",
      data: data?.totalChartOvertimeCosts|| [],
    },
    {
      name: "Average Cost",
      data: data?.averageOvertimeCostsPerEmployee || [],
    },
    {
      name: "Average Days",
      data: data?.totalChartLeaveDays || [],
    },
  ];
  const options = {
    chart: {
      height: 345,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    colors: ["#45cb85d9", "#4b38b3", "#007bff"],

    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [3, 4, 3],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    series: [
      {
        name: "Overtime Cost",
        data: data?.totalChartOvertimeCosts || [],
      },
      {
        name: "Average Cost",
        data: data?.averageOvertimeCostsPerEmployee || [],
      },
      {
        name: "Average Days",
        data: data?.totalChartLeaveDays || [],
      },
    ],
    markers: {
      size: 0,

      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      name:"month",
      categories: data?.month || [],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  return (
    <React.Fragment>
      <Col xxl={12}>
        <Card className="card-height-100">
          <CardHeader className="border-0 align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">
              Overtime Cost
            </h4>
          </CardHeader>

          {/* <CardHeader className="p-0 border-0 bg-soft-light">
            <Row className="g-0 text-center">
              <Col xs={6} sm={4}>
                <div className="p-3 border border-dashed border-start-0">
                  <h5 className="mb-1">
                    <span className="counter-value" data-target="3364">
                      <CountUp start={0} end={3364} duration={4} />
                    </span>
                  </h5>
                  <p className="text-muted mb-0">Overtime Cost</p>
                </div>
              </Col>
              <Col xs={6} sm={4}>
                <div className="p-3 border border-dashed border-start-0">
                  <h5 className="mb-1">
                    <span className="counter-value" data-target="2804">
                      <CountUp start={0} end={2804} duration={4} />
                    </span>
                  </h5>
                  <p className="text-muted mb-0">Average Cost</p>
                </div>
              </Col>
              <Col xs={6} sm={4}>
                <div className="p-3 border border-dashed border-start-0">
                  <h5 className="mb-1">
                    <span className="counter-value" data-target="2402">
                      <CountUp start={0} end={2402} duration={4} />
                    </span>
                  </h5>
                  <p className="text-muted mb-0">Average Days</p>
                </div>
              </Col>
            </Row>
          </CardHeader> */}

          <CardBody className="p-0 pb-2">
            <div className="w-100">
              <ReactApexChart dir="ltr"
                options={options}
                series={series}
                type="line"
                height="345"
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default OvertimeCostChart;
