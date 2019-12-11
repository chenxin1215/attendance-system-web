$(function() {
	
	$("#login_bt").click(function() {
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:9090/login/userLogin",
			async:true,
			dataType : "json",
			data:$("#loginForm").serialize(),
			success:function(message){
				if(message.rspCode == 1){
					window.location.href = "views/main.html";
				}else if(message.rspCode == -1){
					alert(alert(message.rspMsg));
				}
			}
		});
	});
	
});