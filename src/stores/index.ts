// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import user from 'src/stores/user'
import auth from 'src/stores/auth'
import product from 'src/stores/product'
import role from 'src/stores/role'
import city from 'src/stores/city'


export const store = configureStore({
  reducer: {
    user,
    auth,
    product,
    role,
    city,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
