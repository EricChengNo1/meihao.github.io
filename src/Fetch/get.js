import 'whatwg-fetch';

export function get(url) {
    var result = fetch(url, {
        credentials: 'include', //为了让浏览器发送包含凭据的请求（即使是跨域源)
        headers:{
            'Accept': 'application/json, text/plain, */*',
            "access-control-allow-origin": "http://114.67.101.40:8080",
            "access-control-allow-credentials": "true"
        }
    });

    return result;
}