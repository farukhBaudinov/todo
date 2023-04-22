import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeTags: []
}

const TagsSlice = createSlice({
    name: 'tasks', 
    initialState,
    reducers: {
        setActiveTag: (state, { payload }) => {
            state.activeTags.push(payload)
        },
        removeActiveTag: (state, { payload }) => {
            const filtered = state.activeTags.filter(tag => tag !== payload)
            state.activeTags = filtered
        }
    }
})

export const { setActiveTag, removeActiveTag } = TagsSlice.actions
export default TagsSlice.reducer