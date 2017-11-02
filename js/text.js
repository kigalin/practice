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
for(k in screenElements){
	setScreenAnimate(k);
}

function setScreenAnimate(screenCls){
	var screen=document.querySelector(screenCls);
	var animateElements=screenElements[screenCls];

	var isAnimateInit=false;
	var isAnimateDone=false;

	screen.onclick=function(){
		if(isAnimateInit===false){
			for(var i=0;i<animateElements.length;i++){
				var element=document.querySelector(animateElements[i]);
				var baseCls=element.getAttribute('class');
				element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
			}
			isAnimateInit=true;
			return;
		}

		if(isAnimateDone===false){
			for(var i=0;i<animateElements.length;i++){
				var element=document.querySelector(animateElements[i]);
				var baseCls=element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
			}
			isAnimateDone=true;
			return;
		}

		if(isAnimateDone===true){
			for(var i=0;i<animateElements.length;i++){
				var element=document.querySelector(animateElements[i]);
				var baseCls=element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
			}
			isAnimateDone=false;
			return;
		}
	}
}