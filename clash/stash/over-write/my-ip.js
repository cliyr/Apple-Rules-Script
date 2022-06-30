$httpClient.get("http://ip-api.com/json/?lang=zh-CN", function (error, response, data) {
  console.log('🎉国外 response data: ' + data);
  const dataObject = JSON.parse(data);
  const { country, regionName, city, query } = dataObject;
  const region = `地区：${country} ${regionName} ${city}`;
  const ip = `IP：${query}`;
  // 分割线
  const line = '----';
  // 国外 IP 信息
  const infoFlag = `${line}国外${line}`;
  const unDomesticInfo = `${infoFlag}\n${ip}\n${region}`;
  console.log('🎉contentResult: ' + contentResult);
  $httpClient.get("https://forge.speedtest.cn/api/location/info", function (error, response, data) {
    console.log('🎉国内 response data: ' + data);
    const dataObject = JSON.parse(data);
    const { country, province, city, ip } = dataObject;
    const domesticRegion = `地区：${country} ${province} ${city}`;
    const domesticIp = `IP：${ip}`;
    const infoFlag = `${line}国内${line}`;
    const domesticInfo = `${infoFlag}\n${domesticIp}\n${domesticRegion}`;
    $done({
      title: "当前 IP 及所属地区",
      content: `${unDomesticInfo}\n${domesticInfo}`,
      backgroundColor: "#663399",
      icon: "network",
    })
  });
})