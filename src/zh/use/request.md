## 如何接收请求信息

在前面的章节中，我们提到了接收请求信息，并用到了一个基本方法

```dart
String text = ctx.getString('text');
```

这是接收一个字符串参数。

实际上接收请求参数的方法，一共有7个，分别如下：

| 名称              | 作用            | 值例子       | 默认值       |
| ------------------|----------------| ------------|------------|
| getString         | 获取字符串参数  |  hello world |             |
| getInt            | 获取整形数      |  11, -10     |  0          |
| getPositiveInt    | 获取整形数,正数 |  11          |  0          |
| getNegativeInt    | 获取整形数,负数 |  -10         |  0          |
| getDouble         | 获取浮点数      |  1.1, -3.1   |  0          |
| getPositiveDouble | 获取浮点数,正数 |  1.1         |  0          |
| getNegativeDouble | 获取浮点数,负数 |  -3.1        |  0          |
| getUploadFile     | 获取上传文件    |              |             |

注意：

1. 如果通过上述方法获取不到相应的参数值，将会返回默认值
2. `Dart` 里的浮点数，就只有 `Doulbe` 类型。没有其他语言里的 `Float`, `Double` 之分

## 如何修改默认值

上述方法，都有默认值。

在一些情况下，我们需要修改默认值，比如客户端查询一个信息列表，通常会传过过来一个分页数量的参数 `pageSize` ，表示这次请求需要返回多少条数据。

如果写成这样
```dart
int pageSize = ctx.getPositiveInt('pageSize');
```
那么它的默认值即是 `0`， 也就是说如果找不到传入的参数 `pageSize`, 或者传入的参数 `pageSize` 不是正整数的情况下，返回值将是 `0`，显然这不符合我们的需求。

像下面这样做
```dart
int pageSize = ctx.getPositiveInt('pageSize', def: 20);
```
可以多传入一个命名参数 `def`，表示默认值是 `20`，即可符合我们的需求。

其他方法，也有这样的参数，如果需要，可以使用他们。

## 从什么地方获取参数

一次客户端请求，参数可能来自于以下类型

1. 请求头 header
2. 请求体 body
3. 会话 session
4. cookie
5. url

默认情况下，当我们使用类似于 `ctx.getString` 方法，获取到的参数，来自于上述所有类型的全部集合。

如果需要指定获取参数的类型，可以使用命名参数 `from`，例如

```dart
ctx.getString('text', from: 0);   //从全部参数里找text   
ctx.getString('text', from: 1);   //从请求头header里找   
ctx.getString('text', from: 2);   //从url的查询参数里找   
ctx.getString('text', from: 3);   //从请求体body里找   
ctx.getString('text', from: 4);   //从session里找   
ctx.getString('text', from: 5);   //从cookie里找   
ctx.getString('text', from: 6);   //从自定义参数集合里找  
```

其他方法，也有这样的参数，如果需要，可以使用他们。