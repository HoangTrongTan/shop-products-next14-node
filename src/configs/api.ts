export const BASE_URL = process.env.NEXT_PUBLIC_API_HOST
export const API_ENDPOINT = {
  AUTH: {
    INDEX: `${BASE_URL}/auth`,
    AUTH_ME: `${BASE_URL}/auth/me`
  }
}
