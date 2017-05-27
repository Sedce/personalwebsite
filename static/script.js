// $(document).readu(function(){
//     $('')
// });
$(document).ready(function () {

    $('a[href^="#cover"]').addClass('active');

//smoothscroll
    $('.menuitem').on('click', function (e) {
        e.preventDefault();
        //  $(document).off("scroll");
        var athis = this;
        var target = this.hash,
                menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $('.menuitem').removeClass('active');
            $(athis).addClass('active');

        });

    });


    $(window).scroll(function (event) {
       var currentHash = "";
        var scrollPos = $(document).scrollTop();
        if (scrollPos === 0)
        {
            window.location.hash  = (currentHash);
            $('a[href^="#cover"]').addClass('active');
            return;
        }

        $('.menuitem').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            var hash1 = $(this).attr('href');
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.menuitem').removeClass("active");
                currLink.addClass("active");
                window.location.hash = (hash1);
            } else {
                currLink.removeClass("active");
            }
        });

    })

});
// Settings for script

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
var name = "#floatMenu";
	var menuYloc = null;
  var scroll = 0;
$(document).ready(function(){
			menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
			$(window).scroll(function () {
        scroll = menuYloc+$(document).scrollTop();
				offset = 300 + $(document).scrollTop() +"px";
        if(scroll >= 1500){
				$(name).animate({top:offset},{duration:500,queue:false});
      }
			});
		});

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;

      var slides = document.getElementsByClassName("mySlides");
      if(slides.length >= 1){
            slides[0].style.display = "block";
      }
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
