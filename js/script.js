$(document).ready(function($){ 

	$('.card-banner').on('mouseenter', function(){
		$('.banner-overlay').show();
		if($('.banner-overlay').hasClass('option-selected')) {
			$('.options').css('opacity','0');
		}
		else {
			$('.options').css('opacity','1');
		}
	});

	$('.card-banner').on('mouseleave', function(){
		$('.banner-overlay').hide().removeClass('option-selected');
		$('.options').show().css('opacity','0');
		$('.tabs > div').hide();
	});


	$('.options ul li a').on('click',function(event){
		var showDiv = "div."+$(this).data('target');
		$('.options').hide();
		$('.banner-overlay').show().addClass('option-selected');
		$(showDiv).show(200).css('color','#fff');
		console.log(showDiv);
	});
});