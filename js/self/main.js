$(function(){
	
	$.ajax({
		type:"post",
		url:"login/getUser",  // 请求地址
		async:false,
		dataType : "json",
		success:function(message){  
			//成功后执行的函数  message为后台返回的数据集 json格式
			if(message.rspCode == 1){
				$("#userNameBt").html(user.employeeName);
			}else if(message.rspCode == -1){
				alert(message.rspMsg);
			}
		}
	});
	
	// 获取个人信息
	$("#userNameBt").click(function () {
		alert(1);
		$.ajax({
			type:"post",
			url:"login/queryEmployeeDetailById",  // 请求地址
			async:false,
			dataType : "json",
			success:function(message){  
				//成功后执行的函数  message为后台返回的数据集 json格式
				if(message.rspCode == 1){
					
					
				}else if(message.rspCode == -1){
					alert(message.rspMsg);
				}
			}
		});
	});
	
	$(".index_button").click(function(){
		$("#frame").attr("src","index.html");
	});
	$(".attendance_info_button").click(function () {
		$("#frame").attr("src","attendance_info.html");
	});
	$(".overtime_button").click(function () {
		$("#frame").attr("src","overtime_info.html");
	});
	$(".leave_button").click(function () {
		$("#frame").attr("src","leave_info.html");
	});
	$(".approve_button").click(function () {
		$("#frame").attr("src","approve_info.html");
	});
	$(".user-name").click(function(){
		$("#frame").attr("src","person_info.html")
	});
	$(".attendance_rule_configure").click(function(){
		$("#frame").attr("src","attendance_rule_configure.html")
	});
	$(".attendance_info_manage").click(function(){
		$("#frame").attr("src","attendance_manage.html")
	});
	$(".approve_info_manage").click(function(){
		$("#frame").attr("src","approve_info_manage.html")
	});
	$(".employee_manage").click(function(){
		$("#frame").attr("src","employee_manage.html")
	});
});