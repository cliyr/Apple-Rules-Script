/**
 * App龙珠抽取
 */

const method = `POST`;
const ua=``;
const authtoken = ``;
const cookie = ``;
const xgaiaapikey = ``;
const dxRiskToken = ``;
const channel='';
const body = ``;
const bucode=``;

//API格式：longfor_lottery.js#authtoken=AAA&cookie=BBB&gaiaapikey=CCC&DXRiskToken=DDDD&iswx=1
const sourceUrl = new URL(sourcePath);
const sourceHash = sourceUrl.hash;
// 获取脚本参数
const scriptParams = new URLSearchParams(sourceHash.substring(1));

if (scriptParams.has("authtoken")) {
    authtoken = scriptParams.get("authtoken");
}
else
{
    $notify("龙湖Gallery", "龙珠抽取", `没有参数：authtoken`);
}
if (scriptParams.has("cookie")) {
    cookie = scriptParams.get("cookie");
}
else
{
    $notify("龙湖Gallery", "龙珠抽取", `没有参数：cookie`);
}
if (scriptParams.has("gaiaapikey")) {
    xgaiaapikey = scriptParams.get("gaiaapikey");
}
else
{
    $notify("龙湖Gallery", "龙珠抽取", `没有参数：gaiaapikey`);
}
if (scriptParams.has("DXRiskToken")) {
    dxRiskToken = scriptParams.get("DXRiskToken");
}
else
{
    $notify("龙湖Gallery", "龙珠抽取", `没有参数：DXRiskToken`);
}
if (scriptParams.has("iswx")) {
   const iswx = scriptParams.get("iswx");
   if(iswx == '1')
    {
        ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x1800323d) NetType/WIFI Language/zh_CN miniProgram/wx50282644351869da';
        channel='C2';
        bucode=`C20400`;
        body = `{"component_no":"CE13Q42B02A04I6W","activity_no":"AP25Z07390KXCWDP"}`;
    }
    else
     {
       ua = `Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 &MAIAWebKit_iOS_com.longfor.supera_1.16.8_202508121148_Default_3.2.4.9`;
       channel='L0';
       bucode=`L00602`;
       body = `{"component_no":"CC16118V10V3U9HA","activity_no":"AP25F082V945THJE"}`;
     }
}
else
{
    $notify("龙湖Gallery", "龙珠抽取", `没有参数：iswx`);
}

const headers = {
'x-gaia-api-key' : xgaiaapikey,
'X-LF-DXRisk-Token' : dxRiskToken,
'Cookie' : cookie,
'authtoken' : authtoken,
'User-Agent' : ua,
'bucode' : bucode,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `gw2c-hw-open.longfor.com`,
'Origin' : `https://llt.longfor.com`,
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'channel' : `L0`,
'Sec-Fetch-Site' : `same-site`,
'Content-Type' : `application/json`,
'Referer' : `https://llt.longfor.com/`,
'X-LF-DXRisk-Source' : `2`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/plain, */*`,
'Sec-Fetch-Mode' : `cors`
};

const signRequest = {
    url: `https://gw2c-hw-open.longfor.com/llt-gateway-prod/api/v1/activity/auth/lottery/sign`,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(signRequest).then(response1 => {
    try 
    {
        const result1 = JSON.parse(response1.body);         
        // 检查签到的返回码
        if (result1.code !== "0000") 
        {
            // 签到失败，推送通知
            $notify("龙湖Gallery", "龙珠抽取", `签到失败: ${result1.message || response1.body}`);
            $done();
            return;
        }        
        // 签到成功，继续抽取
        const clickRequest = {
            url: "https://gw2c-hw-open.longfor.com/llt-gateway-prod/api/v1/activity/auth/lottery/click",            
            method: method,
            headers: headers,
            body: body
        };      
      
        //执行抽取流程
        $task.fetch(clickRequest).then(response2 => {
            try
            {
                const result2 = JSON.parse(response2.body);
                
                if (result2.code === "0000") {
                    // 抽取成功，推送成功通知
                    const data1 = result2.data?.prize_name || "未知奖品";
                    const data2 = result2.data?.reward_num ? Number(result2.data.reward_num).toFixed(1) : "未知数据";
                    const combinedData = `抽取完成: ${data1}：${data2}`;                    
                    $notify("龙湖Gallery", "龙珠抽取", combinedData);
                } 
                else 
                {
                    // 抽取成功 API 返回错误码
                    $notify("龙湖Gallery", "龙珠抽取", `抽取失败: ${result2.message || response2.body}`);
                }
            } 
            catch (e) 
            {
                // 抽取API JSON 解析错误
                $notify("龙湖Gallery", "龙珠抽取", `抽取异常: ${e.message}`);
            }
            $done();
        }, reason2 => {
            // 第二个 API 网络请求失败
            $notify("龙湖Gallery", "龙珠抽取", `抽取请求失败: ${reason2.error}`);
            $done();
        });
        
    } 
    catch (e) 
    {
        // 签到 API JSON 解析错误
        $notify("龙湖Gallery", "龙珠抽取", `签到异常: ${e.message}`);
        $done();
    }
}, reason1 => {
    // 第一个 API 网络请求失败
    $notify("龙湖Gallery", "龙珠抽取", `签到请求失败: ${reason1.error}`);
    $done();
});
