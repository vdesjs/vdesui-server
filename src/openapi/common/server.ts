import axios from 'axios';
import { HOST } from './constant';

class WxminiError extends Error {
  errCode: number;
  constructor(errCode: number, message: string) {
    super(`${errCode}: ${message} \n`);
    this.name = 'WxminiError';
    this.errCode = errCode;
  }
}

const server = axios.create({
  baseURL: HOST,
  timeout: 3000
});

const white_url = ['/sns/jscode2session'];

server.interceptors.request.use(
  function (config) {
    if (white_url.indexOf(config.url) != -1) {
      // 白名单内不需要处理
      return config;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  function (response) {
    if (response.data.errcode != null && response.data.errcode != 0) {
      console.log("response", response)
      return Promise.reject(
        new WxminiError(response.data.errcode, response.data.errmsg)
      );
    }

    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default server;
