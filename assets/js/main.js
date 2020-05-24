$(function(){

    $(document).ready(function() {

        // Fixed header

        $(window).scroll(function() {

            if ($(this).scrollTop()-130 > 617){
            $('header').addClass("sticky");
            $('.slider').addClass("margin");
            $('.visible__stat').css('display','none');
            $('.visible__scroll').css('display','inline-block');
            }

            else{
            $('header').removeClass("sticky");
            $('.slider').removeClass("margin");
            $('.visible__scroll').css('display','none');
            $('.visible__stat').css('display','inline-block');
            }
            
        });
    

        // Smooth scroll (navigation. all body)

        $('.header-inner nav a , .slider a').click(function(){
            var element=$(this).attr('href');
            var dist=$(element).offset().top;

            $('html, body').animate({'scrollTop': dist}, 1000);

            return false;
        });

        // Scroll color

        

        // Slider (title)
        $('.slider-inner').slick({
            nextArrow : '<button type="button" class="slick-btn slick-next"></button>',
            prevArrow : '<button type="button" class="slick-btn slick-prev"></button>',
            infinite : false,
        });

        // Circular progress bar (skills)

        function Circlle(el){
            $(el).circleProgress({fill: {color: 'green'}})
            on('circle-animation-progress', function(event, progress, stepValue){
                $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        };

        Circlle('.round')


    });
 
});