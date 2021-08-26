$('.wrapper').addClass('loaded');

function ibg(){
    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();

    $(document).ready(function() {
        $('.icon__menu').click(function(event) {
            $(this).toggleClass('active');
            $('.menu__body').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });

    $(document).ready(function() {
        if($('.slider__body').length>0) {
            $('.slider__body').slick({
                dots: true,
                arrows: false,
                accessibility: false,
                slidesToShow: 1,
                autoplaySpeed: 3000,
                adaptiveHeigth: true,
                nextArrow: '<button type="button" class="slick-next"></button>',
                prewArrow: '<button type="button" class="slick-prew"></button>',
                responsive: [{
                    breakpoint: 768,
                    settings: {}
                }]
            }); 
        }
    })