// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goods: []
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {

  },
  scanCode() {
    wx.scanCode({
      onlyFromCamera: false,
      success: (res) => {
        if (res.result != "") {
          this.setData({
            goods: this.data.goods
          });
        }
      }

    });
  },
})
