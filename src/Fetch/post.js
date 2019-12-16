import 'whatwg-fetch';

export function post(url, paramsObj) {
    var result = fetch(url, {
        method:'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':'application/json'
        },
        // body:obj2params(paramsObj)
        body: JSON.stringify((paramsObj))
    });

    return result;
}

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}