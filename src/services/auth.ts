import axios from 'axios'
import { API_ENDPOINT } from 'src/configs/api'
import instanceAxios from 'src/helpers/axios'
import { TChangePassword, TLoginAuth, TRegisterAuth } from 'src/types/auth'

export const loginAuth = async (data: TLoginAuth) => {
  const res = await instanceAxios.post(`${API_ENDPOINT.AUTH.INDEX}/login`, data)

  return res.data
}
export const loginOut = async () => {
  try {
    const res = await instanceAxios.post(API_ENDPOINT.AUTH.INDEX)

    return res.data
  } catch (e) {
    console.log('ERROR loginAuth: ', e)
  }
}

export const registerAuth = async (data: TRegisterAuth) => {
  try {
    const res = await axios.post(`${API_ENDPOINT.AUTH.INDEX}/register`, data)

    return res.data
  } catch (e) {
    console.log('ERROR loginAuth: ', e)
    return e
  }
}

export const updateAuthMe = async (data: any) => {
  try {
    const res = await instanceAxios.put(`${API_ENDPOINT.AUTH.AUTH_ME}`, data)

    return res.data
  } catch (e) {
    console.log('updateAuthMe loginAuth: ', e)
    return e
  }
}

export const getAuthMe = async () => {
  try {
    const res = await instanceAxios.get(`${API_ENDPOINT.AUTH.AUTH_ME}`)

    return res.data
  } catch (e) {
    console.log('getAuthMe loginAuth: ', e)
    return e
  }
}

export const changePasswordMe = async (data: TChangePassword) => {
  try {
    const res = await instanceAxios.patch(`${API_ENDPOINT.AUTH.INDEX}/change-password`, data)

    return res.data
  } catch (error) {
    return error
  }
}
