import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./components";
import { useTranslation } from "react-i18next";
import "./aside.css";

import Accordion from 'react-bootstrap/Accordion';

const Aside = () => {
    const [t] = useTranslation("global");

    return (
        <aside className="aside bg-dark">
            <Logo />
            <Accordion id="accordionMenu">
                <div className="accordion-item">
                    <div className="accordion-header" id="headingUsers">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="false" aria-controls="collapseUsers">
                            <i className="bi bi-person"></i> {t("aside.users")}
                        </button>
                    </div>
                    <Accordion.Collapse id="collapseUsers" aria-labelledby="headingUsers" data-bs-parent="#accordionMenu">
                        <div className="accordion-body">
                            <Link to="/users">{t("aside.list")}</Link>
                            <Link to="/users/add">{t("aside.add")}</Link>
                        </div>
                    </Accordion.Collapse>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header" id="headingTasks">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTasks" aria-expanded="false" aria-controls="collapseTasks">
                            <i className="bi bi-card-list"></i> {t("aside.task")}
                        </button>
                    </div>
                    <Accordion.Collapse id="collapseTasks" aria-labelledby="headingTasks" data-bs-parent="#accordionMenu">
                        <div className="accordion-body">
                            <Link to="/tasks">{t("aside.list")}</Link>
                            <Link to="/tasks/add">{t("aside.add")}</Link>
                        </div>
                    </Accordion.Collapse>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header" id="headingSettings">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
                            <i className="bi bi-sliders"></i> {t("aside.setting")}
                        </button>
                    </div>
                    <Accordion.Collapse id="collapseSettings" aria-labelledby="headingSettings" >
                        <div className="accordion-body">
                            <Link to="/">General</Link>
                            <Link to="/">Multimedia</Link>
                        </div>
                    </Accordion.Collapse>
                </div>
            </Accordion>
        </aside>
    );
};

export { Aside }; 