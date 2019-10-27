import './assets/css/index.less';
import img from './assets/img/timg.jpg';

var imgs = '<img src="'+img+'" width="100%" />';
var block1 = '<a href="https://www.baidu.com" target="_blank" class="block1"><div class="child">我是子级</div></a>';
var block2 = '<a href="https://www.qq.com" target="_blank" class="block2"></a>'
var block3 = '<a href="https://www.163.com" target="_blank" class="block3"></a>'

var res = imgs + block1 + block2 + block3;

document.getElementById('app').innerHTML = res;
