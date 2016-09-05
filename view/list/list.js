/**
 * Created by Admini on 2016/8/22.
 */
//var data=require('../data/data');
import common from '../../utils/common';
import templateList from 'raw!./list.html';
export default {
    url: '/list',
    className: 'list',
    render: function (){
        return new Promise(function (resolve, reject){
            resolve(templateList);
        });
    },
    bind: function (){
        common.preloader('img');//图片预加载



    }
}


