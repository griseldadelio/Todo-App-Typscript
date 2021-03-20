import React, { FC } from "react";
import { Header, Footer, Aside } from "./components";
import "./layout.css";

interface Props {
    hideHeader?: boolean
    hideAside?: boolean
    hideFooter?: boolean
}

const Layout: FC<Props> = ({ children, hideHeader = false, hideAside = false, hideFooter = false }) => {


    return (
        <div className="layout">
            {!hideAside && <Aside />}

            <div className="contenedor">
                {!hideHeader && <Header />}
                {children}
                {!hideFooter && <Footer />}
            </div>
        </div>
    );
};

export { Layout };