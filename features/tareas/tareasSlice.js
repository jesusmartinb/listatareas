import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [
        {
            title: 'Tarea 1',
            description: 'Descripcion de la tarea 1',
        },
        {
            title: 'Tarea 2',
            description: 'Descripcion de la tarea 2',
        },
        {
            title: 'Tarea 3',
            description: 'Descripcion de la tarea 3',
        },
    ],
}

const tareasSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        create: (state, action) => {
            state.value = [
                ...state.value,
                {
                    title: action.payload.title,
                    description: action.payload.description,
                    done: false
                }
            ];
            
        },
        toggleComplete: (state, action) => {
            state.value[action.payload].done = !state.value[action.payload].done
        },
        deleteTask: (state, action) => {
            state.value.splice(action.payload, 1)
        },
    }
});

export const { create, toggleComplete, deleteTask } = tareasSlice.actions

export default tareasSlice.reducer