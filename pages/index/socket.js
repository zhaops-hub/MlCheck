var sotk = null;
var socketOpen = false;
var wsUrl = '';
export function webSocketStart(url) {
  wsUrl = url;
  showLoading();
  sotk = wx.connectSocket({
    url: url,
    method: "POST",
    success: res => {
      console.log('小程序连接成功：', res);
    },
    fail: err => {
      console.log('出现错误啦！！' + err);
      wx.showToast({
        title: '网络异常！',
      })
    }
  })

  sotk.onOpen(res => {
    socketOpen = true;
    console.log('监听 WebSocket 连接打开事件。', res);
    wx.showToast({
      title: '服务连接成功',
      duration: 1000
    })
  })
  sotk.onClose(onClose => {
    // showLoading();
    console.log('监听 WebSocket 连接关闭事件。', onClose)
    socketOpen = false;
    //reSart();
  })
  sotk.onError(onError => {
    // showLoading();
    console.log('监听 WebSocket 错误。错误信息', onError)
    socketOpen = false
    //reSart();
  })

  sotk.onMessage(onMessage => {
    var data = JSON.parse(onMessage.data);
    console.log('监听WebSocket接受到服务器的消息事件。服务器返回的消息', data);
  })
}

function showLoading() {
  wx.showLoading({
    title: '连接中...'
  })
}

function reSart() {
  wx.hideLoading();
  let that = this;
  
  wx.showModal({
    title: '提示',
    content: '服务连接断开，从新连接?',
    success: function (res) {
      if (res.confirm) {
       setTimeout(() => {
        webSocketStart(wsUrl);
       }, 1500);
      } else if (res.cancel) {}
    }
  })
}