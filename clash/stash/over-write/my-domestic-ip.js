/**
 * @description: 国内 IP 及所属地区
 */
 function getDomesticInfo() {
  new Promise((resolve, reject) => {
    $httpClient.get("https://forge.speedtest.cn/api/location/info", function (error, response, data) {
      console.log('🎉国内 response data: ' + data);
      const dataObject = JSON.parse(data);
      const { country, province, city, ip } = dataObject;
      const domesticRegion = `地区：${country} ${province} ${city}`;
      const domesticIp = `IP：${ip}`;
      const infoFlag = `${line}国内${line}`;
      const domesticInfo = `${infoFlag}\n${domesticIp}\n${domesticRegion}`;
      resolve(domesticInfo);
    });
  })
}
/**
 * @description: 整合信息，立即执行
 */
function getInfo() {
  const tileTemplate = {
    title: "当前国内 IP 及所属地区",
    content: '',
    backgroundColor: "#663399",
    icon: "network",
  };
  getDomesticInfo().then(domesticInfo => {
    tileTemplate.content = domesticInfo;
    $done(tileTemplate);
  })
}

getInfo();