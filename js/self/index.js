$(function() {
	
	// 查看考勤规则
	$.ajax({
		type: "post",
		url: "http://127.0.0.1:9090/attendance/getAttendanceRule",
		async: false,
		dataType: "json",
		success: function(message) {
			if(message.rspCode == 1) {
				var config = message.rspData;
				$("#workHoursStr").html(config.workHoursStr);
				$("#owHoursStr").html(config.owHoursStr);
			} else if(message.rspCode == -1) {
				alert(message.rspMsg);
			}
		}
	});
	
	// 查看今日考勤情况
	$.ajax({
		type: "post",
		url: "http://127.0.0.1:9090/attendance/getAttendanceInfoByToday",
		async: false,
		dataType: "json",
		success: function(message) {
			if(message.rspCode == 1) {
				var attendance = message.rspData;
				alert(attendance.punchInTimeStr +"--"+attendance.punchOutTimeStr);
				if(attendance.punchInTimeStr != null && attendance.punchInTimeStr != ''){
					$("#up-bt").html(attendance.punchInTimeStr+"<br>"+attendance.punchInStateStr);
					$("#up-bt").addClass("uped-font");
				}
				if(attendance.punchOutTimeStr != null && attendance.punchOutTimeStr != ''){
					$("#down-bt").html(attendance.punchOutTimeStr+"<br>"+attendance.punchOutStateStr);
					$("#down-bt").addClass("uped-font");
				}
				
			} else if(message.rspCode == -1) {
				alert(message.rspMsg);
			}
		}
	});
	
	
	// 上班打卡
	$("#up-bt").click(function() {
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:9090/attendance/punchIn",
			async: false,
			dataType: "json",
			success: function(message) {
				if(message.rspCode == 1) {
					alert(message.rspMsg);
					$(this).addClass("uped-font");
					$(this).html(message.rspData);
				} else if(message.rspCode == -1) {
					alert(message.rspMsg);
					$(this).addClass("disabled");
				}
			}
		});
	});

	// 上班打卡
	$("#down-bt").click(function() {
		$.ajax({
		type: "post",
		url: "http://127.0.0.1:9090/attendance/punchOut", 
		async: false,
		dataType: "json",
		success: function(message) {
			if(message.rspCode == 1) {
				alert(message.rspMsg);
				$(this).addClass("uped-font");
				$(this).html(message.rspData);
			} else if(message.rspCode == -1) {
				alert(message.rspMsg);
				$(this).addClass("disabled");
			}
		}
	});
	});
});