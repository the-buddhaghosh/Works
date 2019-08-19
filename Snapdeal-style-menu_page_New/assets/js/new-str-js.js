$(document).ready(function(){
	
$('#expolre-more-cat-1,#expolre-more-cat-2').hide();
var btnText = document.getElementById("expand_more1");
$('#expand_more1').click(function(e) {
    e.preventDefault();
    $('#expolre-more-cat-1').slideToggle(1000);
    if (btnText.innerHTML == "Expand More") 
    {
         btnText.innerHTML = "Collapse";
    }
    else
    {
        btnText.innerHTML = "Expand More";
    }
});
/*-----------------2nd----------------*/
var btnText = document.getElementById("expand_more2");
$('#expand_more2').click(function(e) {
	e.preventDefault();
    $('#expolre-more-cat-2').slideToggle(1000);
    if (btnText.innerHTML == "Expand More") 
    {
    	 btnText.innerHTML = "Collapse";
    }
    else
    {
    	btnText.innerHTML = "Expand More";
    }
});


/*--------------Slider js---------------*/
    slickSliderMenu();
/*------------active Button-------------*/
    slickActiveButton();
/*-------------sticky------------------*/
    carousal_navigations_hidden();
    jQuery(window).on('scroll', function(){
         ScrollClass();
    });

/*--------Scroll when click on tab----------------*/
   scrollOnClick();

});
                

// -----------------------sticky menu-------------------------

function ScrollClass(){
    var headerHeight = $('#header').height();
    if($(window).scrollTop() > headerHeight){
        $('#header').addClass('sticky-filter-top');
    }else {
        $('#header').removeClass('sticky-filter-top');
    }
}

// ---------------navigation hidden----------------------------

function carousal_navigations_hidden(){
    $('.slick-carousel').on('afterChange', function (event, slick, currentSlide) {

        if(currentSlide === 0) {
            $('.nav-prev').addClass('hidden');
            // alert(currentSlide);
        }
        else {
            $('.nav-prev').removeClass('hidden');
        }  
        if(currentSlide === 16) {
            $('.nav-next').addClass('hidden');
        }
        else {
            $('.nav-next').removeClass('hidden');
        }

    });
}

// --------------------------slick menu slider----------------------
function slickSliderMenu(){
    jQuery('.slick-carousel').slick({
            infinite: false,
            nextArrow: '<i class="fa fa-chevron-right filter-navigation nav-next"></i>',
            prevArrow: '<i class="fa fa-chevron-left filter-navigation nav-prev"></i>',
            slidesToShow: 6,
            slidesToScroll: 6   ,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    // centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {breakpoint: 480,
                settings: {
                    // centerMode: true,
                    arrows: false,
                    slidesToScroll: 3,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }]
        });
}

// --------------------filter button active---------------------
function slickActiveButton(){
    $(".button-filter").click(function(){
        var value = $(this).attr("data-filter");
        if (value=="all") 
        {
            $(".filter").show("1000");
            $(this).addClass('active').siblings().removeClass('active');
        }
        else
        {
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
            $(this).addClass('active').siblings().removeClass('active');
        }
        
    });
}

// -------------------scroll on click-----------------------------
function scrollOnClick(){
     $('#all').on('click',function (e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $("#ab").offset().top
      }, 1000)
    });
    $('#abc').on('click',function (e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $("#cd").offset().top
      }, 800)
    });
    $('#bcd').on('click',function (e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $("#ef").offset().top
      }, 800)
    });
    $('#cde').on('click',function (e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $("#gh").offset().top
      }, 800)
    });
}