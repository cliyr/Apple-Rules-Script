console.log("🎉 米家 - 发现页 -- 开始");
console.log($response.body)
console.log(`$response.body -- ${$response.body}` )
let { body } = $response;
const response = JSON.parse(body);
console.log(`🚩[ response.data.findTabSwitch ]", ${response.data.findTabSwitch}`)
// response.data.findTabSwitch = false;
response.data.findTabAccess.findTab = false;
body = JSON.stringify(response);
console.log("🎉 米家 - 发现页 -- 结束");
$done({ body });