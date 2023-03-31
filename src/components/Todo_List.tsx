import { FC, useState } from 'react'
import { Radio } from '@mantine/core';

interface Props {
    todo: string;
}
const Todo_List: FC<Props> = ({ todo }) => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <li className='flex items-center justify-between py-4 font-medium cursor-pointer select-none'
            onClick={() => setChecked(!checked)}>
            <span className={`${checked && 'line-through text-gray'}`}>{todo}</span>
            <Radio checked={checked} readOnly />
        </li>
    )
}

export default Todo_List