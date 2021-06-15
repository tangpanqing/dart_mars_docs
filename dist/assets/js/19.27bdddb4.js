(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{385:function(t,s,e){"use strict";e.r(s);var a=e(44),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"如何使用控制器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用控制器"}},[t._v("#")]),t._v(" 如何使用控制器")]),t._v(" "),e("p",[t._v("控制器，负责处理路由转发过来的请求，并且返回处理的结果。")]),t._v(" "),e("p",[t._v("默认情况下，当你使用命令行工具，成功创建一个项目后，在项目的lib/app/controller文件夹，会自动创建一个名字为HomeController，这是一个示例控制器，它的基本代码如下")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import 'package:dart_mars_demo/bootstrap/Context.dart';\nimport 'package:dart_mars_demo/bootstrap/meta/RouteMeta.dart';\n\nclass HomeController {\n  @RouteMeta('/', 'GET')\n  static void index(Context ctx) async {\n    ctx.html(\"hello world\");\n  }\n\n  @RouteMeta('/other', 'GET')\n  static void other(Context ctx) async {\n    String text = ctx.getString('text');\n    // some other code\n    ctx.html(\"get som text from web : \" + text);\n  }\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("p",[t._v("非常简单的一个示例。我们来认识一下它们。")]),t._v(" "),e("h2",{attrs:{id:"如何导入依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何导入依赖"}},[t._v("#")]),t._v(" 如何导入依赖")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import 'package:dart_mars_demo/bootstrap/Context.dart';\nimport 'package:dart_mars_demo/bootstrap/meta/RouteMeta.dart';\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("依赖是指当前文件所需要的外部功能文件。上面的代码，导入了两个依赖。")]),t._v(" "),e("p",[t._v("Context.dart 文件里，定义的有Context类，它提供了一些接收信息的方法，以及输出信息的方法。")]),t._v(" "),e("p",[t._v("RouteMeta.dart 文件里，定义的有RouteMeta类，它是一种修饰，来提醒开发者或者程序，因该以什么请求方式，什么请求路径，才能访问它所修饰的代码快。")]),t._v(" "),e("h2",{attrs:{id:"什么是控制器类和方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是控制器类和方法"}},[t._v("#")]),t._v(" 什么是控制器类和方法")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class HomeController {\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("这一行告诉我们，这个文件定义了一个控制器类，名字为 HomeController。 这个名字以Controller为结尾，是一种约定俗成的写法。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("static void index(Context ctx) async {\n// ...\nstatic void other(Context ctx) async {\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("这两行，即是定义了两个方法，名字分别是 index 和 other 。 其中有一些关键字，需要说明：")]),t._v(" "),e("p",[t._v("关键字 static 告诉我们，他们是静态方法。")]),t._v(" "),e("p",[t._v("也就是说，我们可以使用 HomeController.index 和 HomeController.other 直接使用他们。")]),t._v(" "),e("p",[t._v("关键字 void 告诉我们，这两个方法只是处理代码流程，并不返回信息。")]),t._v(" "),e("p",[t._v("关键字 async 告诉我们，这两个方法支持异步处理。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("staic,void,async 这三各关键字对于一个控制器的方法非常重要，千万不要忘记他们。")])]),t._v(" "),e("h2",{attrs:{id:"简单的请求和响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单的请求和响应"}},[t._v("#")]),t._v(" 简单的请求和响应")]),t._v(" "),e("p",[t._v("上面的index方法，里面只有一行代码")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ctx.html("hello world");\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("它的意思是，输出一句话 hello world 给浏览器请求。输出的内容类型是hmtl类型。")]),t._v(" "),e("p",[t._v("上面的other，里面有三行代码")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("String text = ctx.getString('text');\n// some other code\nctx.html(\"get som text from web : \" + text);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("它的意思是，接收请求参数 text, 并且再输出一句话给浏览器。")]),t._v(" "),e("p",[t._v("其中 ctx.getString('text') 即是接收请求参数的，")]),t._v(" "),e("p",[t._v("它表明接收的参数名字是text，接收的参数类型是String, 也就是字符串")]),t._v(" "),e("p",[t._v("接收请求信息，返回响应信息，相关的内容还有很多，在接下来的两节里，我们将深入认识他们。")])])}),[],!1,null,null,null);s.default=n.exports}}]);