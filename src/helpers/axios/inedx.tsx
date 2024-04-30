import axios from 'axios'
import { BASE_URL, CONFIG_API } from 'src/configs/api'
import { clearLocalUserData, getLocalUserData } from '../storage'
import { jwtDecode } from 'jwt-decode'
import { NextRouter, useRouter } from 'next/router'
import { FC } from 'react'
import { UserDataType } from 'src/contexts/types'
import { useAuth } from 'src/hooks/useAuth'

type TAxiosInterceptor = {
  children: React.ReactNode
}

const instanceAxios = axios.create({ baseURL: BASE_URL })

const handleRedirectLogin = (router: NextRouter, setUser: (data: UserDataType | null) => void) => {
  if (router.asPath !== '/') {
    router.replace({
      pathname: '/login',
      query: { returnUrl: router.asPath }
    })
  } else {
    router.replace('/login')
  }
  setUser(null)
  clearLocalUserData()
}

const AxiosInterceptor: FC<TAxiosInterceptor> = ({ children }) => {
  const router = useRouter()
  const { accessToken, refreshToken } = getLocalUserData()
  const { setUser } = useAuth()
  // trong lúc gửi request lên server nó sẽ đi qua thằng intercepter thì config sẽ chứa header
  instanceAxios.interceptors.request.use(async config => {
    console.log('CONFIG', config)
    if (accessToken) {
      const decodedAccessToken: any = jwtDecode(accessToken)

      if (decodedAccessToken.exp < Date.now() / 1000) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
      } else {
        if (refreshToken) {
          const decodedRefeshToken: any = jwtDecode(refreshToken)

          if (decodedRefeshToken?.exp > Date.now() / 1000) {
            //call api và trả về accesstoken
            await axios.post(`${CONFIG_API.AUTH.INDEX}/refresh-token`,{} , {
              headers: {
                Authorization: `Bearer ${refreshToken}`
              }
            }).then(res => {
              const newAccessToken = res?.data?.data?.access_token;
              if(newAccessToken){
                config.headers['Authorization'] = `Bearer ${newAccessToken}`
              }else{
                handleRedirectLogin(router, setUser)
              }
              console.log("resres: ", {res});
              
            }).catch(e => {
              handleRedirectLogin(router, setUser)
            })
          }else{
            handleRedirectLogin(router, setUser)
          }
        } else {
          //call api
          handleRedirectLogin(router, setUser)
        }
      }
    }else{
      handleRedirectLogin(router, setUser)
    }

    return config
  })
  //lúc server trả về data cho mình sẽ đi qua interceptor này
  instanceAxios.interceptors.response.use(response => {
    console.log('RES', response)

    return response
  })

  return <>{children}</>
}

export default instanceAxios
export { AxiosInterceptor }
