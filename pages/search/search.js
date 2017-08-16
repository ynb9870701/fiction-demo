// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        typeList: [
            {
                "icon": "icon-flag",
                "name": "出版"
            },
            {
                "icon": "icon-heart",
                "name": "免费"
            },
            {
                "icon": "icon-paper-clip",
                "name": "全本"
            },
            {
                "icon": "icon-social-tumblr",
                "name": "连载"
            }
        ],
        topSearchList:[
          "全能透视",
          "全能透视",
          "全能透视",
          "全能透视",
          "全能透视",
          "全能透视",
          "全能透视",
          "全能透视",
          "全能透视"
        ],
        activityList:[
          {
            "title": "限时特价",
            "des": "低至5毛!"
          },
          {
            "title": "出版畅销书",
            "des": "看这里就够了"
          },
          {
            "title": "全场最低价",
            "des": "一分阅全场"
          },
          {
            "title": "恐怖悬疑",
            "des": "鬼来啦请闭眼"
          },
          {
            "title": "新书免费",
            "des": "连载新书免费"
          },
          {
            "title": "畅销书特价",
            "des": "女生专属特价"
          }
        ]
  },
  onLoad: function (options) {

  }
})