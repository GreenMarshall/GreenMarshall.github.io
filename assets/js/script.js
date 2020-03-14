$(function(){

    $(document).ready(function() {

        // Smooth scroll (navigation. all body)

        $('.header-inner nav a').click(function(){
            var element=$(this).attr('href');
            var dist=$(element).offset().top;

            $('html, body').animate({'scrollTop': dist}, 1000);

            return false;
        });

        $('window').scroll(function(){
            $('section[id]').each(function(){
                var id=$(this).attr('id');
                if($(this).offset().top-100 < $(window).scrollTop()){
                    $('.header-inner nav a[href=#'+id+']').addClass('.active').siblings().removeClass('.active');
                }
                if($(window).scrollTop()<900){
                    $('.header-inner nav a').removeClass('active');
                }
            });
        });

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
 
})(jQuery);