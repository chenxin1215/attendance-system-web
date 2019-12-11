$(function() {

	// 获取员工本月考勤信息
	$.ajax({
			type: "post",
			url: "http://127.0.0.1:9090/attendance/queryAttendanceMonthInfoByParam",
			async: false,
			dataType: "json",
			data: $(this).serialize(),
			success: function(message) {
				if(message.rspCode == 1) {
					var attendanceMonth = message.rspData;
					// TODO
				} else if(message.rspCode == -1) {
					alert(message.rspMsg);
				}
			}
		});
	
});

function btn_monthDetail() {
	$.ajax({
		type: "post",
		url: "attendance/queryAttendanceMonthInfoByParam", // 请求地址
		async: false,
		dataType: "json",
		data: { // 发送的数据asdasd

		},
		success: function(message) { //成功后执行的函数  message为后台返回的数据集 json格式

		},
		error: function() { //错误后执行的函数

		}
	});
}