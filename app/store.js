import { configureStore } from '@reduxjs/toolkit'
import tareasSlice from '../features/tareas/tareasSlice'

export const store = configureStore({
    reducer: {
        tasks: tareasSlice,
    },
})