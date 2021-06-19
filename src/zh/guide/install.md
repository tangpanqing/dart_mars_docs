## 如何安装DartMars

`DartMars` 是基于 `Dart` 语言的服务端框架，因此你的计算机必须支持 `Dart` 语言环境。

如果你的计算机还没有安装 `Dart` 语言环境，请按照此指引 [如何安装Dart语言环境](#如何安装Dart语言环境)

如果你的计算机还已经安装 `Dart` 语言环境，打开你的命令行工具，键入如下内容，即可开始一个 `Dart` 服务端项目

```bash
dart pub global activate --source git https://github.com/tangpanqing/dart_mars.git
dart pub global run dart_mars --create project_name
cd project_name
dart pub global run dart_mars --get 
dart pub global run dart_mars --serve dev
```

经过以上命令，如果不出意外，你将看到命令行提示:

```bash
Http Server has start, port=80
Env type is dev
Open browser and vist http://127.0.0.1:80 , you can see some info
```

此时，你也可以打开浏览器，访问本地服务器 http://127.0.0.1 或者 http://localhost 

即可看到 `DartMars` 默认输出的内容
```html
hello world
```
 
## 如何安装Dart语言环境

 `Dart` 语言环境，根据不同的平台，安装方式略有不同，相同的是，安装步骤都很容易。

::: tip
如果你已经安装过 `Flutter` 开发环境，那说明你系统内已经支持 `Dart` 语言环境，因此不需要重复安装。
:::

## 在Windows平台安装Dart语言环境

如果你已经安装 `Chocolatey` ， 推荐使用以下命令来安装 `Dart` 语言环境

```bash
choco install dart-sdk
```

当然，你也可以通过安装包来安装 `Dart` 环境，[安装包下载地址](https://gekorm.com/dart-windows/)

## 在Linux平台安装Dart语言环境

如果你使用的是 `Debian` / `Ubuntu` 等系统，需要先更新 `apt` 的仓库

```bash
sudo apt-get update
sudo apt-get install apt-transport-https
sudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
```

然后安装 `Dart` 语言环境

```bash
sudo apt-get update
sudo apt-get install dart
```

## 在Mac平台安装Dart语言环境

如果你使用的是 `mac` 系统，可以使用 `homebrew` 来安装

```bash
brew tap dart-lang/dart
brew install dart
```