## 如何使用路由

路由的作用是解析请求路径，并且转发到相应的控制器方法进行处理。

在 `lib/config/route.dart` 文件中，我们可以定义路由信息。

当你创建完项目后，打开该文件，我们可以看到相关的示例。

```dart
import '../bootstrap/helper/RouteHelper.dart';
import '../app/controller/HomeController.dart' as app_controller_HomeController;

///
/// don't modify this file yourself, this file content will be replace by DartMars
///
/// for more infomation, see doc about Route
///
/// last replace time 2021-06-19 10:20:26.386828
///
void configRoute() {
  RouteHelper.add('GET', '/', app_controller_HomeController.HomeController.index);
  RouteHelper.add('GET', '/user', app_controller_HomeController.HomeController.user);
  RouteHelper.add('GET', '/city/:cityName', app_controller_HomeController.HomeController.city);
}
```

请注意该文件内的提示：你自己不要修改该文件,该文件的内容会被 `DartMars` 自动替换掉
```
don't modify this file yourself, this file content will be replace by DartMars
```

## 如何添加路由规则
如示例内容所看到的，当引入路由帮助类 `RouteHelper` 后，你可以通过以下代码，添加路由规则
```dart
RouteHelper.add('GET', '/user', app_controller_HomeController.HomeController.user);
```
这里意思是：
当请求方式是 `GET` 请求,并且请求路径是 `/user` 时, 将该请求交给 `app_controller_HomeController.HomeController.user` 这个控制器方法去处理。

```dart
import '../app/controller/HomeController.dart' as app_controller_HomeController;
```
结合以上导入信息，我们可知 `app_controller_HomeController` 是 `HomeController` 类的别名。

`HomeController` 类的相对路径为 `../app/controller/HomeController.dart`


## 如何更改路由请求方式

上述的例子中，添加路由规则时，所允许的请求方式为 `GET` ,当然可以改成其他的，比如：
```dart
RouteHelper.add('POST', '/user', app_controller_HomeController.HomeController.user);
```
改成 `POST`，即表示仅接受 `POST` 请求

```dart
RouteHelper.add('POST|GET', '/user', app_controller_HomeController.HomeController.user);
```
改成 `POST|GET`，即表示同时接受 `POST` 或者 `GET` 请求

```dart
RouteHelper.add('*', '/user', app_controller_HomeController.HomeController.user);
```
改成 `*`，即表示接受所有请求方式, 即 `POST` , `GET` , `HEAD` , `PUT` , `DELETE` , `CONNECT` , `OPTIONS` , `TRACE`


## 如何匹配请求路径

如你所见，在下面的代码中
```dart
RouteHelper.add('GET', '/', app_controller_HomeController.HomeController.index);
RouteHelper.add('GET', '/user', app_controller_HomeController.HomeController.user);
RouteHelper.add('GET', '/city/:cityName', app_controller_HomeController.HomeController.city);
```

第一行, 路由路径为 `/` ，表示当请求路径为 `/` 时, 执行该路由定义的操作。   

第二行, 路由路径为 `/user` ，表示当请求路径为 `/user` 时, 执行该路由定义的操作。   

第三行, 路由路径为 `/city/:cityName` ，表示当请求路径类似于以下时, 均可执行该路由定义的操作。

```dart
/city/beijing   
/city/shanghai    
/city/newyork   
```

## 如何接收路由匹配参数

如上述，当路由路径为 `/city/:cityName` 时，可匹配类似于以下的请求路径

```dart
/city/beijing   
/city/shanghai    
/city/newyork   
```
`DartMars` 的内部处理逻辑，会将 `:city` 所对应的信息作为参数，传送给该路由所定义的控制器方法。

打开文件 `HomeController.dart` 文件，你可以看到相关内容
```dart
@RouteMeta('/city/:cityName', 'GET')
static void city(Context ctx, String cityName) async {
    ctx.html("hello " + cityName);
}
```
其中第二行中的 `cityName` 即是从请求路径中得到的参数

## 如何自动生成路由配置文件
路由配置文件的规则，可以人工添加，但是我们强烈建议不要这样做。因为项目会越来越大，路由规则会有很多，人工添加容易出错。

`DartMars` 提供了自动生成路由配置文件的功能，可以很方便的完成该工作。

你需要做的事情是，在写控制器方式时，在前面加上 `@RouteMeta`, 像这样

```dart
@RouteMeta('/city/:cityName', 'GET')
```

`@RouteMeta` 接收两个参数，第一个是路由路径，第二个是请求方式

然后，当你使用下述命令启动项目时，

```bash
dart pub global run dart_mars --serve dev
```

`DartMars` 会遍历所有 `lib/app` 文件夹下，标记有 `@RouteMeta` 的方法，将全部被写入路由配置文件。

然后命令行提示：路由配置文件已经更新。

```bash
route config file has been updated, see ./lib/config/route.dart 
```

请注意，为了使用 `@RouteMeta`, 你需要提前导入 `RouteMeta.dart`
```dart
import 'package:{package}/bootstrap/meta/RouteMeta.dart';
```
扩展阅读 [在文档中, {package} 是什么意思](https://www.baidu.com)