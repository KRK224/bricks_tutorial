var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();

var FormData = require('form-data');
var formData = new FormData();
formData.append('name', 'zerocho');
formData.append('birth', 1994);
xhr.onreadystatechange = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200 || xhr.status === 201) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.responseText);
    }
  }
};

xhr.open("POST", "https://www.zerocho.com/api/post/formdata");
xhr.send(formData);
