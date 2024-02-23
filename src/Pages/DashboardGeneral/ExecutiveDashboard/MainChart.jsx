import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { Line } from "./mixedCharts";
import { MonochromePie } from "./pieChart";
import { BarLabelChart } from "./barLabelChart";
// import DynamicBarChart from "./dynamicChart";

const MainCharts = (data) => {
  document.title = "HR Insights & Reporting";
  const companyData = {
    "Company A": {"Department 1": 120, "Department 2": 200},
    "Company B": {"Department 1": 130, "Department 2": 210, "Department 3": 310},
    "Company C": {"Department 1": 150, "Department 2": 220, "Department 3": 320},
    "Company D": {"Department 1": 180, "Department 2": 230}
  };
  return (
    <React.Fragment>
      {/* <div className="page-content"> */}
        <Container fluid>
          <Row>
            <Col lg={8}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Employee per company</h4>
                </CardHeader>
                <CardBody>
                  <Line dataColors='["#af1834", "--vz-success"]' data={data}/>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Employee data</h4>
                </CardHeader>
                <CardBody>
                  <MonochromePie dataColors='["--vz-primary", "--vz-success"]' data={data}/>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Employee per department</h4>
                </CardHeader>
                <div className="card-body">
                {/* <DynamicBarChart companyData={companyData} /> */}
                  <BarLabelChart dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger"]' data={data}/>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      {/* </div> */}
    </React.Fragment>
  );
};

export default MainCharts;
