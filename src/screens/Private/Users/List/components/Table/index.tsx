import { FC } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { UsersType } from '../../../types'
import { Link } from 'react-router-dom'

type Props = {
    data: UsersType
    handleClickDelete: (id: string) => void,
}

const TableUsers: FC<Props> = ({ data, handleClickDelete }) => {
    const { name, lastName, email, id } = data
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td className="text-center">
                    <Link to={`/users/edit/${id}`} className="mx-2">
                        <PencilFill />
                    </Link>
                </td>
                <td className="text-center">
                    <TrashFill onClick={() => handleClickDelete(id)} />
                </td>
            </tr>
        </tbody>
    )
}
export { TableUsers }
