console.log("🎉 米家 -  shopapi-home-page-config -- 开始");
let { body } = $response;
const response = JSON.parse(body);
response.data.default_unpacking = false
body = JSON.stringify(response);
console.log("🎉 米家 -  shopapi-home-page-config -- 结束");
$done({ body });