(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{384:function(a,t,s){"use strict";s.r(t);var r=s(44),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"如何安装dartmars"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何安装dartmars"}},[a._v("#")]),a._v(" 如何安装DartMars")]),a._v(" "),s("p",[a._v("DartMars是基于Dart语言的服务端框架，因此你的计算机必须支持Dart语言环境。")]),a._v(" "),s("p",[a._v("如果你的计算机还没有安装Dart语言环境，请按照此指引 "),s("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Dart%E8%AF%AD%E8%A8%80%E7%8E%AF%E5%A2%83"}},[a._v("如何安装Dart语言环境")])]),a._v(" "),s("p",[a._v("如果你的计算机还已经安装Dart语言环境，打开你的命令行工具，键入如下内容，即可开始一个Dart服务端项目")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("dart pub global activate --source git https://github.com/tangpanqing/dart_mars.git\ndart pub global run dart_mars --create project_name\ncd project_name\ndart pub global run dart_mars --get \ndart pub global run dart_mars --serve dev\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("经过以上命令，如果不出意外，你将看到命令行提示:")]),a._v(" "),s("p",[a._v("有一个本地HTTP服务已经开启，在80端口")]),a._v(" "),s("p",[a._v("此时，你也可以打开浏览器，访问本地服务器 http://127.0.0.1 或者 http://localhost")]),a._v(" "),s("p",[a._v("即可看到DartMars默认输出的内容")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("hello world\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"如何安装dart语言环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何安装dart语言环境"}},[a._v("#")]),a._v(" 如何安装Dart语言环境")]),a._v(" "),s("p",[a._v("Dart语言环境，根据不同的平台，安装方式略有不同，相同的是，安装步骤都很容易。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("如果你已经安装过Flutter开发环境，那说明你系统内已经支持Dart语言环境，因此不需要重复安装。")])]),a._v(" "),s("h2",{attrs:{id:"在windows平台安装dart语言环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在windows平台安装dart语言环境"}},[a._v("#")]),a._v(" 在Windows平台安装Dart语言环境")]),a._v(" "),s("p",[a._v("如果你已经安装 Chocolatey ， 推荐使用以下命令来安装Dart语言环境")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("choco install dart-sdk\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("当然，你也可以通过安装包来安装Dart环境，"),s("a",{attrs:{href:"https://gekorm.com/dart-windows/",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装包下载地址"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"在linux平台安装dart语言环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在linux平台安装dart语言环境"}},[a._v("#")]),a._v(" 在Linux平台安装Dart语言环境")]),a._v(" "),s("p",[a._v("如果你使用的是Debian/Ubuntu等系统，需要先更新apt的仓库")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get update\nsudo apt-get install apt-transport-https\nsudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'\nsudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("然后安装Dart语言环境")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get update\nsudo apt-get install dart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"在mac平台安装dart语言环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在mac平台安装dart语言环境"}},[a._v("#")]),a._v(" 在Mac平台安装Dart语言环境")]),a._v(" "),s("p",[a._v("如果你使用的是mac系统，可以使用homebrew来安装")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew tap dart-lang/dart\nbrew install dart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);