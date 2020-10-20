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
    count: 0,
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.addgoods = this.selectComponent("#addgoods");

    // 检测变量变化
    app.watch(this, {
      goods: function (newValue) {
        let count = 0;
        for (const i in this.data.goods) {
          count += parseInt(this.data.goods[i].value);
        }
        this.setData({
          count: count
        });
      }
    })
  },
  delGoods: function (e) {
    let that = this;
    let code = e.currentTarget.dataset['code'];
    let index = e.currentTarget.dataset['index'];
    wx.showModal({
      title: '提示',
      content: '确认要删除' + code + '?',
      success: function (res) {
        if (res.confirm) {
          that.data.goods.splice(index, 1)

          // 更新数据
          that.setData({
            goods: that.data.goods
          });
        } else if (res.cancel) {}
      }
    })
  },
  showAddgoods: function () {
    this.addgoods.showPopup();
  },
  update: function (e) {
    let code = e.currentTarget.dataset['code'];
    let value = e.currentTarget.dataset['value'];
    let index = e.currentTarget.dataset['index'];
    this.addgoods.showPopup({
      code: code,
      value: value,
      index: index
    });
  },
  copy: function () {
    let data = "";
    for (const i in this.data.goods) {
      let code = this.data.goods[i].code;
      let value = this.data.goods[i].value;
      data += code + "                        " + value + "\n";
    }

    wx.setClipboardData({
      data: data,
      success(res) {
        wx.showToast({
          title: '复制成功',
          icon: "success",
          duration: 2000
        })
      }
    })
  },
  clean: function () {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确认要清空?',
      success: function (res) {
        if (res.confirm) {
          that.data.goods = [];
          // 更新数据
          that.setData({
            goods: that.data.goods
          });
        } else if (res.cancel) {}
      }
    })



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
    let isUpdate = data.detail.isUpdate;

    if (isUpdate) {
      let index = data.detail.index;
      if (this.data.goods[index].code != code) return;
      this.data.goods[index].value = value;
    } else {
      this.data.goods.unshift({
        code: code,
        value: parseInt(value)
      });
    }

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
            this.data.goods.unshift({
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