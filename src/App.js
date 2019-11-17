import React from 'react';
import './assets/css/index.less';
import img from './assets/img/activity.png';

const openAlipay = () => {
  window.location.href = 'https://www.alipay.com';
}
const App = () => {
  return (
    <div className="main">

      <img src={ img } width="100%" />

      <a href="https://www.baidu.com" target="_blank" className="area1"></a>
      <a href="https://www.qq.com" target="_blank" className="area2"></a>
      <a href="https://www.163.com" target="_blank" className="area3"></a>

      <a href="#" target="_blank" className="area4">
        <p className="area5" onClick={ openAlipay }></p>
      </a>

    </div>
  )
}

export default App;