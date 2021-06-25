---
home: true
heroText: DartMars
tagline: 为服务端开发工程师而生
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁
  details: 不创造任何新概念，不增加任何理解障碍，DartMars帮助你专注于项目开发。
- title: 易用
  details: 优先使用命令化和自动化，DartMars更加易于使用。
- title: 高效
  details: 得益于Dart语言的事件驱动和异步IO，DartMars拥有超高执行性能。
footer: MIT Licensed | Copyright © 2021-present Tangpanqing
---

## 开始一个项目如此简单

```bash
# 安装DartMars
dart pub global activate --source git https://github.com/tangpanqing/dart_mars.git

# 创建项目
dart pub global run dart_mars --create project_name

# 进入目录
cd project_name

# 获取依赖
dart pub global run dart_mars --get 

# 启动项目
dart pub global run dart_mars --serve dev
```

::: tip
如果你的计算机还没有安装 `Dart` 语言环境，请先安装。   
如果你已经安装过 `Flutter` 开发环境，那说明你系统内已经支持 `Dart` 语言环境，因此不需要重复安装。
:::