/**
 * @fileoverview Example of HTTP rewrite.
 *
 * @supported Quantumult X (v1.0.5-build173)
 */

// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body
//
// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.
//
// setTimeout(function() { console.log("abc"); }, 1000);
//
// You can optional change the response headers at the same time by using $done({body: modifiedBody, headers: modifiedHeaders}); only change the response headers is not allowed for script-response-body. The modifiedHeaders can be copied and modified from $response.headers, please do not change the content length, type and encoding field.
// Response status can also be optional changed by using $done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus}), the modifiedStatus should be like "HTTP/1.1 200 OK"

var body = $response.body;
try
{
  var data = JSON.parse(body);
  
  data[0].content[1].data = data[0].content[1].data.filter(item => item.functionId == "cf_tft_qrcode" || item.functionId == "cf_tft_recharge");
  
  data[0].navigationAll=navigationAll.filter(item => item.functionId == "home|| item.functionId == "message" || item.functionId == "me");
  
  changedBody = JSON.stringify(json);
  console.log(changedBody);
  $notify("结果","",changedBody);
}
catch(ex)
{
   console.log(ex.message);
   $notify("异常","",ex.message);
}
body={};
$done(body);
