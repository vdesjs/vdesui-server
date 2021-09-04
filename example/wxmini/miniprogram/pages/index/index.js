"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("../../utils/url");
var app = getApp();
Page({
    data: {},
    code2Session: function () {
        wx.login({
            success: function (res) {
                if (res.code) {
                    wx.request({
                        method: "GET",
                        url: url_1.urls.auth.code2Session,
                        data: {
                            code: res.code
                        }
                    });
                }
            }
        });
    },
    getAccessToken: function () {
        wx.request({
            method: "GET",
            url: url_1.urls.auth.getAccessToken,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHVDQUFzQztBQUd0QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUVELFlBQVk7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ1QsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsR0FBRyxFQUFFLFVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTt3QkFDM0IsSUFBSSxFQUFFOzRCQUNKLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTt5QkFDZjtxQkFDRixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQUVELGNBQWM7UUFDWixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsVUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjO1NBQzlCLENBQUMsQ0FBQTtJQUVOLENBQUM7Q0FFQSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuXG5pbXBvcnQgeyB1cmxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VybFwiXG5cbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgIFxuICB9LFxuXG4gIGNvZGUyU2Vzc2lvbigpIHtcbiAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgIHVybDogdXJscy5hdXRoLmNvZGUyU2Vzc2lvbixcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gIH0sXG5cbiAgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICB1cmw6IHVybHMuYXV0aC5nZXRBY2Nlc3NUb2tlbixcbiAgICB9KVxuXG59XG4gIFxufSlcbiJdfQ==