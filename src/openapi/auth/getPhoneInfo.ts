import * as crypto from 'crypto';
import { getEnv } from '../common/env';
interface ReqObj {
  encryptedData: string;
  iv: string;
  session_key: string;
  appId: string;
}

interface RespObj {
  phoneNumber?: string;
  purePhoneNumber?: string;
  countryCode?: string;
  watermark?: {
    appid?: string;
    timestamp?: string;
  };
}

export function getPhoneInfo(obj: ReqObj): Promise<RespObj> {
  if (getEnv() == 'real') {
    const sessionKey = Buffer.from(obj.session_key, 'base64');
    const encryptedData = Buffer.from(obj.encryptedData, 'base64');
    const iv = Buffer.from(obj.iv, 'base64');
    let decoded;
    try {
      const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
      decipher.setAutoPadding(true);
      // @ts-ignore
      decoded = decipher.update(encryptedData, 'binary', 'utf-8');
      //@ts-ignore
      decoded += decipher.final('utf8');
      decoded = JSON.parse(decoded);
    } catch (error) {
      throw new Error('getPhoneInfo crypto Error');
    }
    if (decoded.watermark.appid !== obj.appId) {
      throw new Error('getPhoneInfo appid validation Error');
    }
    return Promise.resolve(decoded);
  }

  if (getEnv() == 'simulate') {
    const data: RespObj = {
      phoneNumber: '17307426053',
      purePhoneNumber: '17307426053',
      countryCode: '86',
      watermark: {
        timestamp: '1630744021',
        appid: 'wx8f87071483e8da1c'
      }
    }
    return Promise.resolve(data)    

  }
}

// {"phoneNumber":"17307426053","purePhoneNumber":"17307426053","countryCode":"86","watermark":{"timestamp":1630744021,"appid":"wx8f87071483e8da1c"}}