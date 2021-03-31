export type TaskType = {
    id: string
    title: string
    date: string
    assigned: string
    description: string
    status: string
}

export type UserType = {
    id: string
    name: string
    lastName: string
    email: string
    password: string
}

export type A = Omit<TaskType, 'date' | 'assigned'>
export type B = Pick<TaskType, 'id' | 'title'>
export type C = Partial<TaskType>
export type D = 'verde' | 'rojo' | 'amarillo' | 'azul'
export type E = Omit<TaskType, 'status'> & { color: E }
