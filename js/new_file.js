$(function () {
	$(".table_list ul li").hover(function () {
		var i=$(this).index()
		$(this).parent().siblings().children().stop().eq(i).fadeIn().siblings().fadeOut()
	})
})