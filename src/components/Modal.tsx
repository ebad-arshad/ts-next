import React, { FC, useEffect, useRef } from 'react'
import { Modal as Todo_Modal, Input, } from '@mantine/core';
import { Button } from '@mantine/core';

interface Props {
    modal: boolean;
    close: () => void;
    set_input_data: React.Dispatch<React.SetStateAction<string>>;
    set_todos: React.Dispatch<React.SetStateAction<string[]>>;
}

const Modal: FC<Props> = ({ modal, close, set_input_data, set_todos }) => {

    const input_ref = useRef<HTMLInputElement | null>(null)

    const save_todo: () => void = () => {
        if (input_ref.current?.value) {
            set_input_data(input_ref.current?.value)
            close()
        }
    }


    const delete_all: () => void = () => {
        set_todos([])
        close()
    }

    return (
        <>
            <Todo_Modal opened={modal} onClose={close} title="Add Todo" centered styles={{ header: { backgroundColor: '#080321' }, body: { backgroundColor: '#080321' }, content: { color: 'white' }, overlay: { backgroundColor: 'rgba(255,255,255,0.2)' } }}>
                <Input data-autofocus placeholder="Add Todo" size='md' ref={input_ref} />
                <Button.Group className='flex gap-3'>
                    <Button uppercase
                        onClick={save_todo}
                        className='mt-4'
                        fullWidth
                        styles={{ root: { backgroundColor: '#3e7dff !important', } }}
                    >
                        Add Todo
                    </Button>
                    <Button uppercase
                        onClick={delete_all}
                        className='mt-4'
                        fullWidth
                        styles={{ root: { backgroundColor: '#3e7dff !important', } }}
                    >
                        Delete All
                    </Button>
                </Button.Group>
            </Todo_Modal >
        </>
    )
}

export default Modal