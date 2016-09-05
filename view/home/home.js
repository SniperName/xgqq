/**
 * Created by Admini on 2016/8/24.
 */
import  Hammer from '../../utils/hammer';
import common from '../../utils/common';
import templateHome from 'raw!./home.html';
import templateDialog from 'raw!../dialog/confirm.html';
import templateAlert from 'raw!../dialog/alert.html';
import templateMore from 'raw!./more.html';
export default {
    url: '/home',
    className: 'home',
    render: function (){
        return new Promise(function (resolve, reject){
            resolve(templateHome+templateAlert);
        });
    },
    bind: function (){
        let aList=common.getElement('listContainer'),oPanelListItem=common.getElement('panel_list_item'),
            dialog=common.getElement('dialog-alert'), tapDialog = new Hammer(dialog),aLiItem=oPanelListItem.children;

       // oMore=common.getElement('more')
       //  oMore.addEventListener('click',function () {
       //     common.createElement(aList,{
       //         attr:'href',
       //         attrName:'javascript:void(0);',
       //         domClass:'className',
       //         className:'weui_media_box weui_media_appmsg',
       //         inner:'innerHTML',
       //         template:templateMore
       //     })
       // },false);
        // for(let i=0;i<aLiItem.length;i++){
        //     new Hammer(aLiItem[i]).on('panleft panright',function (ev) {
        //         if(ev.type=='panleft'){
        //         console.log(ev.type)
        //         common.move3(aLiItem[i],{webkitTransform:'translate(-'+document.documentElement.clientWidth/3+'px)'},{duration:100,complete:function () {
        //         }});
        //         };
        //         if(ev.type=='panright'){
        //             console.log(ev.type)
        //             common.move3(aLiItem[i],{webkitTransform:'translate(0)'},{duration:100,complete:function () {
        //             }});
        //         }
        //     })
        //
        // }
        oPanelListItem.addEventListener('click',function (ev) {
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if(target.nodeName.toLowerCase() == "img"){
                alert(target.outerHTML)
                ev.preventDefault();
            }
            if(target.nodeName.toLowerCase()=='i'){
                ev.cancelBubble=true; //取消冒泡
                common.move3(dialog,{webkitTransform:'translate(0)'},{duration:300,complete:function(){
                    //   move3(this,{height:'300px'})
                   // window.location.href='http://m.xgqq.com/index.html#find/view~id=125&showHeader=0';
                }});
               /// common.removeElement(target.parentNode.parentNode)//
                ev.preventDefault();
            }
        },false)
        tapDialog.on("tap", function(ev) {
            common.move3(dialog,{webkitTransform:'translate(-100%)'},{duration:300});
            ev.preventDefault();
        });
    }
}
