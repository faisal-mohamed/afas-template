import React from 'react';
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import { projectsWidgets } from "../../../app/components/common/data";
//Import Icons
import FeatherIcon from "feather-icons-react";
import { Card, CardBody, Col, Row } from 'reactstrap';

const Widgets = ({feaIconClass,feaIcon,label,suffix,separator,counter,badgeClass,icon,percentage,caption}) => {
    return (
        <React.Fragment>
                    <Col xl={4} >
                        <Card className="card-animate">
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className={`avatar-title ${feaIconClass} rounded-2 fs-2`}>
                                            <FeatherIcon icon={feaIcon} />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden ms-3">
                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-3">{label}</p>
                                        <div className="d-flex align-items-center mb-3">
                                            <h4 className="fs-4 flex-grow-1 mb-0">
                                                {/* {item.subCounter.map((item,key)=>( */}
                                                    <span className="counter-value me-1" data-target="825" >
                                                    <CountUp
                                                        start={0}
                                                        suffix={suffix}
                                                        separator={separator}
                                                        end={counter}
                                                        duration={4}
                                                    />
                                                </span>
                                                {/* ))} */}
                                            </h4>
                                            <span className={"fs-12 badge badge-soft-" + badgeClass}><i className={"fs-13 align-middle me-1 " + icon}></i>{percentage}</span>
                                        </div>
                                        <p className="text-muted text-truncate mb-0">{caption}</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
        </React.Fragment>
    );
};

export default Widgets;