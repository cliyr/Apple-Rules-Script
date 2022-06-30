/**
 * @description: 国外 IP 及所属地区
 */
 function getUnDomesticInfo() {
  new Promise((resolve, reject) => {
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
      resolve(unDomesticInfo);
    }).catch(err => {
      reject(err);
      console.log('🎉国外 err: ' + err);
    })
  })
}
/**
 * @description: 整合信息，立即执行
 */
function getInfo() {
  const tileTemplate = {
    title: "当前 IP 及所属地区",
    content: '',
    backgroundColor: "#663399",
    icon: "network",
  };
  getDomesticInfo().then(domesticInfo => {
    tileTemplate.content = domesticInfo;
    $done(tileTemplate);
  });
}

getInfo();