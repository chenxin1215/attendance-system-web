$(function(){
	
	$.ajax({
		type:"post",
		url:"http://127.0.0.1:9090/login/getUser", 
		async:false,
		dataType : "json",
		success:function(message){
			if(message.rspCode == 1){
				var user = message.rspData;
				$("#userNameBt").html(user.employeeName);
				$("#employeeIdVal").val(user.employeeId);
			}else if(message.rspCode == -1){
				alert(message.rspMsg);
			}
		}
	});
	
	$("#exit").click(function(){
		if(confirm("确定退出登陆?")){
		 　　$.ajax({
				type:"post",
				url:"http://127.0.0.1:9090/login/outLogin", 
				async:false,
				dataType : "json",
				success:function(message){  
					if(message.rspCode == 1){
						window.location.href = "../login.html";
					}else if(message.rspCode == -1){
						alert(message.rspMsg);
					}
				}
			});
		}
	});
	
	// 进入个人信息界面
	$("#userNameBt").click(function () {
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:9090/employee/setEmployeeId",
			async:true,
			dataType : "json",
			data:{
				employeeId : $("#employeeIdVal").val()
			},
			success:function(message){  
				if(message.rspCode == 1){
					$("#frame").attr("src","person_info.html");
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
	$(".employee_insert").click(function () {
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:9090/admin/setAdminEmployeeId",
			async:true,
			dataType : "json",
			data:{
				employeeId : null
			},
			success:function(message){}
		});
		$("#frame").attr("src","employee_info.html");
	});
});