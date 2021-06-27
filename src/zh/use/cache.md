## 如何使用Redis缓存

`DartMars` 封装了缓存操作类，可以直接执行 `Redis` 相关操作，满足大部分日常需求。

使用之前，先导入缓存操作类。

```dart
import 'package:project_name/bootstrap/redis/Redis.dart';
```

接下来，可以这样使用

```dart
//初始化类
Redis redis = Redis();

//连接Redis服务器
await redis.connect('localhost', 3379);

//验证
await redis.auth('123456');

//设置key
await reids.set('key', '1');

//获取key
dynamic res = await redis.get('key');
print(res);
```

请注意，大多数操作都需要通过返回值是否等于字符串 `OK` 来判断是否成功。

## 还支持哪些操作

上述代码，只是简单演示，`DartMars` 还支持对 `redis` 的以下操作

各操作用法和意义，请参看注释或者网页。

|键       |字符串       |散列表       |列表         |集合        |有序集合         |
|---------|------------|-------------|------------|------------|----------------|
|del	  |append      |hdel	     |blpop	      |sadd	       |zadd            |
|dump	  |bitcount    |hexists	     |brpop	      |scard	   |zcard           |
|exists   |bitop       |hget	     |brpoplpush  |sdiff	   |zcount          |
|expire   |decr        |hgetall	     |lindex	  |sdiffstore  |zincrby         |
|expireat |decrby      |hincrby	     |linsert	  |sinter	   |zrange          |
|keys	  |get         |hincrbyfloat |llen	      |sinterstore |zrangebyscore   |
|migrate  |getbit      |hkeys        |lpop	      |sismember   |zrank           |
|move     |getrange    |hlen	     |lpush	      |smembers	   |zrem            |
|object   |getset      |hmget	     |lpushx	  |smove	   |zremrangebyrank |
|persist  |incr        |hmset	     |lrange	  |spop	       |zremrangebyscore|
|pexpire  |incrby      |hset	     |lrem	      |srandmember |zrevrange       |
|pexpireat|incrbyfloat |hsetnx	     |lset	      |srem	       |zrevrangebyscore|
|pttl     |mget	       |hvals	     |ltrim	      |sunion	   |zrevrank        |
|randomkey|mset        |hscan	     |rpop	      |sunionstore |zscore          |
|rename	  |msetnx	   |             |rpoplpush	  |sscan	   |zunionstore     |                
|renamenx |psetex	   |             |rpush		  |            |zinterstore     |                          
|restore  |set	       |             |rpushx	  |            |zscan           |                            
|sort     |setbit	   |			 |            |            |                |
|ttl      |setex	   |	         |	          |            |                |
|type     |setnx	   |		     |            |            |                |
|scan     |setrange	   |		     |            |            |                |
|	      |strlen	   |		     |            |            |                |


|发布订阅      |事务     |脚本          |连接       |服务器          |
|-------------|---------|--------------|----------|----------------|
|psubscribe	  |discard	|eval	       |auth	  |bgrewriteaof    |
|publish	  |exec	    |evalsha       |echo	  |bgsave          |
|pubsub	      |multi	|script exists |ping	  |client getname  |
|punsubscribe |unwatch	|script flush  |quit	  |client kill     |
|subscribe	  |watch	|script kill   |select	  |client list     |
|unsubscribe  |         |script load   |          |client setname  |
|             |         |			   |          |config get      |
|             |         |			   |          |config resetstat|
|             |         |			   |          |config rewrite  |
|             |         |			   |          |config set      |
|             |         |			   |          |dbsize          |
|             |         |			   |          |debug object    |
|             |         |			   |          |debug segfault  |
|             |         |			   |          |flushall        |
|             |         |			   |          |flushdb         |
|             |         |			   |          |info            |
|             |         |			   |          |lastsave        |
|             |         |			   |          |monitor         |
|             |         |			   |          |psync           |
|             |         |			   |          |save            |
|             |         |			   |          |shutdown        |
|             |         |			   |          |slaveof         |
|             |         |			   |          |slowlog         |
|             |         |			   |          |sync            |
|             |         |			   |          |time            |

