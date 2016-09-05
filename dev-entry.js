/**
 * Created by Admini on 2016/8/22.
 */
import Router from './utils/router.min';//引入路引器
import home from './view/home/home';//引入home模块
import list from './view/list/list';//引入list模块
var router = new Router({
    container: '#container'
})
router.push(home).push(list).setDefault('/home').init();
