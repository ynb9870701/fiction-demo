// pages/dididingwei/dididingwei.js
var app = getApp()
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;

function getpois(that, longitude, latitude) {
  //获取定位内容
  qqmapsdk.reverseGeocoder({
    location: {
      latitude: latitude,
      longitude: longitude
    },
    get_poi: 1,
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
      //周边数据
      //console.log('poi_count:' + info.result.poi_count);
      //console.log('pois:' + JSON.stringify(info.result.pois));

      that.setData({
        pois: info.result.pois
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
}

Page({
  data: {
    poi_count: 0,//周边总数
    pois: [],//周边列表
    leixing: '',//类型
    longitude: '',//经度
    latitude: '',//纬度
    scale: 16,//缩放
    //地图控件
    markers: [{
      id: 0,
      latitude: '',
      longitude: '',
      width: 50,
      height: 50
    }]
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

    var leixing = options.leixing;
    var longitude = options.longitude;
    var latitude = options.latitude;
    //console.log('leixing:' + leixing + ',longitude:' + longitude + ',latitude:' + latitude);
    that.setData({
      leixing: leixing,
      longitude: longitude,
      latitude: latitude,
      markers: [{
        latitude: latitude,
        longitude: longitude
      }]
    })
    //获得周边内容
    getpois(that, longitude, latitude)

    //模糊搜索
    qqmapsdk.search({
      keyword: '北奇',
      success: function (res) {
        var data = JSON.stringify(res);
        console.log('fail:_' + data);
      },
      fail: function (res) {
        var data = JSON.stringify(res);
      },
      complete: function (res) {
        var data = JSON.stringify(res);
      }
    });
  },
  //地图移动
  yidongmap: function (e) {
    var that = this
    //console.log('type:' + e.type);   //e.type.begin/end
    //if (e.type == 'end') {
    this.mapCtx = wx.createMapContext('myMap')
    this.mapCtx.getCenterLocation({
      success: function (res) {
        // console.log(res.longitude)
        //console.log(res.latitude)
        //更新标记
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude
          }]
        })

        getpois(that, res.longitude, res.latitude)
      }
    })
    //}
  },

  //选择周边
  bindDetail(e) {
    const title = e.currentTarget.dataset.title;
    const location = e.currentTarget.dataset.location;
    //console.log('title:' + title);
    //console.log('location:' + location.lat);
    var that = this

    //console.log(that.data.leixing);
    //设置公有变量
    app.a_leixing = that.data.leixing;//类型
    app.a_title = title;//标题
    app.a_longitude = location.lng;//经度
    app.a_latitude = location.lat;//纬度

    wx.navigateBack({
      delta: 1
    })
  },
  //取消
  quxiao: function (e) {
    var that = this
    wx.navigateBack({
      delta: 1
    })
  },
  onReady: function () {
    // 页面渲染完成
    var that = this
    this.mapCtx = wx.createMapContext('myMap')
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})