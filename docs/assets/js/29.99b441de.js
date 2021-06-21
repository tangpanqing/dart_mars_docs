(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{393:function(v,_,t){"use strict";t.r(_);var e=t(44),d=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"如何验证数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何验证数据"}},[v._v("#")]),v._v(" 如何验证数据")]),v._v(" "),t("p",[t("code",[v._v("DartMars")]),v._v(" 默认提供了一些常用的验证数据的方法，你可以使用 "),t("code",[v._v("VerifyHelper")]),v._v(" 来使用他们。")]),v._v(" "),t("p",[v._v("例如验证某字符串是不是空字符串")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("String s1 = '';\ntrue == VerifyHelper.empty(s1);\n\nString s2;\ntrue == VerifyHelper.empty(s2);\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br")])]),t("p",[v._v("例如验证某数值是不是等于 "),t("code",[v._v("0")])]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("int n1 = 0;\ntrue == VerifyHelper.zero(n1);\n\nint n2;\ntrue == VerifyHelper.zero(n2);\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br")])]),t("p",[v._v("更多其他方法，参看下表")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("方法名称")]),v._v(" "),t("th",[v._v("作用")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("empty")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 为空, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notEmpty")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不为空, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("zero")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] = 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notZero")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] != 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("positive")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] > 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("positiveInt")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] > 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("positiveDouble")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] > 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notPositive")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] <= 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notPositiveInt")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] <= 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notPositiveDouble")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] <= 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("negative")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] < 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("negativeInt")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] < 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("negativeDouble")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] < 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notNegative")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] >= 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notNegativeInt")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] >= 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notNegativeDouble")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] >= 0, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("lengthBetween")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 的长度在 [min] 与 [max] 之间, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("lengthNotBetween")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 的长度不在 [min] 与 [max] 之间, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("lengthEq")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 的长度等于[length], 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("lengthNotEq")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 的长度不等于[length], 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("valueBetween")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] 的值在 [min] 与 [max] 之间, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("valueNotBetween")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] 的值不在 [min] 与 [max] 之间, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("valueEq")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] 的值等于 [value], 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("valueNotEq")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果数值 [n] 的值不等于 [value], 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("email")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是电子邮箱格式, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notEmail")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是电子邮箱格式, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("chsMobile")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是中国手机号码, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notChsMobile")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是中国手机号码, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("chsIdCard")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是中国身份证号, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notChsIdCard")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是中国身份证号, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("alpha")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是英文字母, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notAlpha")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是英文字母, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("alphaNum")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是英文字母,数字, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notAlphaNum")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是英文字母,数字, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("alphaNumDash")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是英文字母,数字,-,_, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notAlphaNumDash")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是英文字母,数字,-,_, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("chs")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是中文, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notChs")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是中文, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("chsAlpha")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是中文,英文字母, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notChsAlpha")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是中文,英文字母, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("chsAlphaNum")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是中文,英文字母,数字, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notChsAlphaNum")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是中文,英文字母,数字, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("chsAlphaNumDash")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 是中文,英文字母,数字,-,_, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])]),v._v(" "),t("tr",[t("td",[v._v("notChsAlphaNumDash")]),v._v(" "),t("td",[v._v("返回 "),t("code",[v._v("真")]),v._v(" 如果字符串 [s] 不是中文,英文字母,数字,-,_, 否则返回 "),t("code",[v._v("假")]),v._v(" .")])])])])])}),[],!1,null,null,null);_.default=d.exports}}]);