import React, { FC } from "react";
import { NavBar } from "./components";
import "./header.css";

const Header: FC = () => {
    return (
        <header className="header">
            <NavBar />
        </header>
    );
};

export { Header };