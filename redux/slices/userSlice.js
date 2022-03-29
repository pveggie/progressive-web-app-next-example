import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isFetching: false,
  rightbar: false,
  rightbarFilter: null,
  photoRefresh: null,
  canEditBankData: true,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload = {} } = action
      const { user = null } = payload

      state.user = user
    },
    toggleRightbar: (state, action) => {
      const { payload: force } = action
      state.rightbar = force !== null ? force : !state.rightbar
    },
    rightbarFilter: (state, action) => {
      const { payload: filter } = action
      state.rightbarFilter = filter
    },
    refreshPhoto: (state) => {
      const time = new Date().getTime()
      state.photoRefresh = time
    },
  },
})

export const {
  rightbarFilter,
  setUser,
  toggleRightbar,
  refreshPhoto,
} = userSlice.actions

export default userSlice.reducer
