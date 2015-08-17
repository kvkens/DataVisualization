/**
 * Author : Kvkens(yueming@ehaier.com)
 */
;(function($){
	var Base = {
		init : function(){
			var that = this;
			that.accordion();
		},
		accordion : function(){
			var $nav = $(".nav-item"),
				$navLi = $nav.find("li"),
				$navTitle = $navLi.find("span"),
				$navSubNav = $navLi.find("ul.sub-item");
			// item-hide
			$navSubNav.hide();
			$navSubNav.eq(0).slideDown(200);
			$nav.find(">li:first").addClass("top-item");
			$nav.find(">li:last").addClass("bottom-item");
			// bottom-item
			$("ul.sub-item:last > li:last").addClass("bottom-item");
			
			
			$navTitle.on("click",function(){
				var $this = $(this);
				$this.next().slideToggle(200).parent().siblings().find("ul.sub-item").slideUp(200);
			});
			$navSubNav.find(">li>a").on("click",function(){
				var $this = $(this);
				$navSubNav.find(">li").removeClass("active");
				$this.parent("li").addClass("active");

			});
		}
	};
	$(function(){
		Base.init();
	});
})(jQuery);
