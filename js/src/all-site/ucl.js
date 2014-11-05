// UCL JS
$(document).ready(function(){

	$('.tabbed div').hide();
	$('.tabbed div:first').show();
	$('.tabbed ul li:first').addClass('active');

	$('.tabbed ul li a').click(function(){
		$('.tabbed ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('.tabbed div').hide();
		$(currentTab).show();
		return false;
	});

	function removeCurrentClassFromAll(){
		var allPanelsAnchor = $('.accordion a');
		allPanelsAnchor.each(function(){
			$(this).removeClass("currentAccordionAnchor");	
		});
	}
	/* accordion - start
	---------------------------------------------------------------------*/
	var allPanels = $('.accordion > dd');
	allPanels.slideUp();
	//open accordions that have this set in their class
	$('.accordion dt a').each(function(){
		var tmpAccordionClass = $(this).attr("class");
		if(typeof tmpAccordionClass!=='undefined' && tmpAccordionClass.indexOf('currentAccordionAnchor') >= 0){
			$(this).parent().next().slideDown();
		}
	});

	//var allPanels = $('.accordion > dd').hide();

 	$('.accordion > dt > a').click(function() {
		allPanels.slideUp();
		var tmpAccordionClass = $(this).attr("class");
		if(typeof tmpAccordionClass!=='undefined' && tmpAccordionClass.indexOf('currentAccordionAnchor') >= 0){
			removeCurrentClassFromAll();
		}else{
			removeCurrentClassFromAll();
			$(this).parent().next().slideDown();
			$(this).addClass("currentAccordionAnchor");
		}
		return false;
	});
	/* accordion - end
	---------------------------------------------------------------------*/
	$('.header-mobile__menu, nav-mobile-back').click(function (e) {
		var body = $('body');
		if (body.hasClass('mobile-open')) body.removeClass('mobile-open');
		else body.addClass('mobile-open');
		e.preventDefault();
	});

	if (document.documentElement.clientWidth < 767) {
		//Add Inactive Class To All Accordion Headers
		$('.accordion__header').addClass('inactive-header');

		//Set The Accordion Content Width
		//var contentwidth = $('.accordion__header').width();
		//$('.accordion__content').css({'width' : contentwidth });

		//Open The First Accordion Section When Page Loads
//		$('.accordion__header').first().toggleClass('active-header').toggleClass('inactive-header');
//		$('.accordion__content').first().slideDown().toggleClass('open-content');

		// The Accordion Effect
		$('.accordion__header').click(function () {
			if($(this).is('.inactive-header')) {
//				$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
//				$(this).toggleClass('active-header').toggleClass('inactive-header');
				$(this).removeClass('inactive-header').addClass('active-header');
				$(this).next().slideToggle().toggleClass('open-content');
			}

			else {
				$(this).removeClass('active-header').addClass('inactive-header');
				$(this).next().slideToggle().toggleClass('open-content');
			}
		});
	}
});
