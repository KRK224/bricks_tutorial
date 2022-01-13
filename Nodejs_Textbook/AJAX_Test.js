var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === xhr.DONE) {
    if(xhr.status===200 || xhr.status ===201){
      console.log(xhr.responseText);
    }else {
      console.log(xhr.responseText);
    }
  }
};
xhr.open('GET', 'https://www.zerocho.com/api/get');
xhr.send();