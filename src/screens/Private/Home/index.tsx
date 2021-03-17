import React from 'react';
import { Main } from "../../../components";
import { Pentagon, Triangle, Star, Octagon, App, Cloud, ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import './home.css';


export const Home = () => {
    return (
        <Main className='mainSize bg'>
            <Container>
                <Row>
                    <div className="col-md-6">
                        <div className="home-wrapper">
                            <h2>
                                ¡Bienvenido! mi nombre es Griselda De Lio
                            </h2>
                            <p className="text-muted mt-3 mb-5">
                                En esta página encontrarás una aplicación de ABM de usuarios y tareas.
                                <br />
                                Las tareas las podes acomodar como mas te guste, por fecha o por estado,
                                <br />
                                con el uso del drag and drop.
                            </p>
                            <Link to='/tasks' className="btn btn-primary">Go  &nbsp; <ArrowRight /></Link>
                        </div>
                    </div>
                </Row>
            </Container>
            <div className="animation-effect-1">
                <Pentagon className='effect-icon text-prymary' />
            </div>
            <div className="animation-effect-2">
                <Triangle className="effect-icon text-danger" />
            </div>
            <div className="animation-effect-3">
                <Star className="effect-icon text-warning" />
            </div>
            <div class="animation-effect-4">
                <Octagon className="effect-icon text-success" />
            </div>
            <div class="animation-effect-5">
                <App className=" effect-icon text-info" />
            </div>
            <div className="animation-effect-6">
                <Pentagon className=" effect-icon text-primary" />
            </div>
            <div className="animation-effect-7">
                <Cloud className="effect-icon text-danger" />
            </div>
        </Main>
    )
}
