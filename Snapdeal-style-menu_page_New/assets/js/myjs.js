$(document).ready(function(){
$('#btn1').click(function (e){
	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#ab").offset().top
    }, 600)
  });
$('#btn2').click(function (e){
	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#cd").offset().top
    }, 600)
  });
$('#btn3').click(function (e){
	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#ef").offset().top
    }, 600)
  });
$('#btn4').click(function (e){
	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#gh").offset().top
    }, 600)
  });
$('#btn5').click(function (e){
	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#ij").offset().top
    }, 600)
  });
$('#btn6').click(function (e){
	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#kl").offset().top
    }, 600)
  });
$('#btn7').click(function (e){
	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#mn").offset().top
    }, 600)
  });
$('#btn8').click(function (e){
	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#op").offset().top
    }, 600)
  });

/*-------------------expand more for section 1---------------*/
$('#moreShow1,#moreShow2').hide();
var btnText = document.getElementById("expand_more1");
$('#expand_more1').click(function(e) {
	e.preventDefault();
    $('#moreShow1').slideToggle(1000);
    if (btnText.innerHTML == "Expand More") 
    {
    	 btnText.innerHTML = "Collapse";
    }
    else
    {
    	btnText.innerHTML = "Expand More";
    }
});
/*-------------------expand more for section 2---------------*/

var btnText2 = document.getElementById("expand_more2");
$('#expand_more2').click(function(e) {
	e.preventDefault();
    $('#moreShow2').slideToggle(1000);
    if (btnText2.innerHTML=="Expand More") {
    	btnText2.innerHTML = "Collapse";
    }
    else
    {
    	btnText2.innerHTML = "Expand More";
    }
});

/*----------------expand more ends here--------------*/

});