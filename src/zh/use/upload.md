## 如何上传文件

上传文件时，请求内容类型 `contentType` 请选择 `multipart/form-data`

使用 `ctx.getUploadFile` 来获取上传的文件，该文件类型为 `UploadFile`

```dart
  @RouteMeta('/upload', 'POST')
  static void upload(Context ctx) async {
    UploadFile uploadFile = ctx.getUploadFile('file');

    String filename =
        CommonHelper.rootPath() + '/public/uploads/' + uploadFile.filename;

    File file = new File(filename);
    IOSink sink = file.openWrite();
    await sink.add(uploadFile.content);
    await sink.close();

    ctx.showSuccess('ok', {'filename': uploadFile.filename});
  }
```