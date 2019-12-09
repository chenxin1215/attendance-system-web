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
	$(".attendance_rule_configure").click(function(){
		$("#frame").attr("src","attendance_rule_configure.html")
	});
	$(".attendance_info_manage").click(function(){
		$("#frame").attr("src","attendance_manage.html")
	});
	$(".approve_info_manage").click(function(){
		$("#frame").attr("src","approve_info_manage.html")
	});
	$(".employee_manage").click(function(){
		$("#frame").attr("src","employee_manage.html")
	});
});