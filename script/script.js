$('.hamburger').on('click',function(){//.btn_triggerをクリックすると
  $('.hamburger').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
  $('.nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
  $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
});

$('.nav-list').on('click',function(){//ナビゲーションのリストをクリックすると//
    var w = $(window).width();
    var x = 1024;
	if( w <= x){
		$('.nav-wrapper').fadeToggle(0);//.nav-wrapperがフェードアウトして//
		$('.hamburger').toggleClass('close');//ハンバーガーメニューが三本線に//
	}else{}
});

//#fvを過ぎるとヘッダー固定//
var fv_bottom;
var header_bottom;
 
$(window).on('scroll',function(){     
    fv_bottom = $('#fv').height();
    header_bottom = $('.header').height();
    if($(window).scrollTop() > fv_bottom - header_bottom ){
       	$('.header').addClass('fixed');   
    }
    else{
        $('.header').removeClass('fixed');   
    }
});
 
$(window).trigger('scroll');

$(function(){
	setInterval(function(){
		var judge01 = $('#fv').hasClass('fv-bgi-01');
		var judge02 = $('#fv').hasClass('fv-bgi-02');
		if(judge01 == true){
			$('#fv').removeClass('fv-bgi-01');
			$('#fv').addClass('fv-bgi-02');
		}
		else if(judge02 == true){
			$('#fv').removeClass('fv-bgi-02');
			$('#fv').addClass('fv-bgi-03');
		}else{
			$('#fv').removeClass('fv-bgi-03');
			$('#fv').addClass('fv-bgi-01');
		}
	},7000);
});

