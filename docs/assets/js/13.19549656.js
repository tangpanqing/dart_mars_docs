(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(a,s,e){"use strict";e.r(s);var t=e(44),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"如何使用增查改删"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用增查改删"}},[a._v("#")]),a._v(" 如何使用增查改删")]),a._v(" "),e("p",[a._v("DarsMars封装了对数据库数据的基本增加，查询，修改，删除操作，简单易用。")]),a._v(" "),e("p",[a._v("实际使用过程中，通常会与模型结合使用，以下只是基本操作的展示。")]),a._v(" "),e("p",[a._v("使用Db相关类，需要先导入Db类，假设你的项目名为 dart_mars_demo, 则需要如下导包")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("import 'package:dart_mars_demo/bootstrap/db/Db.dart';\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"如何查询数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何查询数据"}},[a._v("#")]),a._v(" 如何查询数据")]),a._v(" "),e("p",[a._v("假设数据库中有一张表，表名是 article， 有title,desc,create_time等字段。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("List<Map<String,dynamic>> list = await Db('article').select();\n\n//转换成模型\nList<Article> articleList = list.map((e) => Article.fromJson(ConvertHelper.keyToHump(e))).toList();\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("通过以上代码，即可查询出该表所有数据。它产生的SQL语句如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SElECT * FROM article\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"如何增加数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何增加数据"}},[a._v("#")]),a._v(" 如何增加数据")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Map<String,dynamic> data = {\n    'title': 'DartMars is greate',\n    'desc': 'Yes, it is',\n    'create_time': 1623766514\n};\n\nawait Db('article').install(data);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("通过以上代码，即可增加一条记录，它产生的SQL语句为：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("INSERT INTO article (title,desc,create_time) VALUES ('DartMars is greate','Yes, it is',1623766514)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"如何修改数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何修改数据"}},[a._v("#")]),a._v(" 如何修改数据")]),a._v(" "),e("p",[a._v("如果需要修改id为1的数据")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("List<DbColumn> condition = [\n    DbColumn('id', '=', 1),\n];\n\nMap<String,dynamic> data = {\n    'title': 'DartMars is wondeful',\n};\n\nawait Db('article').where(condition).update(data);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[a._v("通过以上代码，即可修改一条记录，它产生的SQL语句为：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("UPDATE article SET title = 'DartMars is wondeful' WHERE id = 1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("注意，请记得导入DbColumn依赖文件")]),a._v(" "),e("h2",{attrs:{id:"如何删除数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何删除数据"}},[a._v("#")]),a._v(" 如何删除数据")]),a._v(" "),e("p",[a._v("如果需要删除id为1的数据")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("List<DbColumn> condition = [\n    DbColumn('id', '=', 1),\n];\n\nawait Db('article').where(condition).delete();\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("通过以上代码，即可删除一条记录，它产生的SQL语句为：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("DELETE FROM article WHERE id = 1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("注意，请记得导入DbColumn依赖文件")])])}),[],!1,null,null,null);s.default=n.exports}}]);