/**
 * Created by Administrator on 2018/4/6.
 */
//注册了全局事件，所有的ajax只要开始就会开启进度条
$(document).ajaxStart(function () {
  NProgress.start();
});

//所有的ajax只要结束，延迟500毫秒，结束进度条
$(document).ajaxStop(function () {
  setTimeout(function () {
    NProgress.done();
  }, 500);

});


$(function(){
  //分类管理二级栏
  $('.category').click(function(){
   $(this).next().stop().slideToggle();

  });
  //左侧显示隐藏
  $('.icon_menu').click(function(){
    $('.lt_aside').toggleClass("hidemenu");
    $('.lt_topbar').toggleClass("hidemenu");
    $('.lt_main').toggleClass("hidemenu");

  });
  $('.icon_logout').click(function(){
    $('#logoutModal').modal("show");
  })
  $('#logoutBtn').click(function(){

    $.ajax({
      url:"/employee/employeeLogout",
      type:"GET",
      success:function (info){
       if( info.success ){
       location.href="login.html"
       }
      }
    })
  })



})
