var heima = {
    ajax: function ajax(options) {
        // 实例化ajax对象 小黄人
        var xhr = new XMLHttpRequest()
        // 设置请求的方法和地址
        if (options.type == "get") {
            options.url += "?";
            options.url += options.data;
        }
        xhr.open(options.type, options.url)
        // post的请求 设置请求头
        if (options.type == "post") {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        }
        // 注册回调函数
        xhr.onload = function () {
            options.callback(xhr.responseText);
        }
        // 发送请求 post的 数据在send中传递
        if (options.type = "post") {
            xhr.send(options.data);
        } else {
            xhr.send();
        }
    },
}