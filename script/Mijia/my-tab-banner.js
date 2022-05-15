/*
米家 - 我的 去除 Banner
^https:\/\/home\.mi\.com\/cgi-op\/api\/v1\/recommendation\/myTab
hostname = home.mi.com
*/
console.log("🎉 米家 - 我的 => 去除 Banner 脚本执行 -- 开始");
let { body } = $response;
const response = JSON.parse(body);
response.data.banners = [];
body = JSON.stringify(response);
console.log("🎉 米家 - 我的 => 去除 Banner 脚本执行 -- 结束");
$done({ body });
// $done() 后的代码都不会执行