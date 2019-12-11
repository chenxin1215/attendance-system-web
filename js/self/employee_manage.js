$(function () {
	
	queryEmployeeListByParam();
	$("#searchEmpoyeeBt").click(function () {
		queryEmployeeListByParam();
	});
	
});

function queryEmployeeListByParam() {
	$.ajax({
		type:"post",
		url:"http://127.0.0.1:9090/admin/queryEmployeeListByParam",
		async:true,
		dataType : "json",
		data:$("#employeeForm").serialize(),
		success:function(message){
			if(message.rspCode == 1){
				var result = message.rspData;
			
				if(result == null){
					return ;
				}
			
				$("#attendanceInfoTabs").empty();
				for(var i=0;i<result.length;i++){
					var sexStr = result[i].sex == 1 ? '男':'女';
					$("#attendanceInfoTabs").append('<tr>'+
						'<td>'+result[i].employeeSn+'</td>'+
						'<td>'+result[i].employeeName+'</td>'+
						'<td>'+sexStr+'</td>'+
						'<td>'+result[i].age+'</td>'+
						'<td>'+result[i].enterDateStr+'</td>'+
						'<td>'+result[i].positionStr+'</td>'+
						'<td>'+result[i].employeeTypeStr+'</td>'+
						'<td>'+result[i].password+'</td>'+
						'<td>'+result[i].tel+'</td>'+
						'<td>'+result[i].stateStr+'</td>'+
						'<td>'+
							'<a href="#" class="btn btn-primary">修改</a>'+ 
						"</td>"+
			    	'</tr>');
				}
				
			}else if(message.rspCode == -1){
				alert(message.rspMsg);
			}
		}
	});
}
