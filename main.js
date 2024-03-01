$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })

    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
       
        if($(window).scrollTop()<30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active')
        }

        $('section').each(function () {
            var Top = $(window).scrollTop(); // Get the scroll top position
            var Id = $(this).attr('id'); // Get the ID of the current section
            var height = $(this).height(); // Get the height of the current section
            var top = $(this).offset().top - 200; // Get the top position of the current section
        
            // Corrected the condition to check if the scroll position falls within the range of the current section
            if (Top >= top && Top < top + height) {
                $('.navbar ul li a').removeClass('active'); // Remove the active class from all navbar links
                $('.navbar').find('a[href="#' + Id + '"]').addClass('active'); // Add the active class to the navbar link corresponding to the current section
            }
        });
        
    })

})


