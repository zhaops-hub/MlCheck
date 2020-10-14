//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goods: [],
    count: 0
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.addgoods = this.selectComponent("#addgoods");

    app.watch(this, {
      goods: function (newValue) {
        let count = 0;
        for (const i in this.data.goods) {
          count += this.data.goods[i].value;
        }
        this.setData({
          count: count
        });
      }
    })
  },
  showAddgoods: function () {
    this.addgoods.showPopup();
  },
  clean: function () {
    this.data.goods = [];
    // 更新数据
    this.setData({
      goods: this.data.goods
    });
  },
  //取消事件
  _error() {
    console.log('你点击了取消');
    this.addgoods.hidePopup();
  },
  //确认事件
  _success(data) {
    console.log('你点击了确定');
    this.addgoods.hidePopup();
    let code = data.detail.code;
    let value = data.detail.value;

    this.data.goods.push({
      code: code,
      value: parseInt(value)
    });

    // 更新数据
    this.setData({
      goods: this.data.goods
    });

    this.addgoods.clean();
  },
  scanCode: function () {
    wx.scanCode({
      onlyFromCamera: false,
      success: (res) => {
        if (res.result != "") {
          let key = res.result;
          let value = 1;
          let isExit = false;

          // 先不做聚合
          // for (const i in this.data.goods) {
          //   if (this.data.goods[i].code == key) {
          //     value = this.data.goods[i].value + 1;
          //     isExit = true;
          //     this.data.goods[i].value = value;
          //   }
          // }

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