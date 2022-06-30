$httpClient.get("http://ip-api.com/json/?lang=zh-CN", function (error, response, data) {
  console.log('🎉response data: ' + data);
  const dataObject = JSON.parse(data);
  const { country, regionName, city, query } = dataObject;
  const region = `地区：${country} ${regionName} ${city}`;
  const ip = `IP：${query}`;
  const contentResult = `${ip}\n${region}`;
  console.log('🎉contentResult: ' + contentResult);
  $done({
    title: "当前 IP 及所属地区",
    content: contentResult,
    backgroundColor: "#663399",
    icon: "network",
  })
})