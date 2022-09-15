function openGnbMenu(){
    $(".header_gnb_layer").fadeIn('500');
    $('body').css('overflow','hidden');
}


function closeGnbMenu(){
    $(".header_gnb_layer").fadeOut('500');
    $('body').css('overflow','auto')
}


function goToSubmenu(ele){
    //console.log("ee : " + $(ele).parent().data("submenu-id"));
    let submenu_id = $(ele).parent().data("submenu-id");
    $(".header_gnb_layer .submenu .submenu-contents").hide();
    $("#"+submenu_id).show();

    $(".header_gnb_layer .mainmenu").fadeOut('250', function(){
        $(".header_gnb_layer .submenu").fadeIn('250');
    });
}

function backToMainmenu(){
    $(".header_gnb_layer .submenu").fadeOut('250',function(){
        $(".header_gnb_layer .mainmenu").fadeIn('250');
    });
}