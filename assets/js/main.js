$(function(){

    $(document).ready(function() {

        // Fixed header

        $(window).scroll(function() {

            if ($(this).scrollTop()-130 > 617){
            $('header').addClass("sticky");
            $('.visible__stat').css('display','none');
            $('.visible__scroll').css('display','inline-block');
            }

            else{
            $('header').removeClass("sticky");
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


        $('#contact-form').submit(function(e) {

			e.preventDefault();

			var c_name = $('#c_name').val();
			var c_email = $('#c_email').val();
			var c_message = $('#c_message ').val();
			var response = $('#contact-form .ajax-response');
			
			var formData = {
				'name'       : c_name,
				'email'      : c_email,
				'message'    : c_message
			};

			if (( c_name== '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
				response.fadeIn(500);
				response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
			}

			else {
					 $.ajax({
							type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
							url         : 'assets/php/contact.php', // the url where we want to POST
							data        : formData, // our data object
							dataType    : 'json', // what type of data do we expect back from the server
							encode      : true,
							success		: function(res){
											var ret = $.parseJSON(JSON.stringify(res));
											response.html(ret.message).fadeIn(500);
							}
						});
				}           
            	return false;
			});

		});
        

    });
 
})(jQuery);