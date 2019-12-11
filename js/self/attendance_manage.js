$(function () {
	
	queryAttendanceMonthByParam();
	
	$("#searchAttendanceManageBt").click(function () {
		queryAttendanceMonthByParam();
	});
	
	
	$("#generateMonthAttendanceBt").click(function () {
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:9090/admin/generateMonthAttendanceInfo",
			async:true,
			dataType : "json",
			data:$("#loginForm").serialize(),
			success:function(message){
				if(message.rspCode == 1){
					alert(message.rspMsg)
				}else if(message.rspCode == -1){
					alert(message.rspMsg);
				}
			}
		});
	});

});

function queryAttendanceMonthByParam () {
	$.ajax({
		type:"post",
		url:"http://127.0.0.1:9090/attendance/queryAttendanceMonthByParam",
		async:true,
		dataType : "json",
		data:$("#searchEmployeeForm").serialize(),
		success:function(message){
			if(message.rspCode == 1){
				var result = message.rspData;
			
				if(result == null){
					return ;
				}
				$("#attendanceManageInfoTabs").empty();
				for(var i=0;i<result.length;i++){
					var sum = result[i].latenessNum + result[i].earlyNum;
					var dateStr = result[i].years+"年"+result[i].months+"月";
					$("#attendanceManageInfoTabs").append('<tr>'+
						'<td>'+result[i].employeeSn+'</td>'+
						'<td>'+result[i].employeeName+'</td>'+
						'<td>'+result[i].position+'</td>'+
						'<td>'+result[i].workDay+'</td>'+
						'<td>'+sum+'</td>'+
						'<td>'+result[i].absenteeismDay+'</td>'+
						'<td>'+result[i].leaveDay+'</td>'+
						'<td>'+dateStr+'</td>'+
						'<td>'+result[i].averageWorkingHours+'</td>'+
						'<td>'+
							'<a href="#" class="btn btn-primary" onclick="goAttendanceDetail('+result[i].id+')">查看本月详情</a>'+ 
						"</td>"+
			    	'</tr>');
				}
				
			}else if(message.rspCode == -1){
				alert(message.rspMsg);
			}
		}
	});
}

function goAttendanceDetail (id) {
	if(id != null && id != ''){
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:9090/attendance/goAttendanceDetail",
			async:true,
			dataType : "json",
			data:{
				id:id
			},
			success:function(message){
				if(message.rspCode == 1){
					$("#frame").attr("src","attendance_detail.html");
				}else if(message.rspCode == -1){
					alert(message.rspMsg);
				}
			}
		});
	}
}
