var smallajax = {};
smallajax.x = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];
    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {console.error(e)}
    }
    return xhr;
};
smallajax.send = function (d) {
    if (d.async === undefined) {
        d.async = !0;
    }
    var x = smallajax.x();
    x.open(d.method, d.url, d.async);
    x.onreadystatechange = function () {
        if (x.readyState === 4) {
            callback(x.response)
        }
    };
    if (d.method === 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(d.data)
};
smallajax.get = function (d) {
    var query = [];
    for (var key in d.data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(d.data[key]));
    }
    smallajax.send(d.url + (query.length ? '?' + query.join('&') : ''), d.callback, 'GET', null, d.async)
};
smallajax.post = function (d) {
    var query = [];
    for (var key in d.data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(d.data[key]));
    }
    smallajax.send(d.url, d.callback, 'POST', query.join('&'), d.async)
};
