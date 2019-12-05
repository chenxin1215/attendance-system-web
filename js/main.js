$(function(){
	
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
	$(".user-name").click(function(){
		$("#frame").attr("src","person_info.html")
	});
	
});