// pages/login/login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    username: '',
    password: '',
    url: 'https://www.minglifuzhuang.cn:2000'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取输入账号 
    usernameInput: function (e) {
      this.setData({
        username: e.detail.value
      })
    },

    // 获取输入密码 
    passwordInput: function (e) {
      this.setData({
        password: e.detail.value
      })
    },
    login: function () {
      const md5 = require('../../js/md5.js');
      
       
      var that = this;
      if (this.data.username.length == 0 || this.data.password.length == 0) {
        wx.showToast({
          title: '账号或密码不能为空',
          icon: 'none',
          duration: 2000
        })
      } else {
        wx.request({
          url: this.data.url + '/users/login', // 仅为示例，并非真实的接口地址
          method: 'post',
          data: {
            username: that.data.username,
            password:  md5.hexMD5(that.data.password)
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            if (res.data.code == "0") {
              var unitName = res.data.data.User.unitName;
              var unitId = res.data.data.User.unitId;
              wx.setStorageSync('unitId', unitId);
              wx.setStorageSync('unitName', unitName);
              wx.switchTab({
                url: '../overviewData/realTimeData'
              })
            } else {
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 2000
              })
            }
          }
        })


      }
    }
  }
})