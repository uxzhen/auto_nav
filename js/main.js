window.onload = function () {
    var clentHeight = document.documentElement.clientHeight;
    /*找到banner元素，将浏览器窗口高度赋值给他*/
    document.querySelector('.banner').style.height =
        clentHeight + 'px';
}
      /*混动条动态添加.on*/
window.onscroll = function () {
  var top = document.documentElement.scrollTop;
  if(top == 0){
      document.querySelector('header').className = '';

  }else {
      document.querySelector('header').className ='on';
  }
}