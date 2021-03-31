import { FC, FormEvent, useState, useEffect } from "react";
import { useHistory, Link, RouteComponentProps } from 'react-router-dom';
import { task } from "../../../../utils";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../../../components";
import { Form, Button } from 'react-bootstrap';


const Add: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [msj, setMsj] = useState('');
    const history = useHistory();
    const { id } = match.params;
    const [t] = useTranslation("global");

    const createTask = async () => {
        await task.post({ title, date, assigned, description, status: 'pending' });
        alert('Tu tarea se cargo exitosamente');
        history.push('/tasks/')
    }


    const updateTask = () => {
        setIsLoading(true);
        task.patch(id, { title, date, assigned, description })
        setIsLoading(false);
        setMsj("Se Actualizo de forma exitosa");
        history.push('/tasks/');
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id) {
            updateTask();
        } else {
            createTask();
        }
    }

    useEffect(() => {
        if (id) {
            task.getId(id)
                .then(response => {
                    setTitle(response.title);
                    setDate(response.date);
                    setAssigned(response.assigned);
                    setDescription(response.description)
                })
        }
    }, [id])


    return (
        <Layout>
            <Main title={t("form.titleFormTask")} className={"main"}>
                <Form onSubmit={handleSubmit}>
                    {isLoading && "Cargando .........."}
                    {msj}
                    <Form.Group className="col-6">
                        <Form.Label className="mb-2">{t("form.title")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.date")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.assigned")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" value={assigned} onChange={(e) => setAssigned(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.desc")}</Form.Label>
                        <textarea className="form-control form-control-light mb-3" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <div className="mt-3">
                            <Link type="button" className="btn btn-light border border-secondary mx-1" to={'/tasks/'}>{t("form.cancel")}</Link>
                            <Button type="submit" className="btn btn-primary">{t("form.create")}</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Main>
        </Layout>
    );
};

export { Add };