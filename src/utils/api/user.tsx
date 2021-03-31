import { api } from './api';
import { objectToArray } from '../../helpers';

type AddUserPayLoad = { name: string, lastName: string, email: string, password: string }

const post = async (user: AddUserPayLoad) => {
    await api({
        method: 'post',
        url: '/users.json',
        data: user
    });

}

const getId = async (id: string) => {
    const data = await api({
        method: 'get',
        url: '/users/' + id + '.json'
    });
    return data.data;
}

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/users.json'
    });
    return objectToArray(data.data);
}

type UpdateUserPayLoad = AddUserPayLoad

const patch = async (id: string, user: UpdateUserPayLoad) => {
    await api({
        method: 'PATCH',
        url: '/users/' + id + '.json',
        data: user
    })
}

const deleteUser = async (id: string) => {
    await api({
        method: 'DELETE',
        url: '/users/' + id + '.json'
    })
}

export const user = { post, get, patch, getId, deleteUser };