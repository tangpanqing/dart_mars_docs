## 如何使用增查改删

DarsMars封装了对数据库数据的基本增加，查询，修改，删除操作，简单易用。

实际使用过程中，通常会与模型结合使用，以下只是基本操作的展示。

使用Db相关类，需要先导入Db类，假设你的项目名为 dart_mars_demo, 则需要如下导包

```
import 'package:dart_mars_demo/bootstrap/db/Db.dart';
```

## 如何查询数据 

假设数据库中有一张表，表名是 article， 有title,desc,create_time等字段。

```
List<Map<String,dynamic>> list = await Db('article').select();

//转换成模型
List<Article> articleList = list.map((e) => Article.fromJson(ConvertHelper.keyToHump(e))).toList();
```

通过以上代码，即可查询出该表所有数据。它产生的SQL语句如下：

```
SElECT * FROM article
```

## 如何增加数据 

```
Map<String,dynamic> data = {
    'title': 'DartMars is greate',
    'desc': 'Yes, it is',
    'create_time': 1623766514
};

await Db('article').install(data);
```

通过以上代码，即可增加一条记录，它产生的SQL语句为：

```
INSERT INTO article (title,desc,create_time) VALUES ('DartMars is greate','Yes, it is',1623766514)
```

## 如何修改数据 

如果需要修改id为1的数据

```
List<DbColumn> condition = [
    DbColumn('id', '=', 1),
];

Map<String,dynamic> data = {
    'title': 'DartMars is wondeful',
};

await Db('article').where(condition).update(data);
```

通过以上代码，即可修改一条记录，它产生的SQL语句为：

```
UPDATE article SET title = 'DartMars is wondeful' WHERE id = 1
```

注意，请记得导入DbColumn依赖文件

## 如何删除数据 

如果需要删除id为1的数据

```
List<DbColumn> condition = [
    DbColumn('id', '=', 1),
];

await Db('article').where(condition).delete();
```

通过以上代码，即可删除一条记录，它产生的SQL语句为：

```
DELETE FROM article WHERE id = 1
```

注意，请记得导入DbColumn依赖文件