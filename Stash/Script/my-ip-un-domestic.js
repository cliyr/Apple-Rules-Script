const hashLine = "###########"
console.log(`${hashLine}🎉代理 IP 查询 ---- 开始${hashLine}`);
$httpClient.get("http://ip-api.com/json/?lang=zh-CN", function (error, response, data) {
  console.log("[🍎 response data ]" + '\n' + data);
  const dataObject = JSON.parse(data);
  let { country, countryCode, regionName, city, query } = dataObject;
  country = countryCode == "CN" ? "中国" : country;
  const region = `地区：${country} ${regionName} ${city}`;
  const ip = `IP：${query}`;
  const contentResult = `${ip}\n${region}`;
  console.log("[🍎 contentResult ]" + '\n'+ contentResult)
  console.log(`${hashLine}🎉代理 IP 查询 ---- 结束${hashLine}`);
  $done({
    title: "代理 IP 及所属地区",
    content: contentResult,
    backgroundColor: "#663399",
    icon: "network",
  })
})