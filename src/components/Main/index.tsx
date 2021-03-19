import React, { FC } from "react";
import { Header } from "./components";
import "./styles.css";

interface Props {
    showButton?: boolean
    title?: string
    txt?: string
    link?: string
    className?: string
}

const Main: FC<Props> = ({ children, showButton = false, title, txt, link, className }) => {
    return (
        <>
            <main className={className}>
                <Header showButton={showButton} title={title} txt={txt} link={link} />
                {children}
            </main>
        </>
    );
};

export { Main };