## 如何使用链式操作

`DartMars` 的 `Db` 类，支持链式操作。通过链式操作，可以很方便的进行条件组合。

例如基础的查询代码如下：

```dart
List<Map<String,dynamic>> list = await Db('article').select();

//转换成模型
List<Article> articleList = list.map((e) => Article.fromJson(ConvertHelper.keyToHump(e))).toList();
```

它产生的 `SQL` 语句是

```sql
SElECT * FROM article
```

## 如何筛选条件 (where)

如果需要筛选条件，直接 `.where` 即可

```dart
List<DbColumn> whereCondition = [DbColumn('type', '=', 1)];

List<Map<String,dynamic>> list = await Db('article').where(whereCondition).select();

//转换成模型
List<Article> articleList = list.map((e) => Article.fromJson(ConvertHelper.keyToHump(e))).toList();
```

它产生的 `SQL` 语句是

```sql
SElECT * FROM article WHERE type = 1
```

## 如何筛选字段 (field)

如果需要筛选字段，直接 `.field` 即可

```dart
List<DbColumn> whereCondition = [DbColumn('type', '=', 1)];

await Db('article')
    .where(whereCondition)
    .field('title')
    .select();
```

它产生的 `SQL` 语句是

```sql
SElECT title FROM article WHERE type = 1
```

## 如何分组查询 (group)

如果需要分组筛选，直接 `.group` 即可

```dart
List<DbColumn> whereCondition = [DbColumn('type', '=', 1)];

await Db('article')
    .where(whereCondition)
    .field('type,count(type) as count_type')
    .group('type')
    .select();
```

它产生的 `SQL` 语句是

```sql
SElECT type,count(type) as count_type FROM article WHERE type = 1 GROUP BY type
```

## 如何分组后筛选 (having)

如果需要分组后筛选，直接 `.having` 即可

```dart
List<DbColumn> whereCondition = [DbColumn('type', '=', 1)];

List<DbColumn> havingCondition = [DbColumn('count_type', '>', 10)];

await Db('article')
    .where(whereCondition)
    .field('type,count(type) as count_type')
    .group('type')
    .having(havingCondition)
    .select();
```

它产生的 `SQL` 语句是

```sql
SElECT type,count(type) as count_type FROM article WHERE type = 1 GROUP BY type HAVING count_type > 10
```


## 如何加锁 (lock)

如果需要在查询或者更新时枷锁，直接 `.lock` 即可

```dart
List<DbColumn> condition = [DbColumn('type', '=', 1)];

await Db('article')
    .where(condition)
    .lock(true)
    .select();
```

它产生的 `SQL` 语句是

```sql
SElECT * FROM article WHERE type = 1 FOR UPDATE
```

## 如何使用分页 (limit, page)

在查询过程中，可能需要分页, `DartMars` 提供了两种分页方法。

当使用 `.limit` 时,第一个参数是数据偏移量,第二个参数是分页数量

```dart
await Db('article')
    .limit(10, 20)
    .select();
```
生成的 `SQL` 如下，
```sql
SElECT * FROM article limit 10,20
```

当使用 `.page` 时,第一个参数是页数,第二个参数是分页数量

```dart
await Db('article')
    .page(10, 20)
    .select();
```
生成的 `SQL` 如下，
```sql
SElECT * FROM article limit 180,20
```
上面 `SQL` 中的 180 = (10 - 1) * 20

## 如何关联查询 (join)

在查询过程中，可能需要关联其他表, `DartMars` 提供了4种关联方法。

最基本的是使用 `.join`, 接收三个参数，第一个是关联表名, 第二个是关联条件，第三个是关联类型

```dart
await Db('article')
    .alias('a')
    .join('article_type t', 't.id=a.type_id', 'left')
    .field('a.*,t.name')
    .select();
```
生成的 `SQL` 如下，
```sql
SElECT a.*,t.name FROM article a LEFT JOIN article_type t ON t.id=a.type_id
```

另外还有 `.innerJoin`, `.leftJoin`, `.rightJoin` 三种，均是 `.join` 的延伸，省去了第三个参数。

注意上述代码中，使用到了 `.alias` 给主表添加别称

## 如何添加注释 (comment)

如果添加注释，直接 `.comment` 即可

```dart
await Db('article')
    .comment('查询所有文章')
    .select();
```

它产生的 `SQL` 语句是

```sql
SElECT * FROM article COMMENT '查询所有文章'
```
## 如何使用强制索引 (force)

如果需要使用强制索引，直接 `.force` 即可

```dart
await Db('article')
    .force('type')
    .select();
```

它产生的 `SQL` 语句是

```sql
SElECT * FROM article FORCE INDEX 'type'
```
## 如何将结果去重 (distinct)

如果需要将结果去重，直接 `.distinct` 即可

```dart
await Db('article')
    .distinct(true)
    .select();
```

它产生的 `SQL` 语句是

```sql
SElECT DISTINCT * FROM article
```

## 如何将结果排序 (order)

如果需要将结果排序，直接 `.order` 即可

```dart
await Db('article')
    .order('id desc')
    .select();
```

它产生的 `SQL` 语句是

```sql
SElECT * FROM article ORDER BY id desc
```
