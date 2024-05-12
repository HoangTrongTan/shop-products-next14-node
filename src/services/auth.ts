import axios from 'axios'
import { CONFIG_API } from 'src/configs/api'
import instanceAxios from 'src/helpers/axios/inedx'
import { TLoginAuth, TRegisterAuth } from 'src/types/auth'

export const loginAuth = async (data: TLoginAuth) => {
  try {
    const res = await instanceAxios.post(`${CONFIG_API.AUTH.INDEX}/login`, data)

    return res.data
  } catch (e) {
    console.log('ERROR loginAuth: ', e)
  }
}
export const loginOut = async () => {
  try {
    const res = await instanceAxios.post(CONFIG_API.AUTH.INDEX)

    return res.data
  } catch (e) {
    console.log('ERROR loginAuth: ', e)
  }
}

export const registerAuth = async (data: TRegisterAuth) => {
  try {
    const res = await axios.post(`${CONFIG_API.AUTH.INDEX}/register`, data)

    return res.data
  } catch (e) {
    console.log('ERROR loginAuth: ', e)
    return e;
  }
}