const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.githubco.kr/book/bookList.aspx?sercrate1=001001000#anchor');
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));
console.log('--------------------------------------');

const parsedUrl = url.parse('http://www.githubco.kr/book/bookList.aspx?sercrate1=001001000#anchor');
console.log('url.parse(): ', parsedUrl);
console.log('url.format(): ', url.format(parsedUrl));