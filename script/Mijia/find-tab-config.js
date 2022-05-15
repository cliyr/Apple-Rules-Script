console.log("🎉 米家 - 发现页 -- 开始");
let { body } = $response;
const response = JSON.parse(body);
console.log("[ response ]-5", JSON.stringify(response))
console.log("🚩[ response.data.findTabSwitch ]-5", response.data.findTabSwitch)
body = JSON.stringify(response);
console.log("🎉 米家 - 发现页 -- 结束");
$done({ body });