## 如何安装DartMars

DartMars是基于Dart语言的服务端框架，因此你的计算机必须支持Dart语言环境。

如果你的计算机还没有安装Dart语言环境，请按照此指引 [如何安装Dart语言环境](#如何安装Dart语言环境)

如果你的计算机还已经安装Dart语言环境，打开你的命令行工具，键入如下内容，即可开始一个Dart服务端项目

``` 
dart pub global activate --source git https://github.com/tangpanqing/dart_mars.git
dart pub global run dart_mars --create project_name
cd project_name
dart pub global run dart_mars --get 
dart pub global run dart_mars --serve dev
```

经过以上命令，如果不出意外，你将看到命令行提示:

有一个本地HTTP服务已经开启，在80端口

此时，你也可以打开浏览器，访问本地服务器 http://127.0.0.1 或者 http://localhost 

即可看到DartMars默认输出的内容
```
hello world
```
 
## 如何安装Dart语言环境

Dart语言环境，根据不同的平台，安装方式略有不同，相同的是，安装步骤都很容易。

::: tip
如果你已经安装过Flutter开发环境，那说明你系统内已经支持Dart语言环境，因此不需要重复安装。
:::

## 在Windows平台安装Dart语言环境

如果你已经安装 Chocolatey ， 推荐使用以下命令来安装Dart语言环境

``` 
choco install dart-sdk
```

当然，你也可以通过安装包来安装Dart环境，[安装包下载地址](https://gekorm.com/dart-windows/)

## 在Linux平台安装Dart语言环境

如果你使用的是Debian/Ubuntu等系统，需要先更新apt的仓库
``` 
sudo apt-get update
sudo apt-get install apt-transport-https
sudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
```
然后安装Dart语言环境
```
sudo apt-get update
sudo apt-get install dart
```

## 在Mac平台安装Dart语言环境

如果你使用的是mac系统，可以使用homebrew来安装
```
brew tap dart-lang/dart
brew install dart
```