import { getEnv } from '../common/env';
import server from '../common/server';

interface RequObj {
  access_token?: string;
  openid?: string;
  transaction_id?: string;
  mch_id?: string;
  out_trade_no?: string;
}

interface RespObj {
  unionid?: string;
}

export function getPaidUnionId(obj: RequObj): Promise<RespObj> {
  if (getEnv() == 'real') {
    return server.request({
      params: {
        access_token: obj.access_token,
        openid: obj.openid,
        transaction_id: obj.transaction_id,
        mch_id: obj.mch_id,
        out_trade_no: obj.out_trade_no
      }
    });
  }

  if (getEnv() == 'simulate') {
    const data: RespObj = {
      unionid: '111'
    };

    return Promise.resolve(data);
  }
}
