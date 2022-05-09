/*
米家-我的 去除 Banner
http-response ^https:\/\/home.\mi.\com\/cgi-op\/api\/v1\/recommendation\/myTab.*
hostname = home.mi.com
*/
console.log('🎉 米家-我的 去除 Banner 脚本--开始--执行')
let { body } = $response;
const obj = JSON.parse(body);
console.log('obj.data.module.name', obj.data.module.name);
obj.data.banners = [];
body = JSON.stringify(obj);
$done({body});
console.log('🎉 米家-我的 去除 Banner 脚本--结束--执行')
// var body = $response.body;
// var obj = JSON.parse(body);
// delete obj.data;
// body = JSON.stringify(obj);
// $done({body});