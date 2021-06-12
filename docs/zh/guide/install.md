## 安装DartMars

打开你的命令行工具，键入如下内容，即可开始一个Dart服务端项目

``` 
//安装dart环境,各平台略有不同，以下有说明
brew install dart
dart pub global activate --source git https://github.com/tangpanqing/dart_mars.git
dart pub global run dart_mars --create project_name
cd project_name
dart pub global get 
dart pub global run dart_mars --serve dev
```

经过以上命令，如果不出意外，你将看到命令行提示:

有一个本地HTTP服务已经开启，在80端口

此时，你也可以打开浏览器，访问本地服务器 http://127.0.0.1 

即可看到DartMars默认输出的内容

## 安装Dart环境的各平台差异
