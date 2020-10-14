//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goods: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },
  clean:function(){
    this.data.goods = [];
    // 更新数据
    this.setData({
      goods: this.data.goods
    });
  },
  scanCode: function () {
    wx.scanCode({
      onlyFromCamera: false,
      success: (res) => {
        if (res.result != "") {
          let key = res.result;
          let value = 1;
          let isExit = false;
          for (const i in this.data.goods) {
            if (this.data.goods[i].code == key) {
              value = this.data.goods[i].value + 1;
              isExit = true;
              this.data.goods[i].value = value;
            }
          }

          // 如果之前没有就新加项
          if (!isExit) {
            this.data.goods.push({
              code: key,
              value: value
            })
          }

          // 更新数据
          this.setData({
            goods: this.data.goods
          });
        }
      }

    });
  },
})