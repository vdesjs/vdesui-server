const urls = require("../../utils/url")

// index.js
// 获取应用实例
const app = getApp();

Page({
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

  getPhoneInfo(event) {
    console.log(event.detail)
    wx.request({
      method: 'GET',
      url: urls.auth.getPhoneInfo,
      data: {
        encryptedData: event.detail.encryptedData,
        iv: event.detail.iv
      }
    });
  }
});
