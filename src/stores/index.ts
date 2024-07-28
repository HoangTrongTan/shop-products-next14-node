// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import user from 'src/stores/user'
import auth from 'src/stores/auth'
import product from 'src/stores/product'
import role from 'src/stores/role'
import city from 'src/stores/city'
import deliveryType from 'src/stores/delivery-type'
import paymentType from 'src/stores/payment-type'
import productType from 'src/stores/product-type'
import orderProduct from 'src/stores/order-product'
import reviews from 'src/stores/reviews'


export const store = configureStore({
  reducer: {
    user,
    auth,
    product,
    role,
    city,
    deliveryType,
    paymentType,
    productType,
    orderProduct,
    reviews
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
