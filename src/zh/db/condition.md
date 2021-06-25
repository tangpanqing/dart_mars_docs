## 如何使用查询条件
在之前的文档中，我们使用了如下的代码来查询数据

```dart
List<DbColumn> condition = [
    DbColumn('id', '=', 1),
];

await Db('article').where(condition).select();
```
其中每一个 `DbColumn`，即是一个查询条件，你可以在这个基础上添加更多，格式如下：
```dart
DbColumn('查询字段名', '查询表达式', '查询条件')
```

注意, 还可以使用 `DbColumn.fieldToUnderLine`, 该方法可以将 `查询字段名` 从驼峰写法转成下划线写法,以下两种写法是等效的
```dart
DbColumn('agent_id', '=', 1);
DbColumn.fieldToUnderLine('agentId', '=', 1);
```


## 有哪些查询操作

`DartMars` 支持的所有查询操作如下：

|符号 |作用                 |
|-----|--------------------|
|`>`  |查询字段大于某个值    |
|`>=` |查询字段大于等于某个值|
|`<`  |查询字段小于某个值    |
|`<=` |查询字段小于等于某个值|
|`=`  |查询字段等于某个值|
|`!=` |查询字段不等于某个值|
|`<>` |查询字段不等于某个值|
|`like`     |查询与给定值相似的记录|
|`not like` |查询与给定值不相似的记录|
|`between`     |查询在给定区间的记录|
|`not between` |查询不在给定区间的记录|
|`in`     |查询在若干值之内的记录|
|`not in` |查询不在若干值之内的记录|
|`exp` |查询满足条件(sql语法)|

## 如何使用like查询
关于 `like` 查询，举个例子，如果你的查询条件是这样

```dart
List<DbColumn> condition = [
    DbColumn('name', 'like', '%tom%'),
];

await Db('article').where(condition).select();
```

生成的`SQL`将如下

```sql
SELECT * FROM article WHERE name LIKE '%tom%'
```
## 如何使用between查询
关于 `between` 查询，举个例子，如果你的查询条件是这样

```dart
List<DbColumn> condition = [
    DbColumn('comment_point', 'between', [100,200]),
];

await Db('article').where(condition).select();
```

生成的`SQL`将如下

```sql
SELECT * FROM article WHERE comment_point BETWEEN 100 AND 200
```

## 如何使用in查询
关于 `in` 查询，举个例子，如果你的查询条件是这样

```dart
List<DbColumn> condition = [
    DbColumn('type_id', 'in', [1,3]),
];

await Db('article').where(condition).select();
```

生成的`SQL`将如下

```sql
SELECT * FROM article WHERE type_id IN (1,3)
```

## 如何使用exp查询
关于 `exp` 查询，举个例子，如果你的查询条件是这样

```dart
List<DbColumn> condition = [
    DbColumn('comment_point', 'exp', '=view_point+2'),
];

await Db('article').where(condition).select();
```

生成的`SQL`将如下

```sql
SELECT * FROM article WHERE comment_point=view_point+2
```

::: tip
当使用 `exp` 查询时，尤其要注意防止 `SQL注入` 。   
这是因为当使用 `exp` 查询时，`DartMars` 将直接把 `查询字段名` 与 `查询条件` 拼接成字符串，这里不会有预处理，容易产生 `SQL注入`。
:::