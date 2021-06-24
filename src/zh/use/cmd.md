## 如何使用命令行工具

`DartMars` 提供了一些命令行工具，帮助快速开发应用。包括

|命令      |   作用       |
|----------|-------------|
|create    |帮助创建新项目|
|get       |帮助下拉依赖  |
|serve     |帮助启动项目  |
|compile   |帮助编译项目  |

## 如何使用DarMars创建项目

在你的工作目录下，在命令行工具中使用如下命令，将创建新项目

```bash
dart pub global run dart_mars --create project_name
```

## 如何使用DarMars启动项目

在项目目录下，在命令行工具中使用如下命令，将启动本项目，并且加载 `dev` 开发环境文件

```bash
dart pub global run dart_mars --serve dev
```

或者，你也可以使用如下命令启动项目，将加载 `test` 测试环境文件

```bash
dart pub global run dart_mars --serve test
```

或者，你也可以使用如下命令启动项目，将加载 `prod` 正式环境文件

```bash
dart pub global run dart_mars --serve prod
```

## 如何使用DarMars编译项目

## 如何更新DartMars

如果你已经安装过 `DartMars`, 重新激活 `DartMars` 即可更新

```bash
dart pub global activate --source git https://github.com/tangpanqing/dart_mars.git
```

## 如何删除DartMars

如果你已经安装过 `DartMars`, 执行下列命令可删除

```bash
dart pub global deactivate DartMars
```