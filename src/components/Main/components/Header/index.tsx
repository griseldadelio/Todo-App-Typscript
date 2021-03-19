import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Button } from 'react-bootstrap';
import './header.css'

interface Props {
    showButton?: boolean
    title?: string
    txt?: string
    link?: string
}

const Header: FC<Props> = ({ showButton = false, title, txt, link }) => {

    return (
        <Container>
            <Row className="mb-5">
                <Col>
                    <h2> {title} </h2>
                </Col>
                <Col className=" d-flex justify-content-end">
                    {showButton && link &&
                        <Button className="d-none d-sm-inline-block btn-add">
                            <Link className="btn-lnk-header" to={link}>+ {txt}</Link>
                        </Button>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export { Header };