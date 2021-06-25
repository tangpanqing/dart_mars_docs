## 如何使用增查改删

`DarsMars` 封装了对数据库数据的基本增加，查询，修改，删除操作，简单易用。

实际使用过程中，通常会与模型结合使用，以下只是基本操作的展示。

使用 `Db` 相关类，需要先导入 `Db` 类，假设你的项目名为 `project_name`, 则需要如下导包

```dart
import 'package:project_name/bootstrap/db/Db.dart';
```

## 如何查询数据 

假设数据库中有一张表，表名是 `article`， 有 `title` , `desc` , `create_time` 等字段。

```dart
List<Map<String,dynamic>> list = await Db('article').select();

//转换成模型
List<Article> articleList = list.map((e) => Article.fromJson(ConvertHelper.keyToHump(e))).toList();
```

通过以上代码，即可查询出该表所有数据。它产生的 `SQL` 语句如下：

```sql
SElECT * FROM article
```

如果需要查询单条数据

```dart
Map<String,dynamic> item = await Db('article').find();
```

它产生的 `SQL` 语句如下：

```sql
SElECT * FROM article LIMIT 0,1
```


## 如何增加数据 

```dart
Map<String,dynamic> data = {
    'title': 'DartMars is greate',
    'desc': 'Yes, it is',
    'create_time': 1623766514
};

await Db('article').install(data);
```

通过以上代码，它产生的 `SQL` 语句为：

```sql
INSERT INTO article (title,desc,create_time) VALUES ('DartMars is greate','Yes, it is',1623766514)
```

## 如何修改数据 

如果需要修改 `id` 为 `1` 的数据

```dart
List<DbColumn> condition = [
    DbColumn('id', '=', 1),
];

Map<String,dynamic> data = {
    'title': 'DartMars is wondeful',
};

await Db('article').where(condition).update(data);
```

通过以上代码，它产生的 `SQL` 语句为：

```sql
UPDATE article SET title = 'DartMars is wondeful' WHERE id = 1
```

注意，请记得导入 `DbColumn` 依赖文件

## 如何删除数据 

如果需要删除 `id` 为 `1` 的数据

```dart
List<DbColumn> condition = [
    DbColumn('id', '=', 1),
];

await Db('article').where(condition).delete();
```

通过以上代码，它产生的 `SQL` 语句为：

```sql
DELETE FROM article WHERE id = 1
```

注意，请记得导入 `DbColumn` 依赖文件

## 如何使用原生查询 

如果使用原生查询，可以使用 `.query`

```dart
String sql = 'SELECT * FROM article';

await Db.query(sql);
```

通过以上代码，它产生的 `SQL` 语句为：

```sql
SELECT * FROM article
```