import { api } from './api';
import { objectToArray } from '../../helpers';

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/users.json'
    });
    return objectToArray(data.data);
}

type AddUserPayLoad = {
    name: string
    lastName: string
    email: string
    password: string
}
type UpdateUserPayLoad = AddUserPayLoad & { id: string }

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

const patch = async (user: UpdateUserPayLoad) => {
    await api({
        method: 'PATCH',
        url: '/users/' + user.id + '.json',
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