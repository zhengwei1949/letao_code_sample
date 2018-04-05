$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});




//登录拦截
$.ajax({
	type: "get",
	url: "/employee/checkRootLogin",
	dataType: "json",
	async: false,
	success: function (response) {
		if (response.error && response.error == 400) {
			location.href = "login.html";
		}
	}
});
$(function () {
	$('.login_out_bot').on('click', function () {
		if (confirm('确定要退出吗?')) {
			$.ajax({
				type: "get",
				url: "/employee/employeeLogout",
				dataType: "json",
				success: function (response) {
					if (response.success) {
						location.href = "login.html";
					} else {
						alert(response.message);
					}
				}
			});
		}
	})
})