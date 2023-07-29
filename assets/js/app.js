window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector("#navbar1").classList.add('activefixed');

    } else {
        document.querySelector("#navbar1").classList.remove('activefixed');

    }
}


$(document).ready(function(){
	// Hero slider
$('#hero_slider').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    dots:true,
    nav:false,
    smartSpeed:1500,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
          items: 1,
        },
        768: {
          items: 1,
          margin: 8,
      }
    }
})

// emplement slider
$('#employement').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  dots:false,
  nav:true,
  smartSpeed:1500,
  autoplay:false,
  autoplayTimeout:3000,
  responsive:{
      0:{
        items: 1,
      },
      768: {
        items: 1,
    }
  }
})

// vedio close when modal will be closed
$('#vedioModal').on('hide.bs.modal', function(e) {    
  var $if = $(e.delegateTarget).find('iframe');
  var src = $if.attr("src");
  $if.attr("src", '/empty.html');
  $if.attr("src", src);
});

// stepform jquery start from here


});

