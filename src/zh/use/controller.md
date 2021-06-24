## 如何使用控制器

控制器，负责处理路由转发过来的请求，并且返回处理的结果。

默认情况下，当你使用命令行工具，成功创建一个项目后，在项目的 `lib/app/controller` 文件夹，会自动创建一个名字为 `HomeController`，这是一个示例控制器，它的基本代码如下

```dart
import 'package:project_name/bootstrap/Context.dart';
import 'package:project_name/bootstrap/meta/RouteMeta.dart';

class HomeController {
  @RouteMeta('/', 'GET')
  static void index(Context ctx) async {
    ctx.html("hello world");
  }

  @RouteMeta('/other', 'GET')
  static void other(Context ctx) async {
    String text = ctx.getString('text');
    // some other code
    ctx.html("get som text from web : " + text);
  }
}
```

非常简单的一个示例。我们来认识一下它们。

## 如何导入依赖
```dart
import 'package:project_name/bootstrap/Context.dart';
import 'package:project_name/bootstrap/meta/RouteMeta.dart';
```

依赖是指当前文件所需要的外部功能文件。上面的代码，导入了两个依赖。

`Context.dart` 文件里，定义的有 `Context` 类，它提供了一些接收信息的方法，以及输出信息的方法。

`RouteMeta.dart` 文件里，定义的有 `RouteMeta` 类，它是一种修饰，来提醒开发者或者程序，因该以什么请求方式，什么请求路径，才能访问它所修饰的代码快。

## 什么是控制器类和方法

```dart
class HomeController {
```

这一行告诉我们，这个文件定义了一个控制器类，名字为 `HomeController`。 这个名字以 `Controller` 为结尾，是一种约定俗成的写法。


```dart
static void index(Context ctx) async {
// ...
static void other(Context ctx) async {
```

这两行，即是定义了两个方法，名字分别是 `index` 和 `other` 。 其中有一些关键字，需要说明：

关键字 `static` 告诉我们，他们是静态方法。

也就是说，我们可以使用 `HomeController.index` 和 `HomeController.other` 直接使用他们。

关键字 `void` 告诉我们，这两个方法只是处理代码流程，并不返回信息。

关键字 `async` 告诉我们，这两个方法支持异步处理。

::: tip
`staic`, `void`, `async` 这三各关键字对于一个控制器的方法非常重要，千万不要忘记他们。
:::

## 简单的请求和响应

上面的 `index` 方法，里面只有一行代码

```dart
ctx.html("hello world");
```

它的意思是，输出一句话 `hello world` 给浏览器请求。输出的内容类型是 `hmtl` 类型。

上面的 `other`，里面有三行代码

```dart
String text = ctx.getString('text');
// some other code
ctx.html("get som text from web : " + text);
```

它的意思是，接收请求参数 `text`, 并且再输出一句话给浏览器。

其中 `ctx.getString('text')` 即是接收请求参数的，

它表明接收的参数名字是 `text`，接收的参数类型是 `String`, 也就是字符串

接收请求信息，返回响应信息，相关的内容还有很多，在接下来的两节里，我们将深入认识他们。