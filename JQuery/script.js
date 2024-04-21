$(document).ready(function(){
    $('#tst-btn').click(function() {
        //alert("hello guys");
        $('.box').fadeToggle(1000);
    });

    $('.box').mouseenter(function() {
        $(this).css({"background-color":"red"});
    });

    $('.box').mouseleave(function() {
        $(this).css({"background-color":"green"});
    });
   
    $('#input-box').blur(function() {
        var userInput = $(this).val()
        
        if (userInput.length < 3) {
            //alert("pls enter more than 3 characters")
            $('.errormsg').show();
        }

        else {
            $('#submit-btn').click(function() {
                var userInput = $('#input-box').val();
                $('p').text('Your input is: ' + userInput);
                $('.errormsg').hide();
                });
        }
    });

});