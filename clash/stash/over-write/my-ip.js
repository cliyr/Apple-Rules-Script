$httpClient.get("http://ip-api.com/json/?lang=zh-CN", function (error, response, data) {
  $done({
    title: "当前 IP",
    content: `${JSON.parse(data).city}`,
    backgroundColor: "#663399",
    icon: "network",
  })
})