$(function() {
	$("#loginTest").submit(function() {
//		alert("员工登陆");
		$.ajax({
			type:"post",
			url:"login/userLogin",  // 请求地址
			async:false,
			dataType : "json",
			data:$(this).serialize(),
			success:function(message){  //成功后执行的函数  message为后台返回的数据集 json格式
				if(message.rspCode == 1){
					// TODO 这个链接写啥
					window.location.href = "page/pageSkip_employees";  
				}else if(message.rspCode == -1){
					alert(message.rspMsg);
				}
			},
			error : function(){ //错误后执行的函数
				
			}
		});
	});
});