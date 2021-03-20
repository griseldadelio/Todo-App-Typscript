import React, { FC, FormEvent, useState, useEffect, DragEvent } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../../../components";
import { CardTask } from "./components";
import './task.css'
import { task } from '../../../../utils';


const List: FC = () => {
    const [t] = useTranslation("global");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(task.get());
    }, []);

    // const allowDrop = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    // }

    // const drop = (e: DragEvent<HTMLDivElement>) => {
    //     e.preventDefault();
    //     let data = e.dataTransfer.getData("text");

    //     target.appendChild(document.getElementById(data));
    // }

    // const drag = (e) => {
    //     e.dataTransfer.setData("text", e.target.id);
    // }

    return (
        <Layout>
            <Main showButton={true} title={t("main.titleTask")} txt={t("main.btntask")} link={('/tasks/add')} className={"main"} >
                <div className="row row-cols-1 row-cols-md-3">
                    {/* <div id="div1" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
                    <div id="div2" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
                    <div id="div3" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} /> */}
                    {tasks.map(({ title, date, assigned, description, status, id }) => {
                        return (
                            //<div id={`drag${id}`} draggable="true" onDragStart={e => drag(e)} className='mb-2'>
                            <CardTask className="m-3" style={{ width: "18rem", border: "1px solid" }}
                                title={title}
                                description={description}
                                assigned={assigned}
                                date={date}
                                status={status}
                                id={id}
                            />
                            // </div>
                        );
                    })}
                </div>
            </Main>
        </Layout >
    );
};

export { List };