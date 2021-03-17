import React from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

const TableUsers = ({ name, lastName, email, password }) => {

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
