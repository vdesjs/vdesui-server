// index.ts

import { urls } from '../../utils/url';

// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {},

  code2Session() {
    wx.login({
      success(res) {
        if (res.code) {
          wx.request({
            method: 'GET',
            url: urls.auth.code2Session,
            data: {
              code: res.code
            }
          });
        }
      }
    });
  },

  getAccessToken() {
    wx.request({
      method: 'GET',
      url: urls.auth.getAccessToken
    });
  },

  getPhoneInfo() {
    wx.request({
      method: 'GET',
      url: urls.auth.getPhoneInfo
    })
  }
});
