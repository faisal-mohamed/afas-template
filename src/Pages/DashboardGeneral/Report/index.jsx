import React, { useState, useEffect } from "react";
import "../dashboard.scss";
import { Col, Row, Spinner, Label } from "reactstrap";
import Flatpickr from "react-flatpickr";
import PageHeader from "../../../layouts/PageHeader";
import CommonButton from "../../../app/components/common/CommonButton";
import "../../../assets/scss/custom_scss/auth.scss";
import ExcelJs from "exceljs";
import axios from "axios";



const Reports = () => {
  const [rightColumn, setRightColumn] = useState(true);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  // const downloadAudit = (e) => {
  //   e.preventDefault()
  //   window.history.pushState({}, undefined, "/auditLog");
  //   fetch("http://127.0.0.1:8023/Users/ananth/Documents/data.xlsx").then((response) => {
  //     response.blob().then((blob) => {
  //       let url = window.URL.createObjectURL(blob);
  //       let a = document.createElement("a");
  //       a.href = url;
  //       a.download = "data.csv";
  //       a.click();
  //     });
  //   });
  // };
 const reportColumns = [
    { header: "Month", key: "month"},
    { header: "Company", key: "company"},
    { header: "Department", key: "department" },
    { header: "Number employees", key: "numberEmployees" },
    { header: "Overtime (hrs)", key: "overtime(hrs)" },
    { header: "Overtime Costs", key: "overtimeCosts"},
    {
      header: "Avg. costs per hour",
      key: "avg.OTCostsPerHour",
    },
    { header: "Avg. Overtime days per employee", key: "avg.OvertimeDaysPerEmployee",},
    { header: "Avg. Overtime costs per employee(ANG)", key: "avg.OvertimeCostsPerEmployee(ANG)"},
    { header: "Overtime Days", key: "overtimeDays"},
    { header: "Leave Days", key: "leaveDays"},
    { header: "Leave Costs", key: "leaveCosts"},
    { header: "Avg. Leave days per employee", key: "avg.LeaveDaysPerEmployee" },
    { header: "Avg. Leave costs per employee ", key: "avg.LeaveCostsPerEmployee" },
    { header: "SicknessDays", key: "sicknessDays"},
    { header: "Sicknesscosts", key: "sicknessCosts"},
    { header: "Avg. Sickness days per employee", key: "avg.SicknessDaysPerEmployee"},
    { header: "Avg. costs days per employee", key: "avg.SicknessCostsPerEmployee"},
    { header: "Total Absence Days", key: "totalAbsenceDays"},
  ];
  const generateExcel = async (e) => {
    e.preventDefault();
    const workbook = new ExcelJs.Workbook();
    const workSheet = workbook.addWorksheet("sheet1");
    workSheet.columns = reportColumns;

    try {
        const result = await axios.get(
          "http://127.0.0.1:8023/companiesAndDepartments"
        );

        if ("data" in result) {
          if (result.data.length > 0) {
            workSheet.addRows(result.data);
          }
      }

      const buffer = await workbook.xlsx.writeBuffer();

      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `data.xlsx`;
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <PageHeader headerName="Reports" />

      <div className="auth-wrapper">
        <div className="auth-container">
          <div className="signin-wrapper">
            <Row className="mt-2">
              <Col>
                <div className="text-center">
                  <div className="title">Report</div>
                </div>

                <form>
                  <div className="mb-3">
                    <div className="col-sm-auto">
                      <div className="input-group">
                        <Flatpickr
                          className="form-control border-0 dash-filter-picker shadow"
                          options={{
                            mode: "range",
                            dateFormat: "d M, Y",
                            defaultDate: ["01 Oct 2023", "31 Oct 2023"],
                          }}
                        />
                        <div className="input-group-text bg-primary border-primary text-white">
                          <i className="ri-calendar-2-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex p-3 w-100 align-items-center justify-content-center">
                      <CommonButton
                        className="primary-btn"
                        onClick={generateExcel}
                      >
                        Download
                      </CommonButton>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reports;
