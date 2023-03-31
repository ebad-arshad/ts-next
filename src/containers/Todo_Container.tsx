import Modal from '@/components/Modal'
import Todo_List from '@/components/Todo_List'
import React, { FC, useEffect, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { useDisclosure } from '@mantine/hooks';


const Todo_Container: FC = () => {

    const [opened, { open, close }] = useDisclosure(false);
    const [input_data, set_input_data] = useState<string>('')
    const [todos, set_todos] = useState<string[]>([])

    const allMonths: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const weekDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const date: number = new Date().getDate()
    const month: string = allMonths[new Date().getMonth()]
    const weekDay: string = weekDays[new Date().getDay()]
    const year: number = new Date().getFullYear()

    useEffect(() => {
        if (input_data) set_todos(v => [...v, input_data])
    }, [input_data])

    return (
        <>
            <div className='relative bg-box_color text-white w-[100%] h-screen sm:h-auto sm:w-[500px] lg:w-[600px] p-10 font-bold rounded-[4px]'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        <p className='text-[39px] tracking-[-3px]'>{date}</p>
                        <div className='flex flex-col text-[12px]'>
                            <p>{month}</p>
                            <p className='font-light tracking-widest'>{year}</p>
                        </div>
                    </div>
                    <p>
                        {weekDay}
                    </p>
                </div>
                <button onClick={open} className='absolute left-1/2 -translate-x-1/2 bottom-10 sm:-bottom-[28px] text-3xl text-white bg-blue w-14 h-14 rounded-full grid place-items-center'><BiPlus /></button>
                {opened && <Modal modal={opened} close={close} set_input_data={set_input_data} set_todos={set_todos} />}
                <ul>
                    {todos.map((v, i) => <Todo_List key={i} todo={v} />)}
                </ul>
            </div>
        </>
    )
}

export default Todo_Container