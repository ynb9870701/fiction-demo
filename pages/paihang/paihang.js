// pages/paihang/paihang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[
        {
            "icon": 'icon-ban',
            "name": '月票榜'
        },
        {
            "icon": 'icon-bulb',
            "name": '预订榜'
        },
        {
            "icon": 'icon-film',
            "name": '新书榜'
        }
    ],
    list:[
        {
            "name": "男频",
            "info": [
                {
                    "icon": "icon-badge",
                    "name": "热销榜",
                    "first": "异世灵武天下"
                },
                {
                    "icon": "icon-folder",
                    "name": "热销榜",
                    "first": "最强升级系统"
                },
                {
                    "icon": "icon-present",
                    "name": "热销榜",
                    "first": "通天仕途"
                },
                {
                    "icon": "icon-pin",
                    "name": "热销榜",
                    "first": "偷香窃玉"
                }
            ]
        },
        {
            "name": "女频",
            "info": [
                {
                    "icon": "icon-badge",
                    "name": "热销榜",
                    "first": "异世灵武天下"
                },
                {
                    "icon": "icon-folder",
                    "name": "热销榜",
                    "first": "最强升级系统"
                }
            ]
        },

        {
            "name": "出版",
            "info": [
                {
                    "icon": "icon-badge",
                    "name": "热销榜",
                    "first": "异世灵武天下"
                }
            ]
        }
    ]
  },
  goRankList:function(){
    wx.navigateTo({
      url: './rank-list/rank-list',
    })
  }
})