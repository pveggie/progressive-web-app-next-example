import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import oktaReducer from './slices/oktaSlice'
import userReducer from './slices/userSlice'

import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    app: appReducer,
    okta: oktaReducer,
    user: userReducer,
  },
  middleware: [thunk],
})

export default store
