import React, { useState } from "react";
import "./card.css";
import { task } from '../../../../../../utils'
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PencilFill } from "react-bootstrap-icons";

const CardTask = ({ title, description, assigned, date, status, id }) => {
    const [taskStatus, setTaskStatus] = useState(status);
    const handleOnClick = (status) => {
        setTaskStatus(status);
        task.patch(id, { status })
    }
    const getCardColor = () => {
        switch (taskStatus) {
            case "pending":
                return "border-start-pending";
            case "canceled":
                return "border-start-canceled";
            default:
                return "border-start-success";
        }
    };

    return (
        <div className={`card text-dark  ${getCardColor()} ${taskStatus}  shadow-sm`}>
            <div className="card-body">
                <Row>
                    <Col>
                        <Card.Title className="card-header d-flex align-items-center">
                            <h4>{title}</h4>
                            <div className="d-flex ms-auto custom-botton ">
                                <Button className="btn-search shadow-sm" title="Pending" id="pending" onClick={() => handleOnClick("pending")} />
                                <Button className="btn-success shadow-sm" title="Done" id="Done" onClick={() => handleOnClick("success")} />
                                <Button className="btn-danger shadow-sm" title="Cancel" id="cancel" onClick={() => handleOnClick("canceled")} />
                            </div>
                        </Card.Title>
                    </Col>
                    <Row>
                        <Col>
                            <h5 className="card-subtitle">{assigned}</h5>
                            <Card.Text>{description}</Card.Text>
                            <h6>{date}</h6>
                        </Col>
                    </Row>
                </Row>
                <Link to={`/tasks/edit/${id}`} className="mx-2">
                    <PencilFill />
                </Link>
            </div>
        </div>
    );
};

export { CardTask };