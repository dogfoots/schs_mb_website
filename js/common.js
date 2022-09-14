function openGnbMenu(){
    $(".header_gnb_layer").fadeIn('500');
    $('body').css('overflow','hidden');
}


function closeGnbMenu(){
    $(".header_gnb_layer").fadeOut('500');
    $('body').css('overflow','auto')
}