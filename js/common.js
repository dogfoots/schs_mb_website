function openGnbMenu(){
    $(".header_gnb_layer").fadeIn(150, function(){
        //$(".mainmenu li.active").addClass("lined");    
    });
    $('body').css('overflow','hidden');
}


function closeGnbMenu(){
    $(".header_gnb_layer").fadeOut(150);
    $('body').css('overflow','auto')
}


function goToSubmenu(ele){
    //console.log("ee : " + $(ele).parent().data("submenu-id"));
    let submenuId = $(ele).parent().data("submenu-id");
    readyGnbSubmenu(submenuId);
}

function readyGnbSubmenu(submenuId){
    $(".header_gnb_layer .submenu .submenu-contents").hide();
    $("#"+submenuId).show();

    $(".header_gnb_layer .mainmenu").fadeOut(150, function(){
        $(".header_gnb_layer .submenu").fadeIn(150);
        $(".submenu li.active").addClass("lined");    
    });   
    
    $(".submenu li").removeClass("lined");
}

function backToMainmenu(){
    $(".header_gnb_layer .submenu").fadeOut(150,function(){
        $(".header_gnb_layer .mainmenu").fadeIn(150);
    });
    $(".submenu li").removeClass("lined");
}