import { configureStore } from '@reduxjs/toolkit'
import TagsSlice from './slices/tags-slice'

const store = configureStore({
    reducer: {
        tags: TagsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store