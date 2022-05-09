/*
米家-我的 去除 Banner
http-response ^https:\/\/home.\mi.\com\/cgi-op\/api\/v1\/recommendation\/myTab.*
hostname = home.mi.com
*/

const obj = JSON.parse($response.body);
obj.data.banners = []