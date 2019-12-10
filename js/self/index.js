$(function() {
	$(".up-bt").click(function() {
//		$(this).html("打卡时间：8:35:54");
//		$(this).addClass("uped-font");
//		$(this).addClass("disabled");
		$.ajax({
		type: "post",
		url: "attendance/punchIn", // 请求地址
		async: false,
		dataType: "json",
		success: function(message) {
			//成功后执行的函数  message为后台返回的数据集 json格式
			if(message.rspCode == 1) {

			} else if(message.rspCode == -1) {
				alert(message.rspMsg);
			}
		}
	});
	});

	$(".down-bt").click(function() {
//		$(this).html("打卡时间：18:35:54");
//		$(this).addClass("uped-font");
//		$(this).addClass("disabled");
		$.ajax({
		type: "post",
		url: "attendance/punchOut", // 请求地址
		async: false,
		dataType: "json",
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