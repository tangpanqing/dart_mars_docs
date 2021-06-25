## 如何使用数据库事务

`DartMars` 支持数据库事务，相关操作有

| 操作名称      | 作用          |
| -------------|---------------| 
| startTrans   | 开始事务       |
| commit       | 提交事务       |
| rollback     | 回滚事务       |

在需要的地方，你可以如下操作:

```Dart
try{
    await Db.startTrans();
    // some code about business
    await Db.commit();
}catch(e,s){
    await Db.rollback();
    // some code when catch exption
}
```

## 如何使用事务帮助类

直接使用 `try` 和 `catch` 来处理数据库事务，能满足日常工作，但是最好还是再封装一下。

`DartMars` 封装了 `TransHelper` 事务帮助类, 用法如下

```Dart
TransHelper.unit(
    catchFunc: (e, s) {
        ctx.showError('发生异常');
    },
    tryFunc: () async {
        // some other code
        ctx.showError('执行成功');
    },
);
```

更简洁的，你可以使用 `TransHelper.simple`

```Dart
TransHelper.simple(ctx, () async {
        // some other code
        ctx.showError('执行成功');
    }
);
```


请记得导入类

```dart
import 'package:project_name/bootstrap/helper/TransHelper.dart';
```

`DartMars`对事务操作的封装，更多的考虑是通用性。 

然而每项业务都有自己的规范，建议开发者对 `TransHelper` 再封装，使其更加易用。