const hashLine = "###########"
console.log(`${hashLine}🎉直连 IP 查询 ---- 开始${hashLine}`);
$httpClient.get("https://forge.speedtest.cn/api/location/info", function (error, response, data) {
  console.log("[🍎 response data ]" + '\n' + data);
  const dataObject = JSON.parse(data);
  let { country, country_code, province, city, query: ip } = dataObject;
  console.log("[ country ]-7" + country)
  country = country_code == "CN" ? "中国" : country;// 国家
  const region = `地区：${country} ${regionName} ${city}`;
  ip = `IP：${ip}`;
  const contentResult = `${ip}\n${region}`;
  console.log("[🍎 contentResult ]" + '\n'+ contentResult)
  console.log(`${hashLine}🎉直连 IP 查询 ---- 结束${hashLine}`);
  $done({
    title: "直连 IP 及所属地区",
    content: contentResult,
    backgroundColor: "#663399",
    icon: "network",
  })
})