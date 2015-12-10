

//GALLERY
$(document).ready(function(){
    var largeImage = $('#largeImage');
   
    var bluedress = $('#bluedress');
    var boxer = $('#boxer');
    var cow = $('#cow');
    var country = $('#countryboy');
    var eye = $('#eye');
    var iceswim = $('#iceswim');
    var sitting = $('#sitting');
    
    
    bluedress.mouseover(function(){
        largeImage.attr('src','images/blue_dress.jpg');
    });
    
    boxer.mouseover(function(){
      largeImage.attr('src','images/boxer.jpg');
    });
    
    cow.mouseover(function(){
        largeImage.attr('src', 'images/cow.jpg');
    });
    
    country.mouseover(function(){
        largeImage.attr('src', 'images/country_boy_relaxing.jpg');
    });
    
    eye.mouseover(function(){
        largeImage.attr('src', 'images/eye.jpg');
    });
    
    iceswim.mouseover(function(){
        largeImage.attr('src', 'images/ice_swim.jpg');
    });
    
    sitting.mouseover(function(){
        largeImage.attr('src','images/sitting.jpg');
    });
    
    
    //ABOUT
    $('#bios a').click(function(bioevent){
        bioevent.preventDefault();
        var link_url = $(this).attr('href');
        $('#bio').load(link_url + " #content");
        
        $('#bio').hide().slideDown(500);
    });
     
    
    //CONTACT
    
    var myform = $('#myform');
    var the_name = $('#username');
    var the_email = $('#email');
    var the_message = $('#my_message');
    
    var name_error = $('name_error');
    var email_error = $('email_error');
    var message_error = $('#message_error');
    
    myform.submit(function(e){
        
    var errors = 0;
    var user_name = $('#username').val();
    var user_email = $('#email').val();
    var user_message = $('#my_message').val();
    
    if (user_name == '') {
        the_name.css('border-color', '#C00');
        name_error.text('Field required.');
        name_error.css('color', '#C00');
        errors++;
    } else {
        the_name.css('border-color', 'green');
        name_error.text(' ');
    }
        
         if (user_email == '') {
        the_email.css('border-color', '#C00');
        email_error.text('Field required.');
        email_error.css('color', '#C00');
        errors++;
    } else {
        the_email.css('border-color', 'green');
        email_error.text(' ');
    }
        
          if (user_message == '') {
        the_message.css('border-color', '#C00');
        message_error.text('Field required.');
        message_error.css('color', '#C00');
        errors++;
    } else {
        the_message.css('border-color', 'green');
        message_error.text(' ');
    }
        
    });
    
});


