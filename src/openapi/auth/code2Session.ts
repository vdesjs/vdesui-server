import { getEnv } from '../common/env';
import server from '../common/server';

const url = '/sns/jscode2session';

interface ReqObj {
  appid: string;
  secret: string;
  js_code: string;
}

interface RespObj {
  openid?: string;
  session_key?: string;
  unionid?: string;
}

export function code2Session(obj: ReqObj): Promise<RespObj> {
  if (getEnv() == 'real') {
    return server.request({
      method: 'get',
      url,
      params: {
        appid: obj.appid,
        secret: obj.secret,
        js_code: obj.js_code,
        grant_type: 'authorization_code'
      }
    });
  }

  if (getEnv() == 'simulate') {
    const data: RespObj = {
      openid: '5oN4qUVMgsT0DUQs7/ZJgw==',
      session_key: 'ocwuPv2MVYiLuYZeSfDCU2EGn8-w',
      unionid: '111'
    };
    return Promise.resolve(data);
  }
}

// {"session_key":"5oN4qUVMgsT0DUQs7/ZJgw==","openid":"ocwuPv2MVYiLuYZeSfDCU2EGn8-w"}