/*
米家-我的 去除 Banner
http-response ^https:\/\/home.\mi.\com\/cgi-op\/api\/v1\/recommendation\/myTab.*
hostname = home.mi.com
*/
console.log('🎉 米家-我的 去除 Banner 脚本--开始--执行')
const obj = JSON.parse($response.body);
console.log('obj.module.name', obj.module.name);
obj.data.banners = []
console.log('🎉 米家-我的 去除 Banner 脚本--结束--执行')