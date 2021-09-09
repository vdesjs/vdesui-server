
const HOST = "http://127.0.0.1:7001"

export const urls = {
  auth: {
    code2Session: HOST + '/auth/code2Session',
    getAccessToken: HOST + '/auth/getAccessToken',
    getPhoneInfo: HOST + '/auth/getPhoneInfo',
  }
}