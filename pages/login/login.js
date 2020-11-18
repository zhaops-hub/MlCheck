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
    companyName: '',
    url: 'https://www.minglifuzhuang.cn:2000'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function () {
      let token = wx.getStorageSync('token');
      if (token) {
        wx.navigateTo({
          url: '../index/index'
        })
      }
    },
    // 获取输入账号 
    usernameInput: function (e) {
      this.setData({
        username: e.detail.value
      })
    },

    // 获取输入公司名称
    companyNameInput: function (e) {
      this.setData({
        companyName: e.detail.value
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
      if (this.data.username.length == 0 || this.data.password.length == 0 || this.data.companyName.length == 0) {
        wx.showToast({
          title: '账号,密码,公司名不能为空',
          icon: 'none',
          duration: 2000
        })
      } else {
        wx.showLoading({
          title: '加载中…'
        })
        wx.request({
          url: this.data.url + '/users/login', // 仅为示例，并非真实的接口地址
          method: 'post',
          data: {
            companyName: this.data.companyName,
            userName: that.data.username,
            password: md5.hexMD5(that.data.password)
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            wx.hideLoading()
            if (res.data.code == "0") {
              let userName = res.data.data.user.userName;
              let id = res.data.data.user.id;
              let token = res.data.data.token;
              let isAdmin = res.data.data.user.isAdmin;
              wx.setStorageSync('id', id);
              wx.setStorageSync('userName', userName);
              wx.setStorageSync('token', token);
              wx.setStorageSync('isAdmin', isAdmin);

              wx.showToast({
                title: '登录成功！',
                icon: 'success',
                duration: 2000
              })
              wx.navigateTo({
                url: '../index/index'
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