$(function() {
	
	// 那月度考勤详情
	$.ajax({
		type:"post",
		url:"http://127.0.0.1:9090/attendance/queryAttendanceMonthInfo",
		async:false,
		dataType : "json",
		success:function(message){
			if(message.rspCode == 1){
				var data = message.rspData;
				$("#title_year").html(data.years);
				$("#title_month").html(data.months);
				$("#employeeSn").val(data.employeeSn);
				$("#employeeName").val(data.employeeName);
				$("#position").val(data.position);
				$("#workDay").val(data.workDay);
				$("#latenessNum").val(data.latenessNum);
				$("#latenessTime").val(data.latenessTime);
				$("#earlyNum").val(data.earlyNum);
				$("#earlyTime").val(data.earlyTime);
				$("#missNum").val(data.missNum);
				$("#overtimeNum").val(data.overtimeNum);
				$("#absenteeismDay").val(data.absenteeismDay);
				$("#leaveDay").val(data.leaveDay);
				$("#workTime").val(data.workTime);
				$("#overTime").val(data.overTime);
				$("#remainingTime").val(data.remainingTime);
				$("#slackTime").val(data.slackTime);
				$("#averageWorkingHours").val(data.averageWorkingHours);
			}else if(message.rspCode == -1){
				alert(alert(message.rspMsg));
			}
		}
	});
	
	// 拿每日信息
	$.ajax({
		type:"post",
		url:"http://127.0.0.1:9090/attendance/queryAttendanceInfoList",
		async:false,
		dataType : "json",
		success:function(message){
			if(message.rspCode == 1){
				var result = message.rspData;
				
				$("#dayAttendanceTabs").empty();
				for(var i=0;i<result.length;i++){
					
					var str;
					if(result[i].state == 1){
						str = "<td> class='normal'"+result[i].stateStr+"</td>"
					}else{
						str = "<td> class='no_normal'"+result[i].stateStr+"</td>"
					}
					
					$("#dayAttendanceTabs").append('<tr>'+
						'<td>'+result[i].createTimeStr+'</td>'+
						'<td>'+result[i].punchInTimeStr+'</td>'+
						'<td>'+result[i].punchInStateStr+'</td>'+
						'<td>'+result[i].punchOutTimeStr+'</td>'+
						'<td>'+result[i].punchOutStateStr+'</td>'+
						str+
			    	'</tr>');
				}
				
			}else if(message.rspCode == -1){
				alert(alert(message.rspMsg));
			}
		}
	});
	
	
});