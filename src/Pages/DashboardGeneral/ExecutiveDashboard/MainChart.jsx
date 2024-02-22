import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { Line } from "./mixedCharts";
import { MonochromePie } from "./pieChart";
import { BarLabelChart } from "./barLabelChart";

const MainCharts = (data) => {
  document.title = "HR Insights & Reporting";
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
