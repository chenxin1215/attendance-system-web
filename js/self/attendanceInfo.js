$(function() {

	$("#attendanceTimeSearch").submit(function() {
		$.ajax({
			type: "post",
			url: "attendance/queryAttendanceInfoByParam", // 请求地址
			async: false,
			dataType: "json",
			data: $(this).serialize(),
			success: function(message) {
				//成功后执行的函数  message为后台返回的数据集 json格式
				if(message.rspCode == 1) {

				} else if(message.rspCode == -1) {
					alert(message.rspMsg);
				}
			}
		});
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