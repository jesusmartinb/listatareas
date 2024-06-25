import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [{
    title: 'Tarea de Ejemplo',
    description: 'Descripción de la tarea de ejemplo',
    done: false
}] };


export const tareasSlice = createSlice({
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
export const selectTasks = state => state.tasksState.value;