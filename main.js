<script src="jquery-1.11.0.min.js"></script>
 
$(document).ready(){

	$('.oneimages1 a').click(function(event){
		event.preventDefault();
		var imgPath = $(this).attr('href');
		var oldImage = $('.oneimages1 a');
		var newImage = $('<img src="' + imgPath + '">');
		newImage.hide();
		$('.oneimages1 a').prepend(newImage);
		newImage.fadeIn(1000);
		oldImage.fadeOut(1000, function(){
			$(this).remove();
	});
});
	$('.oneimages1 a:first').click();












