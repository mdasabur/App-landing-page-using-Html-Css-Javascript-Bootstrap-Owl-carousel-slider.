$(window).on("load",function(){
/* -------------------- preloader -------------------*/ 
    $(".preloader").fadeOut("slow");
});





$(document).ready(function(){
/*-------------- Navbar Shirink ---------------------*/ 
$(window).on("scroll", function(){
    if($(this).scrollTop() > 90 ){
        $(".navbar").addClass("navbar_shrink");  
    }
    else{
        $(".navbar").removeClass("navbar_shrink"); 
    }
})
/*-------------- video popup ------------------------*/ 
    const videoSrc=$("#player_1").attr("src");
    $(".video-play-button, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player_1").attr("src", "");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player_1").attr("src")== ""){    
            $("#player_1").attr("src", videoSrc);
            }
        }
       
    });
     /*---------------------- feature carousel -----------------------*/ 
     $('.feature-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
          
               
            },
            600:{
                items:2,
                
                
            },
            1000:{
                items:3,
               
            }
        }
    });

    /* ----------------- screenshot carousel ------------------*/ 
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
          
               
            },
            600:{
                items:2,
                
                
            },
            1000:{
                items:4,
               
            }
        }
    });
      /* ----------------- testimonials carousel ------------------*/ 
      $('.testimonials-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
          
               
            },
            600:{
                items:2,
                
                
            },
            1000:{
                items:3,
               
            }
        }
    });
      /* ----------------- team carousel ------------------*/ 
      $('.team-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
          
               
            },
            600:{
                items:2,
                
                
            },
            1000:{
                items:3,
               
            }
        }
    });
    /*------------------------- scrollit -----------------------*/ 
    $.scrollIt({
        topOffset: -50
    });
/*--------------------------------- navbar vollapse -------------------*/ 
  $(".nav-link").on("click", function(){
    $(".navbar-collapse").collapse("hide");

  });

/* -------------- toggle theme light and dark mode -------------------------*/   
function toggleTheme(){  
if(localStorage.getItem("cade-theme")!== null){
    if(localStorage.getItem("cade-theme")=== "dark"){
        $("body").addClass("dark");
    }
    else{
        $("body").removeClass("dark");
    }
}
updateIcon();

}
toggleTheme();
$(".toggle-theme").on("click", function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
     localStorage.setItem("Cade-theme", "dark");
    }
    else{
        localStorage.setItem("Cade-theme", "light");
    }
    updateIcon(); 
});
function updateIcon(){
    if($("body").hasClass("dark")){
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
    }
    else{
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
    }
}

});
