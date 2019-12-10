function getUser() {
	$.ajax({
		type:"post",
		url:"login/getUser",  // 请求地址
		async:false,
		dataType : "json",
		success:function(message){  
			//成功后执行的函数  message为后台返回的数据集 json格式
			if(message.rspCode == 1){
				return message.rspData;
			}else if(message.rspCode == -1){
				alert(message.rspMsg);
			}
		}
	});
}

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
