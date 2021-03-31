import { api } from './api';
import { objectToArray } from '../../helpers';
import { TaskType } from '../../types'

type AddTaskPayLoad = Omit<TaskType, 'id'>;


const post = async (task: AddTaskPayLoad) => {
    await api({
        method: 'post',
        url: '/tareas.json',
        data: task
    });
}

const getId = async (id: string) => {
    const data = await api({
        method: 'get',
        url: '/tareas/' + id + '.json'
    });
    return data.data;
}

// type Tasks = {
//     [id: string]: TaskType[];
// }

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/tareas.json'
    });
    const response = objectToArray(data.data);
    return response;
}

type UpdateTaskPayLoad = Omit<TaskType, 'status' | 'id'> | Pick<TaskType, 'status'>
//omit saco los datos que no necesito y el pick me deja solo el dato que deseo

const patch = async (id: string, task: UpdateTaskPayLoad) => {
    await api({
        method: 'PATCH',
        url: '/tareas/' + id + '.json',
        data: task
    })
}

export const task = { post, get, patch, getId };