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
import SicknessChart from "./SicknessChart";
import LeaveCostChart from "./LeaveCostChart";

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

  let totalOvertimeCosts = 0;
  let itemCount = 0;
  let totalLeaveDays = 0;

  data.forEach((item) => {
    const overtimeHours =
      parseFloat(item["overtime(hrs)"].replace(",", "")) || 0;
    const leaveDays = parseFloat(item.leaveDays) || 0;

    totalOvertimeCosts += parseFloat(item.overtimeCosts.replace(",", "")) || 0;
    itemCount++;
    totalLeaveDays += leaveDays;
  });

  const averageOvertimeCosts =
    itemCount !== 0 ? totalOvertimeCosts / itemCount : 0;

  const aggregatedData = {
    totalOvertimeCosts,
    averageOvertimeCosts,
    totalLeaveDays,
  };

  let totalSicknessCosts = 0;
  let SicknessItemCount = 0;
  let totalSicknessDays = 0;

  data.forEach((item) => {
    const sicknessCost = parseFloat(item.sicknessCosts) || 0;
    const leaveDays = parseFloat(item.sicknessDays) || 0;

    totalSicknessCosts += parseFloat(item.sicknessCosts.replace(",", "")) || 0;
    SicknessItemCount++;
    totalSicknessDays += leaveDays;
  });

  const averageSicknessCosts =
    SicknessItemCount !== 0 ? totalSicknessCosts / SicknessItemCount : 0;

  const SicknessData = {
    totalSicknessCosts,
    averageSicknessCosts,
    totalSicknessDays,
  };

  let totalLeaveCost = 0;
  let LeaveitemCount = 0;
  let LeaveDays = 0;

  data.forEach((item) => {
    const overtimeHours =
      parseFloat(item["overtime(hrs)"].replace(",", "")) || 0;
    const leaveDays = parseFloat(item.leaveDays) || 0;

    totalLeaveCost += parseFloat(item.leaveCosts.replace(",", "")) || 0;
    LeaveitemCount++;
    LeaveDays += leaveDays;
  });

  const averageLeaveCosts =
  LeaveitemCount !== 0 ? totalLeaveCost / LeaveitemCount : 0;

  const LeaveCostData = {
    totalLeaveCost,
    averageLeaveCosts,
    LeaveDays,
  };

  // Object to hold the totals for each month
  const totals = {};

  // Iterate through the data to sum up values for each month
  avgdata.forEach((entry) => {
    const month = entry.month;
    const leaveDays = parseFloat(entry.leaveDays) || 0;
    const overtimeCosts =
      parseFloat(entry["overtimeCosts"].replace(/,/g, "")) || 0;

    if (!totals[month]) {
      totals[month] = {
        month: month,
        totalChartLeaveDays: leaveDays,
        totalChartOvertimeCosts: overtimeCosts,
      };
    } else {
      totals[month].totalLeaveDays += leaveDays;
      totals[month].totalOvertimeCosts += overtimeCosts;
    }
  });

  // console.log("totals", totals);
  // Arrays to hold the final results
  const month = [];
  const totalChartLeaveDays = [];
  const totalChartOvertimeCosts = [];
  const averageOvertimeCostsPerEmployee = [];

  // Extract data from the totals object and calculate average
  Object.values(totals).forEach((entry) => {
    month.push(entry.month);
    totalChartLeaveDays.push(entry.totalChartLeaveDays);
    totalChartOvertimeCosts.push(entry.totalChartOvertimeCosts);
    const averageCosts =
      entry.totalChartOvertimeCosts / entry.totalChartLeaveDays;
    averageOvertimeCostsPerEmployee.push(parseFloat(averageCosts.toFixed(2)));
  });

  // Create the result object
  const result = {
    month: month,
    totalChartLeaveDays: totalChartLeaveDays,
    totalChartOvertimeCosts: totalChartOvertimeCosts,
    averageOvertimeCostsPerEmployee: averageOvertimeCostsPerEmployee,
  };


  // Object to hold the totals for each month
  const sicknesstotals = {};

  // Iterate through the data to sum up values for each month
  avgdata.forEach((entry) => {
    const sicknessMonth = entry.month;
    const sicknesLeaveDays = parseFloat(entry.sicknessDays) || 0;
    const sicknesCosts =
      parseFloat(entry["sicknessCosts"].replace(/,/g, "")) || 0;

    if (!sicknesstotals[sicknessMonth]) {
      sicknesstotals[sicknessMonth] = {
        month: sicknessMonth,
        totalSicknessLeaveDays: sicknesLeaveDays,
        totalSicknessCosts: sicknesCosts,
      };
    } else {
      sicknesstotals[sicknessMonth].totalSicknessLeaveDays += sicknesLeaveDays;
      sicknesstotals[sicknessMonth].totalSicknessCosts += sicknesCosts;
    }
  });

  console.log("sicknesstotals", sicknesstotals);
  // Arrays to hold the final results
  const sicknessMonth = [];
  const totalSicknessLeaveDays = [];
  const totalChartSicknessCosts = [];
  const averageChartSicknessCosts = [];

  // Extract data from the totals object and calculate average
  Object.values(sicknesstotals).forEach((entry) => {
    console.log("entry", entry)
    sicknessMonth.push(entry.month);
    totalSicknessLeaveDays.push(entry.totalSicknessLeaveDays);
    totalChartSicknessCosts.push(entry.totalSicknessCosts);
    const averageCosts =
      entry.totalSicknessCosts / entry.totalSicknessLeaveDays;
      averageChartSicknessCosts.push(parseFloat(averageCosts.toFixed(2)));
  });

  // Create the result object
  const sicknessResult = {
    sicknessMonth: sicknessMonth,
    totalSicknessLeaveDays: totalSicknessLeaveDays,
    totalChartSicknessCosts: totalChartSicknessCosts,
    averageChartSicknessCosts: averageChartSicknessCosts,
  };


  // Object to hold the totals for each month
  const Leavetotals = {};

  // Iterate through the data to sum up values for each month
  avgdata.forEach((entry) => {
    const leaveMonth = entry.month;
    const leaveDays = parseFloat(entry.leaveDays) || 0;
    const leaveCosts =
      parseFloat(entry["leaveCosts"].replace(/,/g, "")) || 0;

    if (!Leavetotals[leaveMonth]) {
      Leavetotals[leaveMonth] = {
        month: leaveMonth,
        totalleaveDays: leaveDays,
        totalLeaveCosts: leaveCosts,
      };
    } else {
      Leavetotals[leaveMonth].totalleaveDays += leaveDays;
      Leavetotals[leaveMonth].totalLeaveCosts += leaveCosts;
    }
  });

  console.log("Leavetotals", Leavetotals);
  // Arrays to hold the final results
  const leaveMonth = [];
  const totalleaveDays = [];
  const totalLeaveCosts = [];
  const averageChartLeaveCosts = [];

  // Extract data from the totals object and calculate average
  Object.values(Leavetotals).forEach((entry) => {
    console.log("entry", entry)
    leaveMonth.push(entry.month);
    totalleaveDays.push(entry.totalleaveDays);
    totalLeaveCosts.push(entry.totalLeaveCosts.toFixed(2));
    const averageCosts =
      entry.totalLeaveCosts / entry.totalleaveDays;
      averageChartLeaveCosts.push(parseFloat(averageCosts.toFixed(2)));
  });

  // Create the result object
  const leaveResult = {
    leaveMonth: leaveMonth,
    totalleaveDays: totalleaveDays,
    totalLeaveCosts: totalLeaveCosts,
    averageChartLeaveCosts: averageChartLeaveCosts,
  };

  console.log("leaveResult", leaveResult)
  return (
    <React.Fragment>
      <PageHeader headerName="HR Insights & Reporting" />
      <div className="page-content">
        <Section rightClickBtn={toggleRightColumn} />
        <Row>
          <MainCharts data={data} />
        </Row>
        <Row>
          <Widget
            feaIconClass={"overtimeCost"}
            feaIcon={"dollar-sign"}
            label={"Overtime Cost"}
            suffix={""}
            separator={","}
            counter={aggregatedData.totalOvertimeCosts}
            badgeClass={"danger"}
            icon={"ri-arrow-down-s-line"}
            percentage={"5.02 %"}
            caption={"Last Month : 84,039.93"}
          />
          <Widget
            feaIconClass={"averageCost"}
            feaIcon={"dollar-sign"}
            label={"Average Cost"}
            suffix={""}
            separator={","}
            counter={aggregatedData.averageOvertimeCosts}
            badgeClass={"success"}
            icon={"ri-arrow-up-s-line"}
            percentage={"3.58 %"}
            caption={"Average cost per employee"}
          />
          <Widget
            feaIconClass={"averageDays"}
            feaIcon={"clock"}
            label={"Average Days"}
            suffix={""}
            separator={","}
            counter={aggregatedData.totalLeaveDays}
            badgeClass={"danger"}
            icon={"ri-arrow-down-s-line"}
            percentage={"10.35 %"}
            caption={"Average days per employee"}
          />
        </Row>
        <Row>
          <OvertimeCostChart data={result} />
        </Row>
        <Row>
        <Widget
            feaIconClass={"sicknessCost"}
            feaIcon={"dollar-sign"}
            label={"Sickness Cost"}
            suffix={""}
            separator={","}
            counter={SicknessData.totalSicknessCosts}
            badgeClass={"danger"}
            icon={"ri-arrow-down-s-line"}
            percentage={"5.02 %"}
            caption={"Last Month : 54,039.93"}
          />
          <Widget
            feaIconClass={"averageSicknessCost"}
            feaIcon={"dollar-sign"}
            label={"Average Sickness Cost"}
            suffix={""}
            separator={","}
            counter={SicknessData.averageSicknessCosts}
            badgeClass={"success"}
            icon={"ri-arrow-up-s-line"}
            percentage={"3.58 %"}
            caption={"Average Sickness cost per employee"}
          />
          <Widget
            feaIconClass={"averageSicknessDays"}
            feaIcon={"clock"}
            label={"Average Sickness Days"}
            suffix={""}
            separator={","}
            counter={SicknessData.totalSicknessDays}
            badgeClass={"danger"}
            icon={"ri-arrow-down-s-line"}
            percentage={"10.35 %"}
            caption={"Average Sickness days per employee"}
          />
        </Row>
        <Row>
          <SicknessChart data={sicknessResult}/>
        </Row>
        <Row>
        <Widget
            feaIconClass={"leaveCost"}
            feaIcon={"dollar-sign"}
            label={"Leave Cost"}
            suffix={""}
            separator={","}
            counter={LeaveCostData.totalLeaveCost}
            badgeClass={"danger"}
            icon={"ri-arrow-down-s-line"}
            percentage={"5.02 %"}
            caption={"Last Month : 64,039.93"}
          />
          <Widget
            feaIconClass={"averageLeaveCost"}
            feaIcon={"dollar-sign"}
            label={"Average Leave Cost"}
            suffix={""}
            separator={","}
            counter={LeaveCostData.averageLeaveCosts}
            badgeClass={"success"}
            icon={"ri-arrow-up-s-line"}
            percentage={"3.58 %"}
            caption={"Average Leave cost per employee"}
          />
          <Widget
            feaIconClass={"averageLeaveDays"}
            feaIcon={"clock"}
            label={"Average Leave Days"}
            suffix={""}
            separator={","}
            counter={LeaveCostData.LeaveDays}
            badgeClass={"danger"}
            icon={"ri-arrow-down-s-line"}
            percentage={"10.35 %"}
            caption={"Average Leave days per employee"}
          />
        </Row>
        <Row>
          <LeaveCostChart data={leaveResult} />
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ExecutiveDashboard;
