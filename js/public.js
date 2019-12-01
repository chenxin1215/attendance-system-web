$(function(){
	
	
	/* 年月 */
	$('.form_datetime_month').datetimepicker({
	    format: 'yyyy-mm',
        autoclose: true,
        todayBtn: true,
		startView: 3,
		minView:'year', 
		maxView:'decade',
		language:  'zh-CN',//汉化
	});
	
	/* 年月日 */
	$('.form_datetime_day').datetimepicker({
	    format: 'yyyy-mm-dd',
        autoclose: true,
        todayBtn: true,
		startView: 2,
		minView:'month', 
		maxView:'decade',
		language:  'zh-CN',//汉化
	});
});
