$(function(){
	$(".J_menu > li").on("click",function(){
		var $this = $(this),
			$li = $this,
			indexTitle = "海尔商城  ",
			url = $this.find("a").attr("data-url"),
			$J_navtext = $(".navgater label"),
			title = $this.text();
			
		if(!$li.hasClass("li-current")){
			$li.siblings().removeClass("li-current") ;
			$li.addClass("li-current");
			indexTitle += title;
			document.title = indexTitle;
			$J_navtext.html("用户体验监控 &gt;"+title);
			console.log(url);
			history.pushState({title:indexTitle},indexTitle,url);
			//history.replaceState({title:indexTitle},indexTitle,url);
			$.get("./page/" + url,function(msg){
				$(".content").html(msg);
			},"html");
		}
		
	});
	
	$(".content").css("height",$(document).height()-200);
});
