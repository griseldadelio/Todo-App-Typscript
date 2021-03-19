import React, { FC, useState, useEffect } from "react";
import { user } from "../../../../utils";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../../../components";
import { Form, Button } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';



const AddUsersForm: FC = ({ match }) => {
    const [name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    const id = match.params.id;

    const createUser = async () => {
        await user.post({ name, lastName, email, password });
        setName('');
        setlastName('');
        setEmail('');
        setPassword('');
    }

    const updateUser = async () => {
        await user.patch(id, { name, lastName, email, password })
        history.push('/users/');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (id) {
            await updateUser();
        } else {
            await createUser();
        }
    }

    useEffect(async () => {
        if (id) {
            await user.getId(id)
                .then(response => {
                    setName(response.name);
                    setlastName(response.lastname);
                    setEmail(response.email);
                    setPassword(response.password)
                })
        }
    }, [])
    const [t] = useTranslation("global");

    return (
        <Layout>
            <Main title={t("form.titleFormUser")} className={"bg-light main"}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="col-6">
                        <Form.Label className="mb-2">{t("form.name")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.lastName")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" name="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.email")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.password")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type={showPassword ? "text" : "password"} name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="mt-3">
                            <Link to={'/users/'} type="button" className="btn btn-light border border-secondary mx-1">{t("form.cancel")}</Link>
                            <Button type="submit" className="btn btn-primary mx-1">{t("form.add")}</Button>
                            <Button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-info">Ver Password</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Main>
        </Layout>
    )
}

export { AddUsersForm }