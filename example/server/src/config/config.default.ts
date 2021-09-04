import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { WxminiConfig } from './types/WxminiConfig';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630659789106_3292';

  // add your config here
  config.middleware = [];

  const wxminiConfig: WxminiConfig = {
    appId: 'wx8f87071483e8da1c',
    appSecret: '557a3594da7c7359331c45a884fd5cf2'
  }
  config.wxminiConfig = wxminiConfig

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  // config.security = {
  //   csrf: false,
  // };

  return config;
};
