import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../../../components";
import { TableUsers } from "./components";
import { Table, Container } from 'react-bootstrap';
import { user } from '../../../../utils';


const User = () => {
    const [t] = useTranslation("global");
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        setUsers(await user.get());
    }, []);

    return (
        <Layout>
            <Main showButton={true} title={t("main.titleUser")} txt={t("main.btnuser")} link={('/users/add')} className={"bg-light main"} >
                <Container>
                    <Table striped bordered hover p-5>
                        <thead className="text-center">
                            <tr>
                                <th>{t("form.name")}</th>
                                <th>{t("form.lastName")}</th>
                                <th>{t("form.email")}</th>
                                <th>{t("form.password")}</th>
                            </tr>
                        </thead>
                        {users.map(({ name, lastName, email, password }) => {
                            return (
                                <TableUsers name={name} lastName={lastName} email={email} password={password} />
                            );
                        })}
                    </Table>
                </Container>
            </Main>
        </Layout>
    );
};

export { User };