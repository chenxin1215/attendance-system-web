$(function() {
	
	$("#loginForm").submit(function() {
		$.ajax({
			type:"post",
			url:"login/userLogin",  // 请求地址
			async:false,
			dataType : "json",
			data:$(this).serialize(),
			success:function(message){  
				//成功后执行的函数  message为后台返回的数据集 json格式
				if(message.rspCode == 1){
					window.location.href = "views/main.html";
				}else if(message.rspCode == -1){
					alert(message.rspMsg);
				}
			}
		});
	});
	
});