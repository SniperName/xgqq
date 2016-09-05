/**
 * Created by Admini on 2016/8/29.
 */
//公共库，常用方法
export default {
    getElement:function (obj) {
        return document.getElementById(obj)
    },//根据ID选择元素
    createElement:function (parent,json){
        json=json||{};
        json.count=json.count||1;//默认每次创建十条
        json.ele=json.ele||'a';//默认创建的是A标签
        for(let i=0;i<json.count;i++){
                let aObj=document.createElement(json.ele);
                aObj[json.attr]=json.attrName;
                aObj[json.domClass]=json.className;
                aObj[json.inner]=json.template;
                parent.appendChild(aObj);
        }
    },//创建元素
    removeElement:function(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
        _parentElement.removeChild(_element);
    }
},//删除元素
    getStyle:function (obj,attr) {
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
    },//获取样式
    move3:function(obj,json,options){
    options=options || {};
    options.duration=options.duration || 500;
    options.easing=options.easing || 'ease';

    obj.style.transition=options.duration+'ms all '+options.easing;

    for(var name in json){
        obj.style[name]=json[name];
    }

    function fnEnd(){
        obj.removeEventListener('transitionend',fnEnd,false);

        options.complete && options.complete.call(obj);
    }
    obj.addEventListener('transitionend',fnEnd,false);
},//CSS3动画小型框架
    preloader:function (images) {
        var aImg=document.getElementsByTagName(images),n=0,This=this;
        function scrollFn()
        {
            var winH=document.documentElement.clientHeight;
            var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;

            for(var i=0;i<aImg.length;i++)
            {
                if(aImg[i].b)continue;

                if( scrollTop+winH  >  This.getPos(aImg[i]).top  )
                {

                    //aImg[i].src=aImg[i].getAttribute('_src');

                    aImg[i].b=true;  //代表已经换过了

                    n++;
                    //是不是所有的图片都加载完了
                    if(n==aImg.length)
                    {
                        window.onscroll=null;
                    };


                    //等图片下载完再切换

                    (function(index){

                        var oImg=new Image();
                        oImg.onload=function(){

                            aImg[index].src=this.src;

                        };
                        oImg.src=aImg[i].getAttribute('_src');

                    })(i);

                };



            };
        };


        window.onscroll=function(){
            scrollFn();
        };
        scrollFn();
    },//图片预加载
    getPos:function(obj) {
    var l=0;
    var t=0;
    while(obj)
    {
        l+=obj.offsetLeft;
        t+=obj.offsetTop;
        obj=obj.offsetParent;
    };
    return {left:l,top:t};
}//找父级，返回他的left,top值
}


