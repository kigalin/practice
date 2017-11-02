// 获取元素
var getElem=function(selector){
	return document.querySelector(selector)
}
var getElemAll=function(selector){
	return document.querySelectorAll(selector)
}

// 获取元素的样式
var getCls=function(element){
	return element.getAttribute('class')
}

// 设置元素的样式
var setCls=function(element,cls){
	return element.setAttribute('class',cls)
}

// 为元素添加样式
var addCls=function(element,cls){
	var baseCls=getCls(element)
	if(baseCls.indexOf(cls)===-1){
		setCls(element,baseCls+' '+cls)
	}
	return 
}

// 为元素删减样式
var delCls=function(element,cls){
	var baseCls=getCls(element)
	if(baseCls.indexOf(cls)!=-1){
		setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '))
	}
	return 
}

// 需要设置动画的元素
var screenElements={
	'.screen-1':[
	'.screen-1__heading-h2',
	'.screen-1__heading-span',
	],
	'.screen-2':[
	'.screen-2__heading-h2',
	'.screen-2__heading-span',
	'.screen-2__heading-hr',
	'.screen-2__image-1',
	'.screen-2__image-2',
	'.screen-2__image-3',
	],
	'.screen-3':[
	'.screen-3__heading-h2',
	'.screen-3__heading-span',
	'.screen-3__heading-hr',
	'.screen-3__image',
	'.screen-3__icon-item-1',
	'.screen-3__icon-item-2',
	'.screen-3__icon-item-3',
	'.screen-3__icon-item-4',
	'.screen-3__icon-item-5',
	],
	'.screen-4':[
	'.screen-4__heading-h2',
	'.screen-4__heading-span',
	'.screen-4__heading-hr',
	'.screen-4__feature-item-img-1',
	'.screen-4__feature-item-img-2',
	'.screen-4__feature-item-img-3',
	'.screen-4__feature-item-img-4',
	],
	'.screen-5':[
	'.screen-5__heading-h2',
	'.screen-5__heading-span',
	'.screen-5__heading-hr',
	'.screen-5__img',
	],
}

 //  为所有元素设置 init
 window.onload=function(){
 	for(k in screenElements){
 		if(k==='.screen-1'){
 			continue
 		}
 		setScreenAnimateInit(k);
 	}
 }

//  初始化样式
function setScreenAnimateInit(screenCls){
	var animateElements=screenElements[screenCls];
	for(var i=0;i<animateElements.length;i++){
		var element=document.querySelector(animateElements[i]);
		var baseCls=element.getAttribute('class');
		element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
	}
}

//  切换 init -> done
function setScreenAniMateDone(screenCls){
	var animateElements=screenElements[screenCls];
	for(var i=0;i<animateElements.length;i++){
		var element=document.querySelector(animateElements[i]);
		var baseCls=element.getAttribute('class');
		element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
	}
}

// 自动播放第一屏动画
setTimeout(function(){setScreenAniMateDone('.screen-1');},300)

var navItems=getElemAll('.header__nav_item')
var toolItems=getElemAll('.toolbar-item')

// 设置导航条元素选中状态
var setNavActive=function(idx){
	for(var i=0;i<navItems.length;i++){
		delCls(navItems[i],'header__nav_status_active')
	}
	addCls(navItems[idx],'header__nav_status_active')

	for(var i=0;i<toolItems.length;i++){
		delCls(toolItems[i],'toolbar-item_status_active')
	}
	addCls(toolItems[idx],'toolbar-item_status_active')
}
setNavActive(0)

// 设置滚屏高度播放动画
window.onscroll=function(){
	var top=document.body.scrollTop
	if(top>0){
		setNavActive(0)
	}
	if(top>640-80){
		setScreenAniMateDone('.screen-2')
		setNavActive(1)
	}
	if(top>640*2-80){
		setScreenAniMateDone('.screen-3')
		setNavActive(2)
	}
	if(top>640*3-80){
		setScreenAniMateDone('.screen-4')
		setNavActive(3)
	}
	if(top>640*4-80){
		setScreenAniMateDone('.screen-5')
		setNavActive(4)
	}

// 设置导航条固定样式
if(top>60){
	addCls(getElem('.header'),'header_status_active')
	addCls(getElem('.toolbar'),'toolbar_animate_done')
}
else{
	delCls(getElem('.header'),'header_status_active')
	delCls(getElem('.toolbar'),'toolbar_animate_done')
}
}

// 导航点击跳转
var setNavJmup=function(i,lib){
	lib[i].onclick=function(){
		document.body.scrollTop=i*640
	}
}
for(var i=0;i<navItems.length;i++){
	setNavJmup(i,navItems)
}
for(var i=0;i<toolItems.length;i++){
	setNavJmup(i,toolItems)
}

// 滑动门
var navTip=getElem('.header__nav-tip')
var setTip=function(i,lib){
	lib[i].onmouseover=function(){
		navTip.style.left=(i*96)+'px'
	}
	var currentIdx=0
	lib[i].onmouseout=function(){
		for(var i=0;i<lib.length;i++){
			if(getCls(lib[i]).indexOf('header__nav_status_active')>-1){
				currentIdx = i;
				break;
			}
		}
		navTip.style.left = ( currentIdx * 96 )+'px';
	}
}

for(var i=0;i<navItems.length;i++){
	setTip(i,navItems)
}