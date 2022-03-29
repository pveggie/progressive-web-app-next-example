import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  appTitle: 'test title',
  status: 'idle',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    title: (state, action) => {
      state.appTitle = action.payload ?? state.defaultTitle
    },
  },
})

export const { title } = appSlice.actions

export default appSlice.reducer
