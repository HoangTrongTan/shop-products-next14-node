// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// ** Axios Imports
import { changePasswordMeAsync, registerAuthAsync, updateAuthMeAsync } from './actions'

// interface DataParams {
//   q: string
//   role: string
//   status: string
//   currentPlan: string
// }

// interface Redux {
//   getState: any
//   dispatch: Dispatch<any>
// }

const initialState = {
  isLoading: false,
  isSuccess: true,
  isError: false,
  message: '',
  typeError: '',
  isSuccessUpdateMe: true,
  isErrorUpdateMe: false,
  messageUpdateMe: '',
  isErrorChangePassword: true,
  isSuccessChangePassword: false,
  messageChangePassword: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetInitialState: state => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.message = ''
      state.typeError = ''
      state.isErrorUpdateMe = true
      state.isSuccessUpdateMe = false
      state.messageUpdateMe = ''
      state.isErrorChangePassword = true
      state.isSuccessChangePassword = false
      state.messageChangePassword = ''
    }
  },
  extraReducers: builder => {
    //**register */
    builder.addCase(registerAuthAsync.pending, state => {
      state.isLoading = true
    }),
      builder.addCase(registerAuthAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = !!action?.payload?.data?.email
        state.isError = !action?.payload?.data?.email
        state.message = action?.payload?.message
        state.typeError = action?.payload?.typeError
      }),
      builder.addCase(registerAuthAsync.rejected, state => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = ''
        state.typeError = ''
      })
    //**register */
    builder.addCase(updateAuthMeAsync.pending, state => {
      state.isLoading = true
    }),
      builder.addCase(updateAuthMeAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccessUpdateMe = !!action?.payload?.data?.email
        state.isErrorUpdateMe = !action?.payload?.data?.email
        state.messageUpdateMe = action?.payload?.message
        state.typeError = action?.payload?.typeError
      }),
      builder.addCase(updateAuthMeAsync.rejected, state => {
        state.isLoading = false

        state.isSuccessUpdateMe = false
        state.isErrorUpdateMe = false
        state.messageUpdateMe = ''
        state.typeError = ''
      })
    //**change password me */
    builder.addCase(changePasswordMeAsync.pending, state => {
      state.isLoading = true
    }),
      builder.addCase(changePasswordMeAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccessChangePassword = !!action?.payload?.data
        state.isErrorChangePassword = !action?.payload?.data
        state.messageChangePassword = action?.payload?.message
        state.typeError = action?.payload?.typeError
      }),
      builder.addCase(changePasswordMeAsync.rejected, state => {
        state.isLoading = false

        state.isSuccessChangePassword = false
        state.isErrorChangePassword = false
        state.messageChangePassword = ''
        state.typeError = ''
      })
  }
})

export const { resetInitialState } = authSlice.actions
export default authSlice.reducer
