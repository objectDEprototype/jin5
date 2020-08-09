// git请求
var ajax = new XMLHttpRequest();
ajax.open('get','getUserServlet?Name='+name);
ajax.send();
ajax.onreadystatechange = function () {
   if (ajax.readyState==4 &&ajax.status==200) {
　　　　console.log(ajax.responseText);//输入相应的内容
  　　}
}
// post请求
var xhr = new XMLHttpRequest();
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.open('post', 'postUserServlet' );
xhr.send('name=zdigi&age=18');
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  } 
};  