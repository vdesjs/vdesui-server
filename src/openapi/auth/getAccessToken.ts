import { getEnv } from '../common/env';
import server from '../common/server';

interface ReqObj {
  appid?: string;
  secret?: string;
}

interface RespObj {
  access_token?: string;
  expires_in?: number;
}

const url = '/cgi-bin/token';

export function getAccessToken(obj: ReqObj): Promise<RespObj> {
  if (getEnv() == 'real') {
    return server.request({
      method: 'get',
      url,
      params: {
        grant_type: 'client_credential',
        appid: obj.appid,
        secret: obj.secret
      }
    });
  }

  if (getEnv() == 'simulate') {
    const data: RespObj = {
      access_token:
        '48_70HA2qsrYMmWUhhZCeoT6o_GoGhBbc14gdAohTUa2rqTw29c-aKnRELXH6EpMqwliIlUDkZzMhpuvD_zTFraIxCLLi2ulIiueRaizvu4OHxdOuNREcsOSkSUxvVULhTsSPsox_8A7yIp45lPYMDdAHABPG',
      expires_in: 7200
    };
    return Promise.resolve(data);
  }
}

// {"access_token":"48_70HA2qsrYMmWUhhZCeoT6o_GoGhBbc14gdAohTUa2rqTw29c-aKnRELXH6EpMqwliIlUDkZzMhpuvD_zTFraIxCLLi2ulIiueRaizvu4OHxdOuNREcsOSkSUxvVULhTsSPsox_8A7yIp45lPYMDdAHABPG","expires_in":7200}
