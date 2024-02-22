import React, { useState, useEffect } from "react";
import "../dashboard.scss";
import { Col, Container, Row } from "reactstrap";
import { DashboardTabs } from "../../../utilities/constants";
import PageHeader from "../../../layouts/PageHeader";
import Section from "./Section";
import MainCharts from "./MainChart";
import Widget from "./Widgets";
import OvertimeCostChart from "./OvertimeCostChart";
import axios from "axios";

const ExecutiveDashboard = () => {
  const [data, setData] = useState([]);
  const [avgdata, setAvgData] = useState([]);

  useEffect(() => {
    fetchData();
    fetchAvergaeData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8023/companiesAndDepartments"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAvergaeData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8023/kpisPerCompanyPerMonth"
      );
      setAvgData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  document.title = "Executive Dashboard.ClouSec";

  const [rightColumn, setRightColumn] = useState(true);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  return (
    <React.Fragment>
      <PageHeader headerName="HR Insights & Reporting" />
      <div className="page-content">
        <Section rightClickBtn={toggleRightColumn} />
        <Row>
          <MainCharts data={data} />
        </Row>
        <Row>
          {/* {avgdata.map((i) => ( */}
            <Widget
            />
          {/* ))} */}
        </Row>
        <Row>
          <OvertimeCostChart />
        </Row>
        <Row>
          <Widget />
        </Row>
        <Row>
          <OvertimeCostChart />
        </Row>
        <Row>
          <Widget />
        </Row>
        <Row>
          <OvertimeCostChart />
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ExecutiveDashboard;
