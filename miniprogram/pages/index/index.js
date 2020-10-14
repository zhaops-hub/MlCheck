"use strict";
var app = getApp();
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        goods: []
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
    },
    scanCode: function () {
        var _this = this;
        wx.scanCode({
            onlyFromCamera: false,
            success: function (res) {
                if (res.result != "") {
                    _this.setData({
                        goods: _this.data.goods
                    });
                }
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtJQUVOLENBQUM7SUFDRCxRQUFRO1FBQVIsaUJBWUM7UUFYQyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1YsY0FBYyxFQUFFLEtBQUs7WUFDckIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO29CQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLEtBQUssRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7cUJBQ3ZCLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUM7U0FFRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBtb3R0bzogJ0hlbGxvIFdvcmxkJyxcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBnb29kczogW11cbiAgfSxcbiAgLy8g5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJyxcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG5cbiAgfSxcbiAgc2NhbkNvZGUoKSB7XG4gICAgd3guc2NhbkNvZGUoe1xuICAgICAgb25seUZyb21DYW1lcmE6IGZhbHNlLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLnJlc3VsdCAhPSBcIlwiKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGdvb2RzOiB0aGlzLmRhdGEuZ29vZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gIH0sXG59KVxuIl19