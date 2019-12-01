$(function () {
	$(".up-bt").click(function(){
		$(this).html("打卡时间：8:35:54");
		$(this).addClass("uped-font");
		$(this).addClass("disabled");
	});
	
	$(".down-bt").click(function(){
		$(this).html("打卡时间：18:35:54");
		$(this).addClass("uped-font");
		$(this).addClass("disabled");
	});
});
