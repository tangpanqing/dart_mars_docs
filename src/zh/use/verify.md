## 如何验证数据

`DartMars` 默认提供了一些常用的验证数据的方法，你可以使用 `VerifyHelper` 来使用他们。

例如验证某字符串是不是空字符串

```dart
String s1 = '';
true == VerifyHelper.empty(s1);

String s2;
true == VerifyHelper.empty(s2);
```

例如验证某数值是不是等于 `0`

```dart
int n1 = 0;
true == VerifyHelper.zero(n1);

int n2;
true == VerifyHelper.zero(n2);
```

更多其他方法，参看下表

| 方法名称                | 作用                                                                           |
| -----------------------|--------------------------------------------------------------------------------| 
| empty                  | 返回 `真` 如果字符串 [s] 为空, 否则返回 `假` .                                    |
| notEmpty               | 返回 `真` 如果字符串 [s] 不为空, 否则返回 `假` .                                  |
| zero                   | 返回 `真` 如果数值 [n] = 0, 否则返回 `假` .                                      |
| notZero                | 返回 `真` 如果数值 [n] != 0, 否则返回 `假` .                                     |
| positive               | 返回 `真` 如果数值 [n] > 0, 否则返回 `假` .                                      |
| positiveInt            | 返回 `真` 如果数值 [n] > 0, 否则返回 `假` .                                      |
| positiveDouble         | 返回 `真` 如果数值 [n] > 0, 否则返回 `假` .                                      |
| notPositive            | 返回 `真` 如果数值 [n] <= 0, 否则返回 `假` .                                     |
| notPositiveInt         | 返回 `真` 如果数值 [n] <= 0, 否则返回 `假` .                                     |
| notPositiveDouble      | 返回 `真` 如果数值 [n] <= 0, 否则返回 `假` .                                     |
| negative               | 返回 `真` 如果数值 [n] < 0, 否则返回 `假` .                                      |
| negativeInt            | 返回 `真` 如果数值 [n] < 0, 否则返回 `假` .                                      |
| negativeDouble         | 返回 `真` 如果数值 [n] < 0, 否则返回 `假` .                                      |
| notNegative            | 返回 `真` 如果数值 [n] >= 0, 否则返回 `假` .                                     |
| notNegativeInt         | 返回 `真` 如果数值 [n] >= 0, 否则返回 `假` .                                     |
| notNegativeDouble      | 返回 `真` 如果数值 [n] >= 0, 否则返回 `假` .                                     |
| lengthBetween          | 返回 `真` 如果字符串 [s] 的长度在 [min] 与 [max] 之间, 否则返回 `假` .             |
| lengthNotBetween       | 返回 `真` 如果字符串 [s] 的长度不在 [min] 与 [max] 之间, 否则返回 `假` .           |
| lengthEq               | 返回 `真` 如果字符串 [s] 的长度等于[length], 否则返回 `假` .                      |
| lengthNotEq            | 返回 `真` 如果字符串 [s] 的长度不等于[length], 否则返回 `假` .                    |
| valueBetween           | 返回 `真` 如果数值 [n] 的值在 [min] 与 [max] 之间, 否则返回 `假` .                |
| valueNotBetween        | 返回 `真` 如果数值 [n] 的值不在 [min] 与 [max] 之间, 否则返回 `假` .              |
| valueEq                | 返回 `真` 如果数值 [n] 的值等于 [value], 否则返回 `假` .                          |
| valueNotEq             | 返回 `真` 如果数值 [n] 的值不等于 [value], 否则返回 `假` .                        |
| email                  | 返回 `真` 如果字符串 [s] 是电子邮箱格式, 否则返回 `假` .                           |
| notEmail               | 返回 `真` 如果字符串 [s] 不是电子邮箱格式, 否则返回 `假` .                         |
| chsMobile              | 返回 `真` 如果字符串 [s] 是中国手机号码, 否则返回 `假` .                           |
| notChsMobile           | 返回 `真` 如果字符串 [s] 不是中国手机号码, 否则返回 `假` .                         |
| chsIdCard              | 返回 `真` 如果字符串 [s] 是中国身份证号, 否则返回 `假` .                           |
| notChsIdCard           | 返回 `真` 如果字符串 [s] 不是中国身份证号, 否则返回 `假` .                         |
| alpha                  | 返回 `真` 如果字符串 [s] 是英文字母, 否则返回 `假` .                               |
| notAlpha               | 返回 `真` 如果字符串 [s] 不是英文字母, 否则返回 `假` .                             |
| alphaNum               | 返回 `真` 如果字符串 [s] 是英文字母,数字, 否则返回 `假` .                          |
| notAlphaNum            | 返回 `真` 如果字符串 [s] 不是英文字母,数字, 否则返回 `假` .                        |
| alphaNumDash           | 返回 `真` 如果字符串 [s] 是英文字母,数字,-,_, 否则返回 `假` .                      |
| notAlphaNumDash        | 返回 `真` 如果字符串 [s] 不是英文字母,数字,-,_, 否则返回 `假` .                    |
| chs                    | 返回 `真` 如果字符串 [s] 是中文, 否则返回 `假` .                                  |
| notChs                 | 返回 `真` 如果字符串 [s] 不是中文, 否则返回 `假` .                                |
| chsAlpha               | 返回 `真` 如果字符串 [s] 是中文,英文字母, 否则返回 `假` .                          |
| notChsAlpha            | 返回 `真` 如果字符串 [s] 不是中文,英文字母, 否则返回 `假` .                        |
| chsAlphaNum            | 返回 `真` 如果字符串 [s] 是中文,英文字母,数字, 否则返回 `假` .                     |
| notChsAlphaNum         | 返回 `真` 如果字符串 [s] 不是中文,英文字母,数字, 否则返回 `假` .                   |
| chsAlphaNumDash        | 返回 `真` 如果字符串 [s] 是中文,英文字母,数字,-,_, 否则返回 `假` .                 |
| notChsAlphaNumDash     | 返回 `真` 如果字符串 [s] 不是中文,英文字母,数字,-,_, 否则返回 `假` .               |
