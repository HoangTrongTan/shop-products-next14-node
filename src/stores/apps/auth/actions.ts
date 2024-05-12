import { createAsyncThunk } from '@reduxjs/toolkit'
import { registerAuth } from 'src/services/auth'

export const registerAuthAsync = createAsyncThunk('auth/register', async (data: any) => {
  const response = await registerAuth(data)
  // console.log(">>>RESPONSE registerAuthAsync",response)
  if (response?.data) {

    return response
  }
  return {
    data: null,
    message: response?.response?.data?.message,
    typeError: response?.response?.data?.typeError
  }
})
