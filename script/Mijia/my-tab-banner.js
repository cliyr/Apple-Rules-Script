/*
米家-我的 去除 Banner
http-response ^https:\/\/home.\mi.\com\/cgi-op\/api\/v1\/recommendation\/myTab.*
hostname = home.mi.com
*/
$.log('🎉 米家-我的 去除 Banner 脚本--开始--执行')
const obj = JSON.parse($response.body);
$.log('obj.module.name', obj.module.name);
obj.data.banners = []
$done({body: JSON.stringify(obj)});
$.log('🎉 米家-我的 去除 Banner 脚本--结束--执行')
// var body = $response.body;
// var obj = JSON.parse(body);
// delete obj.data;
// body = JSON.stringify(obj);
// $done({body});