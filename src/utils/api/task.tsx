import { api } from './api';
import { objectToArray } from '../../helpers';

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/tareas.json'
    });
    return objectToArray(data.data);
}

const post = async (task) => {
    const data = await api({
        method: 'post',
        url: '/tareas.json',
        data: task
    });
    console.log('estoy aca' + data)
}

const getId = async (id) => {
    const data = await api({
        method: 'get',
        url: '/tareas/' + id + '.json'
    });
    return data.data;
}

const patch = async (id, task) => {
    await api({
        method: 'PATCH',
        url: '/tareas/' + id + '.json',
        data: task
    })
}


export const task = { post, get, patch, getId };