$(function() {
    $.ajax({
		type:"post",
		url:"http://127.0.0.1:9090/employee/queryEmployeeDetailById",
		async:false,
		dataType : "json",
		success:function(message){  
			if(message.rspCode == 1){
				var data = message.rspData;
				$("#employeeId").val(data.employeeId);
				$("#employeeSn").val(data.employeeSn);
				$("#employeeName").val(data.employeeName);
				$("#enterDateStr").val(data.enterDateStr);
				$("#positionStr").val(data.positionStr);
				$("#employeeTypeStr").val(data.employeeTypeStr);
				$("#sex").val(data.sex);
				$("#age").val(data.age);
				$("#password").val(data.password);
				$("#tel").val(data.tel);
				
			}else if(message.rspCode == -1){
				alert(message.rspMsg);
			}
		}
	});

	$("#saveEmployeeBt").click(function(){
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:9090/employee/updateSelfBaseInfo",
			async:false,
			dataType : "json",
			data:$("#employeeDetailForm").serialize(),
			success:function(message){  
				alert(message.rspMsg);
			}
		});
	});

});