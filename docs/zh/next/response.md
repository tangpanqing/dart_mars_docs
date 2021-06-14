## 如何返回响应信息

在前面的章节中，我们提到了返回响应信息，并用到了一个基本方法

```
ctx.html('hello world');
```

这表示返回的信息类型为 text/html; charset=utf-8 。

实际上返回响应信息的方法，一共有4个，分别如下：

| 名称   | 信息类型                         |
| -------|---------------------------------| 
| html   | text/html; charset=utf-8        | 
| text   | text/plain; charset=utf-8       |  
| json   | application/json; charset=utf-8 |  
| binary | application/octet-stream        |
