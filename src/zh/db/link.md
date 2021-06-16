## 如何使用链式操作

DartMars的Db类，支持链式操作。通过链式操作，可以很方便的进行条件组合。

例如基础的查询代码如下：

```
List<Map<String,dynamic>> list = await Db('article').select();

//转换成模型
List<Article> articleList = list.map((e) => Article.fromJson(ConvertHelper.keyToHump(e))).toList();
```

它产生的SQL语句是

```
SElECT * FROM article
```

## 如何筛选条件 (where)

如果需要筛选条件，直接 .where 即可

```
List<DbColumn> whereCondition = [DbColumn('type', '=', 1)];

List<Map<String,dynamic>> list = await Db('article').where(whereCondition).select();

//转换成模型
List<Article> articleList = list.map((e) => Article.fromJson(ConvertHelper.keyToHump(e))).toList();
```

它产生的SQL语句是

```
SElECT * FROM article WHERE type = 1
```

## 如何筛选字段 (field)

如果需要筛选字段，直接 .field 即可

```
List<DbColumn> whereCondition = [DbColumn('type', '=', 1)];

await Db('article')
    .where(whereCondition)
    .field('title')
    .select();
```

它产生的SQL语句是

```
SElECT title FROM article WHERE type = 1
```

## 如何分组查询 (group)

如果需要分组筛选，直接 .group 即可

```
List<DbColumn> whereCondition = [DbColumn('type', '=', 1)];

await Db('article')
    .where(whereCondition)
    .field('type,count(type) as count_type')
    .group('type')
    .select();
```

它产生的SQL语句是

```
SElECT type,count(type) as count_type FROM article WHERE type = 1 GROUP BY type
```

## 如何分组后筛选 (having)

如果需要分组后筛选，直接 .having 即可

```
List<DbColumn> whereCondition = [DbColumn('type', '=', 1)];

List<DbColumn> havingCondition = [DbColumn('count_type', '>', 10)];

await Db('article')
    .where(whereCondition)
    .field('type,count(type) as count_type')
    .group('type')
    .having(havingCondition)
    .select();
```

它产生的SQL语句是

```
SElECT type,count(type) as count_type FROM article WHERE type = 1 GROUP BY type HAVING count_type > 10
```

## 如何 (where)

如果需要筛选条件，直接 .where 即可

```
List<DbColumn> whereCondition = [DbColumn('type', '=', 1)];

List<Map<String,dynamic>> list = await Db('article').where(whereCondition).select();

//转换成模型
List<Article> articleList = list.map((e) => Article.fromJson(ConvertHelper.keyToHump(e))).toList();
```

它产生的SQL语句是

```
SElECT * FROM article WHERE type = 1
```
