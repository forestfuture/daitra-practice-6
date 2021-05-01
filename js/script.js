// drawerトリガー
$(document).ready(function() {
    $('.drawer').drawer();
  });

let drawer = $(".drawer");

// drawer-操作
$(".drawer-toggle").on("click", function() {
    $(".drawer-hamburger-icon").toggleClass("nav-open");

    if(drawer.hasClass("drawer-open")){      
        $("body").css("right", "0");
        $(".header").css("position", "fixed");
        $(".header").css("background-color", "#fff");
        $(".body-bg").css("display", "none");
        $(".drawer-hamburger").css("right", "0");
        $(".drawer-nav").css("width", "0");
        
    }else{
        $("body").css("right", "300px");
        $(".header").css("position", "relative");
        $(".header").css("background-color", "rgba(225, 225, 225, 0)");
        $(".body-bg").css("display", "block");
        $(".drawer-hamburger").css("right", "19.5rem");
        $(".drawer-nav").css("width", "80%");
    }
})

// swiper
var swiper = new Swiper('.swiper-container', {
    loop: 'true',
    slidesPerView: 'auto',
    spaceBetween: 20,

    breakpoints: {

        768: {
            slidesPerView: 'auto',
            spaceBetween: 40
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// スムーズスクロール
jQuery('a[href^="#"]').on("click", function(){
    var id = jQuery(this).attr("href");
    var position = 0;
    var headerHeight = jQuery("#js-header").innerHeight();

    if(window.matchMedia('(max-width: 766px)').matches){
        var x = 2
    }else{
        var x = 1
    }

    if(id != "#"){         
        var position = jQuery(id).offset().top - (headerHeight * x);    
    }
    
    jQuery("html, body").animate({
        scrollTop:position
    },
    800);
});

// Q & A
$(function(){
    for(var i = 0; i < 2; i++){
        $(".faqs-box-a").eq(i).slideToggle();
    }
    
    $(".faqs-box-q").on("click", function(){
        $(this).next().slideToggle();
        $(this).children(".faqs-box-q-icon").toggleClass("is-open");    
    })
})

// scrollTop
$(window).on("scroll", function(){
     
    if(200 < $(this).scrollTop()){
        $(".to-top").css("opacity", "1");
        $(".to-top").css("visibility", "visible");
    }else{
        $(".to-top").css("opacity", "0");
        $(".to-top").css("visibility", "hidden");
    }
})

// google form
let $form = $("#js-form");
$form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp();
          $("#js-success").slideDown();
          $(".contact-title-text").text("送信完了しました。ありがとうございました。");
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp();
          $(".contact-title-text").text("送信に失敗しました。ページを更新して再度送信してください。")
        }
      } 
    });
    return false; 
  }); 

// formの入力確認
let $submit = $("#js-submit")
$( "#js-form input, #js-form textarea" ).on("change", function(){
    if(
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form input[name="entry.289872452"]').prop("checked") === true
    ) {
        // 全て入力されたとき
        $submit.prop("disabled", false)
    } else
    {
        // 入力されていないとき
        $submit.prop("disabled", true)
    }
})

// wow
// new WOW().init();

