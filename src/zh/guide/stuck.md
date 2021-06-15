## DartMars的结构是怎么样的

```
project                  //项目目录
|-- bin                  //入口目录
|    |-- project.dart    //入口文件(开发模式)
|    |-- project.aot     //编译后文件(aot模式下生成)
|    |-- project.exe     //编译后文件(exe 可直接执行)
|    |-- project.kernel  //编译后文件(kernel 二进制文件,任何平台都可运行)
|-- cert
|-- devops
|-- env                  //环境目录
|    |-- dev.yaml        //开发模式下,此文件配置被加载
|    |-- prod.yaml       //部署模式下,此文件配置被加载
|    |-- test.yaml       //测试模式下,此文件配置被加载
|-- lib                  //核心包目录
|    |-- app             //应用目录
|    |-- bootstrap       //启动目录
|    |     |-- db        //数据库文件目录
|    |     |    |--Builder.dart    //生成sql语句
|    |     |    |--Column.dart     //数据表字段添加条件
|    |     |    |--Db.dart         //数据库操作主要类
|    |     |    |--DbConfig.dart   //数据库连接配置
|    |     |    |--DbConnection.dart   //数据库连接帮助
|    |     |    |--Raw.dart        //转换原生sql语句
|    |     |-- helper                  //帮助类
|    |     |    |--ConvertHelper.dart  //数据模型与数据表相互转换
|    |     |    |--LogHelper.dart      //日志记录
|    |     |    |--RouteHelper.dart    //路由配置与请求分发
|    |     |    |--VerifyHelper.dart   //数据验证
|    |     |-- App.dart                //应用启动
|    |     |-- Context.dart            //请求上下文
|    |     |-- Server.dart             //服务启动
|    |-- config                        //配置目录
|    |     |-- database.dart           //数据库连接配置
|    |     |-- route.dart              //路由配置
|    |-- extend                        //扩展目录
|    |-- tests                         //测试目录
|-- pubspec.yaml                       //项目说明
```
