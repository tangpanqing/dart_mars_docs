## 如何上传文件

```
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