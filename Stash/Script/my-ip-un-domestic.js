$httpClient
  .get("http://ip-api.com/json/?lang=zh-CN", function (error, response, data) {
    console.log("🎉国外 response data: " + data);
    const dataObject = JSON.parse(data);
    const { country, regionName, city, query } = dataObject;
    const region = `地区：${country} ${regionName} ${city}`;
    const ip = `IP：${query}`;
    // 分割线
    const line = "----";
    // 国外 IP 信息
    const infoFlag = `${line}国外${line}`;
    const unDomesticInfo = `${infoFlag}\n${ip}\n${region}`;
    console.log("🎉contentResult: " + contentResult);
    $done({
      title: "代理 IP 及所属地区",
      content: `${unDomesticInfo}`,
      backgroundColor: "#663399",
      icon: "network",
    });
  })
