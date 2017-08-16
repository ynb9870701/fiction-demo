/*
* @Author: Marte
* @Date:   2017-06-25 15:53:21
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-25 16:21:41
*/

Page({
    data:{
        categoryList:[
            {
                "name":"男频",
                "list": [
                        {"name":"玄幻","status": true},
                        {"name":"奇幻","status": false},
                        {"name":"武侠","status": true},
                        {"name":"仙侠","status": true},
                        {"name":"都市","status": false},
                        {"name":"校园","status": false},
                        {"name":"历史","status": false},
                        {"name":"军事","status": false},
                        {"name":"游戏","status": true}
                    ],
                "like": true
            },
            {
                "name":"女频",
                "list":[
                        {"name":"现代言情","status": true},
                        {"name":"现代言情","status": false},
                        {"name":"现代言情","status": false},
                        {"name":"现代言情","status": false},
                        {"name":"现代言情","status": false},
                    ]
            },
            {
                "name":"出版"
            },
            {
                "name":"漫画"
            },
            {
                "name":"杂志"
            }
        ]
    },
    onLoad: function(){

    },
    goCtgList:function(){
      wx.navigateTo({url:'/pages/category/ctg-list/ctg-list'})
    }
})