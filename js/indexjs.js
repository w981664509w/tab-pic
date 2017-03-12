// JavaScript Document
window.onload=function(){
	var oDiv=document.getElementById('pic');
	var oImg=oDiv.getElementsByTagName('img')[0];
	var oBtn1=document.getElementById('span1');
	var oBtn2=document.getElementById('span2');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	
	var num=0;
	var timer=null;
		
	var arrImg=['img/t1.jpg','img/t2.jpg','img/t3.jpg','img/t4.jpg','img/t5.jpg'];
	
	for(var i=0;i<arrImg.length;i++){
		oUl.innerHTML +='<li></li>';	
	}	
	
	
	setTimeout(moveTab,2000);
	oDiv.onmouseover=function(){
		clearInterval(timer);	
	};
	oDiv.onmouseout=moveTab;
	oBtn1.onclick=function(){
		num--;
		if(num==-1){
			num=arrImg.length-1;	
		}
		fnTab();
	};
	
	oBtn2.onclick=function(){
		num++;
		if(num==arrImg.length){
			num=0;	
		}
		fnTab();
	};
	
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			num=this.index;
			fnTab();
		}	
	}
	
	function fnTab(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].className='';	
		}
		oImg.src=arrImg[num];
		aLi[num].className='active';		
	};
	
	function moveTab(){
		timer=setInterval(function(){
			num++;
			num%=arrImg.length;
			fnTab();	
		},2000);
	};
	
};