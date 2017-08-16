//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: ["http://rescdn.qqmail.com/dyimg/20140630/7D022B666F2D.jpg?wx_lazy=1",
              "http://rescdn.qqmail.com/dyimg/20140630/7D5216F96C3D.jpg?wx_lazy=1",
              "http://rescdn.qqmail.com/dyimg/20140630/7D38689E0A7A.jpg?wx_lazy=1",
              "http://rescdn.qqmail.com/dyimg/20140630/7D31F146CC51.jpg?wx_lazy=1",
              "http://rescdn.qqmail.com/dyimg/20140630/7D239B1CE825.jpg?wx_lazy=1"
    ],
    navList: [
      {"name":"男频",
          "icon": "icon-user"
      },
        {"name":"女频",
          "icon": "icon-user-female"
      },
        {"name":"出版",
          "icon": "icon-book-open"
      },
        {"name":"免费",
          "icon": "icon-user"
      },
        {"name":"更多",
          "icon": "icon-grid"
      }
    ],
    bookList:["老舍自传","不笑小说","鲁迅自传"]
  },
  onLoad: function () {

  },
  goDesc:function(){
    wx.navigateTo({ url: './description/description'})
  },
  goMore:function(){
    wx.navigateTo({ url: './more/more'})
  }
})
