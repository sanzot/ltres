$(function(){

    $('#drop li a').each(function(){
        $(this).click(function(){
            $(this).siblings('div').slideToggle(300);            
        });        
    });                

});