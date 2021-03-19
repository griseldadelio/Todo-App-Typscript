import React, { FC } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

type Props = {
    name: string
    lastName: string
    email: string
    password: string
}
const TableUsers: FC<Props> = ({ name, lastName, email, password }) => {

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td className="text-center"><PencilFill /></td>
                <td className="text-center"><TrashFill /></td>
            </tr>
        </tbody>
    )
}
export { TableUsers }
