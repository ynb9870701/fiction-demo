// pages/didiindex/didiindex.js
var app = getApp()
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;


Page({
  data: {
    guize_hidden: true,//服务条款窗口
    guize_nocancel: true,//服务条款窗口
    tishi: '',//提示
    juli: '0',//距离
    chufadi: '',//出发地
    chufadi_lon: '',//发出地经度
    chufadi_lat: '',//出发地纬度
    mudidi: '您要去哪儿',//目地地
    mudidi_lon: '',//目地地经度
    mudidi_lat: '',//目地地纬度
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    var that = this

    //设置页面标题
    wx.setNavigationBarTitle({
      title: '滴滴打车'
    })

    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: '635BZ-QRSKF-6O2JD-J3SFC-OB24T-UHBD6'
    });

    //开始定位
    wx.showToast({
      title: '正在定位',
      icon: 'success'
    })
    //获取定位地址
    wx.getLocation({
      success: function (res) {
        console.log(res)

        var longitude = res.longitude;
        var latitude = res.latitude;

        that.setData({
          chufadi_lon: longitude,
          chufadi_lat: latitude,
          mudidi_lon: longitude,
          mudidi_lat: latitude
        })
        //获取定位内容
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            var data = JSON.stringify(res);
            //console.log('data:' + data);

            var info = res;
            if (info.status != 0) {
              wx.showToast({
                title: info.message,
                icon: 'success'
              })
              return;
            }
            that.setData({
              chufadi: info.result.address_component.street_number
            })
          },
          fail: function (res) {
            var data = JSON.stringify(res);
            //console.log('fail:_' + data);
          },
          complete: function (res) {
            var data = JSON.stringify(res);
            //console.log('complete:_' + data);
          }
        });

      },
      fail: function (res) {
        var data = JSON.stringify(res);
        //console.log('fail:_' + data);
        //开始定位
        wx.navigateTo({
          url: '../error/error?error=' + '请同意定位协议'
        })
      }
    })
  },
  //出发地定位
  chufadidingwei: function (e) {
    var that = this
    wx.navigateTo({
      url: '../dididingwei/dididingwei?longitude=' + that.data.chufadi_lon + '&latitude=' + that.data.chufadi_lat + '&leixing=chufadi'
    })
  },
  //目地地定位
  mudididingwei: function (e) {
    var that = this
    wx.navigateTo({
      url: '../dididingwei/dididingwei?longitude=' + that.data.mudidi_lon + '&latitude=' + that.data.mudidi_lat + '&leixing=mudidi'
    })
  },
  //呼叫打车
  hujiaodache: function (e) {
    wx.showToast({
      title: '呼叫中，请稍后',
      icon: 'success'
    })
    return;
  },
  //计价规则
  jijiaguize: function (e) {
    var that = this
    that.setData({
      guize_hidden: false,
      guize_nocancel: false
    })
  },
  guize_cancel: function () {
    var that = this
    that.setData({
      guize_hidden: true
    });
  },
  guize_confirm: function () {
    var that = this
    that.setData({
      guize_hidden: true
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function (options) {
    // 页面显示
    var that = this

    var leixing = app.a_leixing;//类型
    var title = app.a_title;//出发地
    var longitude = app.a_longitude;//发出地经度
    var latitude = app.a_latitude;//出发地纬度

    console.log('leixing:' + leixing);
    if (leixing != '') {
      if (leixing == 'chufadi') {
        that.setData({
          chufadi: title,
          chufadi_lon: longitude,
          chufadi_lat: latitude
        });
      }
      if (leixing == 'mudidi') {
        that.setData({
          mudidi: title,
          mudidi_lon: longitude,
          mudidi_lat: latitude
        });
      }
    }

    console.log('chufadi_lon:' + that.data.chufadi_lon + ',chufadi_lat:' + that.data.chufadi_lat + ',mudidi_lon:' + that.data.mudidi_lon + ',mudidi_lat:' + that.data.mudidi_lat);

    //测量距离
    if (that.data.chufadi_lon != '' && that.data.chufadi_lat != '' && that.data.mudidi_lon != '' && that.data.mudidi_lat != '') {
      // 测量距离
      qqmapsdk.calculateDistance({
        mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行），默认：'walking'
        to: [{
          latitude: that.data.mudidi_lat,
          longitude: that.data.mudidi_lon
        }, {
          latitude: that.data.chufadi_lat,
          longitude: that.data.chufadi_lon
        }],
        success: function (res) {
          var data = JSON.stringify(res);
          console.log('data:' + data);

          var info = res;
          if (info.status != 0) {
            wx.showToast({
              title: info.message,
              icon: 'success'
            })
            return;
          }

          console.log(info.result.elements[0].distance);
          that.setData({
            juli: info.result.elements[0].distance
          })
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          console.log(res);
        }
      });
    }

    //清空共有变量
    app.a_leixing = '';//类型
    app.a_title = '';//标题
    app.a_longitude = '';//经度
    app.a_latitude = '';//纬度

    that.setData({
      guize_hidden: true
    });

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})