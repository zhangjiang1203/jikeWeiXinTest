Page({

  /**
   * 页面的初始数据
   */
  data: {
    text : "咱们都是中国人",
    btnText : "这是按钮的文字",
    testBtn : "测试按钮的样式",
    show : true,
    news: ['我就是', '你好', '还有谁', '再寄回']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  // 按钮点击事件
  btnClick : function(event){
    console.log('按钮开始点击')
    console.log(event)
    var isShow = this.data.show
    var newsData = this.data.news
    //删除数据 shift删除第一个 pop 删除最后一个
    newsData.pop()
    // 修改数据源
    this.setData({ show: !isShow,
                    news:newsData})

  }
})