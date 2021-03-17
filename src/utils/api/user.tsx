import { api } from './api';
import { objectToArray } from '../../helpers';

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/users.json'
    });
    return objectToArray(data.data);
}

const post = async (user) => {
    await api({
        method: 'post',
        url: '/users.json',
        data: user
    });

}

const getId = async (id) => {
    const data = await api({
        method: 'get',
        url: '/users/' + id + '.json'
    });
    return data.data;
}

const patch = async (id, user) => {
    await api({
        method: 'PATCH',
        url: '/users/' + id + '.json',
        data: user
    })
}

const deleteUser = async (id) => {
    await api({
        method: 'DELETE',
        url: '/users/' + id + '.json'
    })
}

export const user = { post, get, patch, getId, deleteUser };