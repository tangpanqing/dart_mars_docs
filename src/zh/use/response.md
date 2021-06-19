## 如何返回响应信息

在前面的章节中，我们提到了返回响应信息，并用到了一个基本方法

```dart
ctx.html('hello world');
```

这表示返回的信息类型为 `text/html; charset=utf-8`

实际上返回响应信息的方法，一共有4个，分别如下：

| 名称   | 信息类型                         |
| -------|---------------------------------| 
| html   | text/html; charset=utf-8        | 
| text   | text/plain; charset=utf-8       |  
| json   | application/json; charset=utf-8 |  
| binary | application/octet-stream        |

如果你需要返回 `html` 格式的网页信息，可使用 `ctx.html` 方法

如果你需要返回 `json` 格式的信息给客户端请求，可使用 `ctx.json` 方法

## 如何返回json序列化信息

在实际开发过程中，我们需要返回给客户端固定结构的 `json` 数据，比如
```json
{
    "code":200,
    "msg":"请求成功",
    "data":{
        "name":"tom"
    }
}
```

你可以使用 `ctx.json`

```dart
ctx.json(jsonEncode({
    "code":200,
    "msg":"请求成功",
    "data":{
        "name":"tom"
    } 
}));
```

更方便的，你可以使用 `ctx.showSuccess`

```dart
ctx.showSuccess("请求成功", {
    "name":"tom"
});
```

如果失败的话，你可以使用 `ctx.showError`

```dart
ctx.showError("请求失败");
```
