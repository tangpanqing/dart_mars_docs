## 如何使用多环境

实际的开发和部署过程中，我们可能使用不同的配置，这种情况下，你可以使用多环境。

实际上，当你在使用如下命令的时候，即使用了开发环境

```bash
dart pub global run dart_mars --serve dev
```

在这种情况下，`DartMars` 将加载 `env/dev.yaml` 文件，并且使用里面的配置信息。

总共有三种环境，列表如下

| 名称      | 说明      |启用命令                                    |
| ----------|----------| -------------------------------------------| 
| dev       | 开发环境  | dart pub global run dart_mars --serve dev  | 
| test      | 测试环境  | dart pub global run dart_mars --serve test |
| prod      | 正式环境  | dart pub global run dart_mars --serve prod |

::: tip
请注意，如果你在启动服务的时候，没有指定环境类型，默认使用的是正式环境。
:::

## 环境文件里有什么

打开任一环境文件，你将看到里面配置的基本参数

| 参数名称          | 默认值        | 作用                |
| -----------------|---------------| -------------------| 
| dbHost           | localhost     | 数据库所在服务器地址 |
| dbPort           | 3306          | 数据库连接所用端口   |
| dbUser           | root          | 数据库连接用户名     |
| dbPassword       | root          | 数据库连接密码       |
| dbName           | example       | 数据库名            |
| ssl              | off           | 打开或关闭ssl       |
| sslCertificate   | cert/cert.pem | ssl证书地址        |
| sslCertificateKey| cert/key.pem  | ssl证书密钥地址    |

你可以根据自己的实际情况来调整。

## 如何添加自定义的环境参数

在实际的开发过程中，你可能需要添加自己的环境参数。

比如某个 `Api` 地址可能根据环境的不同而改变，你可以定义一个变量，

```dart
apiUrl: https://www.xxxx.com
```

然后，在所有能访问到 `Context` 的地方，你都可以访问到这个定义的变量。

比如在某控制器内

```dart
@RouteMeta('/', 'GET')
static void index(Context ctx) async {
    String apiUrl = ctx.env['apiUrl'].toString();
}
```



