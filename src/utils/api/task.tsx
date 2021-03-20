import { api } from './api';
import { objectToArray } from '../../helpers';

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/tareas.json'
    });
    return objectToArray(data.data);
}

type AddTaskPayLoad = {
    title: string
    date: string
    assigned: string
    description: string
}
type UpdateTaskPayLoad = AddTaskPayLoad & { id: string }

const post = async (task: AddTaskPayLoad) => {
    const data = await api({
        method: 'post',
        url: '/tareas.json',
        data: task
    });
    console.log('estoy aca' + data)
}

const getId = async (id: string) => {
    const data = await api({
        method: 'get',
        url: '/tareas/' + id + '.json'
    });
    return data.data;
}

const patch = async (task: UpdateTaskPayLoad) => {
    await api({
        method: 'PATCH',
        url: '/tareas/' + task.id + '.json',
        data: task
    })
}


export const task = { post, get, patch, getId };