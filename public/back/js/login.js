/**
 * Created by Administrator on 2018/4/6.
 */
$(function(){

  $("#form").bootstrapValidator({

    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
   //校验字段
    //name名字不能为空
    //密码为6~12位
    fields:{
      username:{
        validators:{
          notEmpty:{
            message:"用户名不能为空"
          },
          stringLength:{
            min:2,
            max:6,
            message:"用户名长度2~6位"
          },
          callback:{
            message:"用户名错误"
          }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message:"密码不能为空"
          },
          stringLength:{
            min:6,
            max:12,
            message:"密码长度6~12位"
          },
           callback:{
             message:"密码错误"
           }
        }
      }
    }


  });
  $('#form').on("success.form.bv", function(e){
    //阻止表单的默认提交
    e.preventDefault();
    //使用ajax进行提交
    $.ajax({
      type:"POST",
      url:"/employee/employeeLogin",
      dataType:"json",
      data:$('#form').serialize(),
      success:function(info){
       if(info.success){
         location.href="index.html"
       }
        if(info.error === 1000){
          $('#form').data("bootstrapValidator").updateStatus("username", "INVALID", "callback")
        }
        if(info.error ===1001){
          $('#form').data("bootstrapValidator").updateStatus("username", "INVALID", "callback")
        }
      }
    });
  });
  $('[type="reset"]').click(function(){

    //重置表单样式
    $("#form").data("bootstrapValidator").resetForm();

  });
});