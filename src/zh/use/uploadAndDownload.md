## 如何上传和下载文件

## 如何上传文件

上传文件时，请求内容类型 `contentType` 请选择 `multipart/form-data`

使用 `ctx.getUploadFile` 来获取上传的文件，该文件类型为 `UploadFile`

```dart
  @RouteMeta('/upload', 'POST')
  static void upload(Context ctx) async {
    
    // 获取上传文件
    UploadFile uploadFile = ctx.getUploadFile('file');

    // 本地的文件地址
    String filename =
        CommonHelper.rootPath() + '/public/uploads/' + uploadFile.filename;

    // 保存文件
    File file = new File(filename);
    IOSink sink = file.openWrite();
    await sink.add(uploadFile.content);
    await sink.close();

    // 输出成功信息
    ctx.showSuccess('ok', {'filename': uploadFile.filename});
  }
```


以上使用到了 `CommonHelper`, `UploadFile` 相关类，需要先导入，假设你的项目名为 `project_name`, 则需要如下导包
```dart
import 'package:project_name/bootstrap/helper/CommonHelper.dart';
import 'package:project_name/bootstrap/model/UploadFile.dart';
```

## 如何下载文件