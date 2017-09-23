//顶部导航鼠标悬停事件
$('.nav-left>li:nth-child(1),.nav-left>li:nth-child(3),.nav-left>li:nth-child(4)').mouseover(function(){
	$('.nav-left-menu').css('top','0');
})
$('.nav-left-menu').mouseover(function(){
	$(this).css('top','0');
})
$('.nav-left>li:nth-child(1),.nav-left>li:nth-child(3),.nav-left>li:nth-child(4)').mouseout(function(){
	$('.nav-left-menu').css('top','-600px');
})
$('.nav-left-menu').mouseout(function(){
	$(this).css('top','-600px');
})
$('.person').mouseover(function(){
	$('.person-menu').css('display','block');
})
$('.person-menu').mouseover(function(){
	$(this).css('display','block');
})
$('.person').mouseout(function(){
	$('.person-menu').css('display','none');
})
$('.person-menu').mouseout(function(){
	$(this).css('display','none');
})


//顶部菜单栏关闭
$('.closed').click(function(){
	$('.nav-left-menu').css('top','-600px');
})


//搜索按钮的阻止冒泡事件
$('.inp i').mouseover(function(e){
	$(this).css({'box-shadow': '0 0 2px 2px #4178be','color': '#3b6caa'})
	if(e.stopPropagation()){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
})
$('.inp i').mouseout(function(){
	$(this).css({'box-shadow':'none'})
})
$('.inp').mouseover(function(){
	$(this).css({'box-shadow': '0 0 2px 2px #4178be','color': '#3b6caa'})
})
$('.inp').mouseout(function(){
	$(this).css({'box-shadow': 'none'})
})


//右侧菜单关闭
$('.nav-head i').click(function(){
	$('.right-nav').animate({right:'-580px'});
	$('.shade').css('display','none')
})
$('.shade').click(function(){
	$('.right-nav').animate({right:'-580px'});
	$('.shade').css('display','none')
})
//右侧菜单打开
$('.open-menu').click(function(){
	$('.right-nav').animate({right:'0'});
	$('.shade').css('display','block')
})
//右侧菜单项展开
var isShow_o = true;
var isShow_t = true;
var isShow_th = true;
$('.item-menu.item-menu-o').click(function(){
	$(this).siblings('.dropdown-menu').slideToggle("speed");
	if(isShow_o){       
		$(this).siblings('i').html('&#xe600;');
		$(this).css({'background-color':'#3b6caa','font-weight':'300','color':'#fff'});
		isShow_o = false;
	}else{
		$(this).siblings('i').html('&#xe62d;');
		isShow_o = true; 
		$(this).css({'background-color':'#ffffff','font-weight':'bold','color':'#000'});
	}
})

$('.item-menu.item-menu-t').click(function(){
	$(this).siblings('.dropdown-menu').slideToggle("speed");
	if(isShow_t){       
		$(this).siblings('i').html('&#xe600;');
		$(this).css({'background-color':'#3b6caa','font-weight':'300','color':'#fff'});
		isShow_t = false;
	}else{
		$(this).siblings('i').html('&#xe62d;');
		isShow_t = true; 
		$(this).css({'background-color':'#ffffff','font-weight':'bold','color':'#000'});
	}
})

$('.item-menu.item-menu-th').click(function(){
	$(this).siblings('.dropdown-menu').slideToggle("speed");
	if(isShow_th){       
		$(this).siblings('i').html('&#xe600;');
		$(this).css({'background-color':'#3b6caa','font-weight':'300','color':'#fff'});
		isShow_th = false;
	}else{
		$(this).siblings('i').html('&#xe62d;');
		isShow_th = true; 
		$(this).css({'background-color':'#ffffff','font-weight':'bold','color':'#000'
		});
	}
})

//页面滚动出现锚点
window.onload = function(){
	var bh = $('body').height();
	$(window).scroll(function(){
		var h = $(this).scrollTop();
		if(h>bh){
			$('.back-top').stop().animate({right:'30px'});
		}else{
			$('.back-top').stop().animate({right:'-42px'});
		}
	})
}
