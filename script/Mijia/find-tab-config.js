console.log("🎉 米家 - 发现页 -- 开始");
let { body } = $response;
const response = JSON.parse(body);
response.data
console.log("🚩[ response.data ]-5", response.data)
body = JSON.stringify(response);
console.log("🎉 米家 - 发现页 -- 结束");
$done({ body });