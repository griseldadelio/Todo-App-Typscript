import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../../../components";
import { TableUsers } from "./components";
import { Table, Container } from 'react-bootstrap';
import { user } from '../../../../utils';
import { UsersType } from '../types'


const User: FC = () => {
    const [t] = useTranslation("global");
    const [users, setUsers] = useState<UsersType[]>();

    const getUser = () => {
        user.get().then(response => {
            setUsers(response);
        })
    }
    useEffect(() => {
        getUser()
    }, []);

    const deleteUser = (id: string) => {
        user.deleteUser(id)
            .then(() => getUser())

    }
    return (
        <Layout>
            <Main showButton={true} title={t("main.titleUser")} txt={t("main.btnuser")} link={('/users/add')} className={"bg-light main"} >
                <Container>
                    <Table className='striped bordered hover p-5'>
                        <thead className="text-center">
                            <tr>
                                <th>{t("form.name")}</th>
                                <th>{t("form.lastName")}</th>
                                <th>{t("form.email")}</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {users && users.map((user: UsersType) => (
                            <TableUsers key={user.id} data={user} handleClickDelete={deleteUser} />
                        ))}
                    </Table>
                </Container>
            </Main>
        </Layout>
    );
};

export { User };